import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../../shared/database/prisma.js';
import { AppError } from '../../../shared/errors/app-error.js';
import {
  createAdminSchema,
  updateAdminSchema,
  resetPasswordSchema
} from './admin.schemas.js';

const BCRYPT_ROUNDS = 12;

const getParamId = (request: Request): string => {
  const id = request.params['id'];
  if (typeof id !== 'string') {
    throw new AppError({ statusCode: 400, code: 'INVALID_ID', message: 'Invalid admin ID.' });
  }
  return id;
};

export class AdminManagementController {
  list = async (request: Request, response: Response) => {
    const admins = await prisma.adminUser.findMany({
      omit: { password: true },
      orderBy: { createdAt: 'desc' }
    });

    response.json({
      success: true,
      data: admins,
      requestId: request.requestId
    });
  };

  create = async (request: Request, response: Response) => {
    const input = createAdminSchema.parse(request.body);

    const existing = await prisma.adminUser.findUnique({
      where: { email: input.email }
    });
    if (existing) {
      throw new AppError({
        statusCode: 409,
        code: 'EMAIL_EXISTS',
        message: 'An admin with this email already exists.'
      });
    }

    const hashedPassword = await bcrypt.hash(input.password, BCRYPT_ROUNDS);

    const admin = await prisma.adminUser.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
        role: input.role,
        forcePasswordChange: true,
        createdById: request.admin!.id
      },
      omit: { password: true }
    });

    response.status(201).json({
      success: true,
      data: admin,
      requestId: request.requestId
    });
  };

  update = async (request: Request, response: Response) => {
    const id = getParamId(request);
    const input = updateAdminSchema.parse(request.body);

    const data: Record<string, string | boolean> = {};
    if (input.name !== undefined) data['name'] = input.name;
    if (input.role !== undefined) data['role'] = input.role;
    if (input.isActive !== undefined) data['isActive'] = input.isActive;

    const admin = await prisma.adminUser.update({
      where: { id },
      data,
      omit: { password: true }
    });

    response.json({
      success: true,
      data: admin,
      requestId: request.requestId
    });
  };

  remove = async (request: Request, response: Response) => {
    const id = getParamId(request);

    if (id === request.admin!.id) {
      throw new AppError({
        statusCode: 400,
        code: 'CANNOT_DELETE_SELF',
        message: 'You cannot delete your own account.'
      });
    }

    await prisma.adminUser.delete({
      where: { id }
    });

    response.json({
      success: true,
      message: 'Admin deleted successfully.',
      requestId: request.requestId
    });
  };

  resetPassword = async (request: Request, response: Response) => {
    const id = getParamId(request);
    const { newPassword } = resetPasswordSchema.parse(request.body);

    const hashedPassword = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);

    await prisma.adminUser.update({
      where: { id },
      data: { password: hashedPassword, forcePasswordChange: true }
    });

    response.json({
      success: true,
      message: 'Password reset successfully.',
      requestId: request.requestId
    });
  };

  stats = async (request: Request, response: Response) => {
    const [total, active] = await Promise.all([
      prisma.adminUser.count(),
      prisma.adminUser.count({ where: { isActive: true } })
    ]);

    response.json({
      success: true,
      data: { total, active },
      requestId: request.requestId
    });
  };
}

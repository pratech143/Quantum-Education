import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../../shared/database/prisma.js';
import { AppError } from '../../../shared/errors/app-error.js';
import { updateProfileSchema, changePasswordSchema } from './admin.schemas.js';

const BCRYPT_ROUNDS = 12;

export class AdminProfileController {
  update = async (request: Request, response: Response) => {
    const input = updateProfileSchema.parse(request.body);

    const data: Record<string, string> = {};
    if (input.name !== undefined) data['name'] = input.name;

    const admin = await prisma.adminUser.update({
      where: { id: request.admin!.id },
      data,
      omit: { password: true }
    });

    response.json({
      success: true,
      data: admin,
      requestId: request.requestId
    });
  };

  changePassword = async (request: Request, response: Response) => {
    const { currentPassword, newPassword } = changePasswordSchema.parse(request.body);

    const admin = await prisma.adminUser.findUnique({
      where: { id: request.admin!.id }
    });

    if (!admin) {
      throw new AppError({
        statusCode: 404,
        code: 'NOT_FOUND',
        message: 'Admin not found.'
      });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!passwordMatch) {
      throw new AppError({
        statusCode: 401,
        code: 'INVALID_PASSWORD',
        message: 'Current password is incorrect.'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);

    await prisma.adminUser.update({
      where: { id: request.admin!.id },
      data: { password: hashedPassword, forcePasswordChange: false }
    });

    response.json({
      success: true,
      message: 'Password changed successfully.',
      requestId: request.requestId
    });
  };
}

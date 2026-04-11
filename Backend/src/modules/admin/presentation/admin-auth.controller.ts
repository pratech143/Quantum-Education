import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../../../shared/config/env.js';
import { prisma } from '../../../shared/database/prisma.js';
import { AppError } from '../../../shared/errors/app-error.js';
import { loginSchema } from './admin.schemas.js';

const BCRYPT_ROUNDS = 12;
const JWT_EXPIRES_IN = '24h';

const signToken = (adminId: string, role: string) =>
  jwt.sign({ adminId, role }, env.ADMIN_JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

const setTokenCookie = (response: Response, token: string) => {
  response.cookie('admin_token', token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
    path: '/'
  });
};

export class AdminAuthController {
  login = async (request: Request, response: Response) => {
    const { email, password } = loginSchema.parse(request.body);

    const admin = await prisma.adminUser.findUnique({ where: { email } });

    if (!admin || !admin.isActive) {
      throw new AppError({
        statusCode: 401,
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password.'
      });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      throw new AppError({
        statusCode: 401,
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password.'
      });
    }

    const token = signToken(admin.id, admin.role);
    setTokenCookie(response, token);

    response.json({
      success: true,
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        forcePasswordChange: admin.forcePasswordChange,
        token
      },
      requestId: request.requestId
    });
  };

  logout = async (_request: Request, response: Response) => {
    response.clearCookie('admin_token', { path: '/' });
    response.json({ success: true, message: 'Logged out successfully.' });
  };

  me = async (request: Request, response: Response) => {
    const admin = await prisma.adminUser.findUnique({
      where: { id: request.admin!.id },
      omit: { password: true }
    });

    response.json({
      success: true,
      data: admin,
      requestId: request.requestId
    });
  };
}

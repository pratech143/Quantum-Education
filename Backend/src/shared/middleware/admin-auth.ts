import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { prisma } from '../database/prisma.js';
import { AppError } from '../errors/app-error.js';

type JwtPayload = {
  adminId: string;
  role: string;
};

declare global {
  namespace Express {
    interface Request {
      admin?: {
        id: string;
        name: string;
        email: string;
        role: 'SUPERADMIN' | 'ADMIN';
        isActive: boolean;
        forcePasswordChange: boolean;
      };
    }
  }
}

export const authenticateAdmin = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const token =
    request.cookies?.admin_token ||
    request.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    throw new AppError({
      statusCode: 401,
      code: 'UNAUTHORIZED',
      message: 'Authentication required.'
    });
  }

  let payload: JwtPayload;
  try {
    payload = jwt.verify(token, env.ADMIN_JWT_SECRET) as JwtPayload;
  } catch {
    throw new AppError({
      statusCode: 401,
      code: 'INVALID_TOKEN',
      message: 'Invalid or expired token.'
    });
  }

  const admin = await prisma.adminUser.findUnique({
    where: { id: payload.adminId }
  });

  if (!admin || !admin.isActive) {
    throw new AppError({
      statusCode: 401,
      code: 'UNAUTHORIZED',
      message: 'Account not found or deactivated.'
    });
  }

  request.admin = {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    isActive: admin.isActive,
    forcePasswordChange: admin.forcePasswordChange
  };

  next();
};

export const requireSuperAdmin = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  if (!request.admin || request.admin.role !== 'SUPERADMIN') {
    throw new AppError({
      statusCode: 403,
      code: 'FORBIDDEN',
      message: 'Superadmin access required.'
    });
  }
  next();
};

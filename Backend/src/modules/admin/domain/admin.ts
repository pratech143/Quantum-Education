export type { AdminRole, AdminUser } from '../../../generated/prisma/client.js';

export type AdminPublic = {
  id: string;
  name: string;
  email: string;
  role: 'SUPERADMIN' | 'ADMIN';
  isActive: boolean;
  forcePasswordChange: boolean;
  createdById: string | null;
  createdAt: Date;
  updatedAt: Date;
};

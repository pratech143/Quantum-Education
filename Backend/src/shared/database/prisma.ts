import { PrismaClient } from '../../generated/prisma/client.js';
import { env } from '../config/env.js';

export const prisma = new PrismaClient({
  accelerateUrl: env.DATABASE_URL
});

export const connectDatabase = async () => {
  await prisma.$connect();
};

export const disconnectDatabase = async () => {
  await prisma.$disconnect();
};

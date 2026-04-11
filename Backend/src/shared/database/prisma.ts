import { PrismaClient } from '../../generated/prisma/client.js';
import { env } from '../config/env.js';

export const prisma = new PrismaClient();

export const connectDatabase = async () => {
  await prisma.$connect();
};

export const disconnectDatabase = async () => {
  await prisma.$disconnect();
};

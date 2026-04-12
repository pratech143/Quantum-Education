import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../../shared/database/prisma.js';
import { env } from '../../shared/config/env.js';

const TEST_ADMIN_EMAIL = 'test-admin@test.com';

export const generateAdminToken = async (): Promise<string> => {
  const hashedPassword = await bcrypt.hash('TestPassword123!', 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: TEST_ADMIN_EMAIL },
    update: {},
    create: {
      name: 'Test Admin',
      email: TEST_ADMIN_EMAIL,
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true,
      forcePasswordChange: false
    }
  });

  return jwt.sign({ adminId: admin.id, role: admin.role }, env.ADMIN_JWT_SECRET, {
    expiresIn: '1h'
  });
};

export const cleanupTestData = async () => {
  await prisma.university.deleteMany({});
  await prisma.country.deleteMany({});
  await prisma.adminUser.deleteMany({ where: { email: TEST_ADMIN_EMAIL } });
};

export const createTestCountry = async (overrides: Record<string, unknown> = {}) => {
  return prisma.country.create({
    data: {
      name: 'Test Country',
      description: 'A test country for automated tests.',
      tuitionFees: 15000,
      visaInfo: 'Student visa required with proof of enrollment.',
      livingCost: 1200,
      currency: 'USD',
      ...overrides
    }
  });
};

export const createTestUniversity = async (countryId: string, overrides: Record<string, unknown> = {}) => {
  return prisma.university.create({
    data: {
      name: 'Test University',
      description: 'A test university for automated tests.',
      ranking: 50,
      website: 'https://test-university.edu',
      countryId,
      ...overrides
    }
  });
};

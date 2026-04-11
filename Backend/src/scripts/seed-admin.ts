import 'dotenv/config';
import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env['DATABASE_URL']!
    }
  }
});

const BCRYPT_ROUNDS = 12;

async function seed() {
  const email = 'admin@site.com';
  const password = 'Admin@123';

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`Superadmin already exists: ${email}`);
    await prisma.$disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  const admin = await prisma.adminUser.create({
    data: {
      name: 'Super Admin',
      email,
      password: hashedPassword,
      role: 'SUPERADMIN',
      isActive: true,
      forcePasswordChange: true
    }
  });

  console.log(`Superadmin created successfully:`);
  console.log(`  Email: ${email}`);
  console.log(`  Password: ${password}`);
  console.log(`  ID: ${admin.id}`);
  console.log(`  Force password change: true`);

  await prisma.$disconnect();
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});

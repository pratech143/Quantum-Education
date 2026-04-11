import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const splitCsv = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  API_PREFIX: z.string().trim().min(1).default('/api/v1'),
  ALLOWED_ORIGINS: z
    .string()
    .default('http://localhost:5173')
    .transform(splitCsv),
  CONTACT_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(15 * 60 * 1000),
  CONTACT_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  ADMIN_JWT_SECRET: z.string().min(32, 'ADMIN_JWT_SECRET must be at least 32 characters')
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment configuration', parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsedEnv.data;

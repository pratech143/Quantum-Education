import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const splitCsv = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const toBoolean = (value: string) => value === 'true';

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
  ADMIN_JWT_SECRET: z.string().min(32, 'ADMIN_JWT_SECRET must be at least 32 characters'),
  CONTACT_NOTIFICATION_TO_EMAIL: z.string().email().optional(),
  CONTACT_NOTIFICATION_SUBJECT: z.string().trim().min(1).default('New website lead received'),
  ADMIN_PANEL_URL: z.string().url().optional(),
  SMTP_HOST: z.string().trim().min(1).optional(),
  SMTP_PORT: z.coerce.number().int().min(1).max(65535).optional(),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((value) => value ? toBoolean(value) : undefined),
  SMTP_USER: z.string().trim().min(1).optional(),
  SMTP_PASS: z.string().min(1).optional(),
  SMTP_FROM_EMAIL: z.string().email().optional()
}).superRefine((values, context) => {
  const smtpConfigured = Boolean(
    values.CONTACT_NOTIFICATION_TO_EMAIL ||
      values.SMTP_HOST ||
      values.SMTP_PORT ||
      values.SMTP_USER ||
      values.SMTP_PASS ||
      values.SMTP_FROM_EMAIL
  );

  if (!smtpConfigured) {
    return;
  }

  if (!values.CONTACT_NOTIFICATION_TO_EMAIL) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['CONTACT_NOTIFICATION_TO_EMAIL'],
      message: 'CONTACT_NOTIFICATION_TO_EMAIL is required when SMTP notifications are configured'
    });
  }

  if (!values.SMTP_HOST) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['SMTP_HOST'],
      message: 'SMTP_HOST is required when SMTP notifications are configured'
    });
  }

  if (!values.SMTP_PORT) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['SMTP_PORT'],
      message: 'SMTP_PORT is required when SMTP notifications are configured'
    });
  }

  if (!values.SMTP_FROM_EMAIL) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['SMTP_FROM_EMAIL'],
      message: 'SMTP_FROM_EMAIL is required when SMTP notifications are configured'
    });
  }
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment configuration', parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsedEnv.data;

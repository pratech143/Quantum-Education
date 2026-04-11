import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';

const createCorsOptions = () => ({
  origin(origin: string | undefined, callback: (error: Error | null, allowed?: boolean) => void) {
    if (!origin) {
      callback(null, true);
      return;
    }

    const isAllowed = env.ALLOWED_ORIGINS.includes(origin);
    callback(isAllowed ? null : new Error('Origin not allowed by CORS'), isAllowed);
  }
});

const createGeneralRateLimiter = () =>
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200,
    standardHeaders: true,
    legacyHeaders: false
  });

export const createContactRateLimiter = () =>
  rateLimit({
    windowMs: env.CONTACT_RATE_LIMIT_WINDOW_MS,
    limit: env.CONTACT_RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: 'Too many contact requests. Please try again later.'
    }
  });

export const applySecurityMiddleware = (app: Express) => {
  app.use(helmet());
  app.use(cors(createCorsOptions()));
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: false, limit: '10kb' }));
  app.use(createGeneralRateLimiter());
};

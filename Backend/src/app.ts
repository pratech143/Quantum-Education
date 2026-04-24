import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import { createHealthRouter } from './modules/health/presentation/health.routes.js';
import { createContactRouter } from './modules/contact/presentation/contact.routes.js';
import { createCountryRouter } from './modules/country/presentation/country.routes.js';
import { createUniversityRouter } from './modules/university/presentation/university.routes.js';
import { createAlumniRouter } from './modules/alumni/presentation/alumni.routes.js';
import { createAdminRouter } from './modules/admin/presentation/admin.routes.js';
import { createNewsRouter } from './modules/news/presentation/news.routes.js';
import { PrismaContactRequestRepository } from './modules/contact/infrastructure/repositories/prisma-contact-request.repository.js';
import { NoopContactNotificationService } from './modules/contact/infrastructure/services/noop-contact-notification.service.js';
import { SmtpContactNotificationService } from './modules/contact/infrastructure/services/smtp-contact-notification.service.js';
import { CreateContactRequestUseCase } from './modules/contact/application/use-cases/create-contact-request.use-case.js';
import { ContactController } from './modules/contact/presentation/contact.controller.js';
import { PrismaCountryRepository } from './modules/country/infrastructure/repositories/prisma-country.repository.js';
import { CountryService } from './modules/country/application/services/country.service.js';
import { CountryController } from './modules/country/presentation/country.controller.js';
import { PrismaUniversityRepository } from './modules/university/infrastructure/repositories/prisma-university.repository.js';
import { UniversityService } from './modules/university/application/services/university.service.js';
import { UniversityController } from './modules/university/presentation/university.controller.js';
import { PrismaAlumniRepository } from './modules/alumni/infrastructure/repositories/prisma-alumni.repository.js';
import { AlumniService } from './modules/alumni/application/services/alumni.service.js';
import { AlumniController } from './modules/alumni/presentation/alumni.controller.js';
import { env } from './shared/config/env.js';
import { errorHandler } from './shared/middleware/error-handler.js';
import { notFoundHandler } from './shared/middleware/not-found-handler.js';
import { requestIdMiddleware } from './shared/middleware/request-id.js';
import { applySecurityMiddleware } from './shared/middleware/security.js';

export const createApp = () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(requestIdMiddleware);
  
  app.use(cookieParser());
  applySecurityMiddleware(app);

  // ── Contact module ──────────────────────────────────────
  const contactRequestRepository = new PrismaContactRequestRepository();
  const contactNotificationService =
    env.SMTP_HOST && env.SMTP_PORT && env.SMTP_FROM_EMAIL && env.CONTACT_NOTIFICATION_TO_EMAIL
      ? new SmtpContactNotificationService()
      : new NoopContactNotificationService();
  const createContactRequestUseCase = new CreateContactRequestUseCase(
    contactRequestRepository,
    contactNotificationService
  );
  const contactController = new ContactController(createContactRequestUseCase);

  // ── Country module ──────────────────────────────────────
  const countryRepository = new PrismaCountryRepository();
  const countryService = new CountryService(countryRepository);
  const countryController = new CountryController(countryService);

  // ── University module ───────────────────────────────────
  const universityRepository = new PrismaUniversityRepository();
  const universityService = new UniversityService(universityRepository, countryRepository);
  const universityController = new UniversityController(universityService);

  // ── Alumni module ───────────────────────────────────────
  const alumniRepository = new PrismaAlumniRepository();
  const alumniService = new AlumniService(alumniRepository);
  const alumniController = new AlumniController(alumniService);

  // ── Routes ──────────────────────────────────────────────
  app.use(`${env.API_PREFIX}/health`, createHealthRouter());
  app.use(`${env.API_PREFIX}/contact-requests`, createContactRouter(contactController));
  app.use(`${env.API_PREFIX}/countries`, createCountryRouter(countryController));
  app.use(`${env.API_PREFIX}/destinations`, createCountryRouter(countryController)); // alias
  app.use(`${env.API_PREFIX}/universities`, createUniversityRouter(universityController));
  app.use(`${env.API_PREFIX}/alumni`, createAlumniRouter(alumniController));
  app.use(`${env.API_PREFIX}/news`, createNewsRouter());
  app.use('/api/admin', createAdminRouter());

  // Serve uploaded files (absolute path so it works regardless of CWD)
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

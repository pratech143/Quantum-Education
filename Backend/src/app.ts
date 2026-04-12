import express from 'express';
import cookieParser from 'cookie-parser';
import { createHealthRouter } from './modules/health/presentation/health.routes.js';
import { createContactRouter } from './modules/contact/presentation/contact.routes.js';
import { createAdminRouter } from './modules/admin/presentation/admin.routes.js';
import { PrismaContactRequestRepository } from './modules/contact/infrastructure/repositories/prisma-contact-request.repository.js';
import { NoopContactNotificationService } from './modules/contact/infrastructure/services/noop-contact-notification.service.js';
import { SmtpContactNotificationService } from './modules/contact/infrastructure/services/smtp-contact-notification.service.js';
import { CreateContactRequestUseCase } from './modules/contact/application/use-cases/create-contact-request.use-case.js';
import { ContactController } from './modules/contact/presentation/contact.controller.js';
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

  app.use(`${env.API_PREFIX}/health`, createHealthRouter());
  app.use(`${env.API_PREFIX}/contact-requests`, createContactRouter(contactController));
  app.use('/api/admin', createAdminRouter());

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

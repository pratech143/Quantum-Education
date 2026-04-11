import { Router } from 'express';
import type { ContactController } from './contact.controller.js';
import { createContactRateLimiter } from '../../../shared/middleware/security.js';

export const createContactRouter = (contactController: ContactController) => {
  const router = Router();

  router.post('/', createContactRateLimiter(), contactController.create);

  return router;
};

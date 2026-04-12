import { Router } from 'express';
import type { CountryController } from './country.controller.js';
import { authenticateAdmin } from '../../../shared/middleware/admin-auth.js';

export const createCountryRouter = (countryController: CountryController) => {
  const router = Router();

  // Public routes
  router.get('/', countryController.getAll);
  router.get('/:id', countryController.getById);

  // Admin-only routes
  router.post('/', authenticateAdmin, countryController.create);
  router.patch('/:id', authenticateAdmin, countryController.update);
  router.delete('/:id', authenticateAdmin, countryController.delete);

  return router;
};

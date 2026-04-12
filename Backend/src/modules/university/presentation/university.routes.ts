import { Router } from 'express';
import type { UniversityController } from './university.controller.js';
import { authenticateAdmin } from '../../../shared/middleware/admin-auth.js';

export const createUniversityRouter = (universityController: UniversityController) => {
  const router = Router();

  // Public routes
  router.get('/country/:countryId', universityController.getByCountry);

  // Admin-only routes
  router.post('/country/:countryId', authenticateAdmin, universityController.create);
  router.patch('/:id', authenticateAdmin, universityController.update);
  router.delete('/:id', authenticateAdmin, universityController.delete);

  return router;
};

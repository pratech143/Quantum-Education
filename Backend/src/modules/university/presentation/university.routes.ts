import { Router } from 'express';
import type { UniversityController } from './university.controller.js';
import { authenticateAdmin } from '../../../shared/middleware/admin-auth.js';

export const createUniversityRouter = (universityController: UniversityController) => {
  const router = Router();

  // Public routes
  router.get('/', universityController.getAll);
  router.get('/colleges', universityController.getColleges);
  router.get('/country/:countryId', universityController.getByCountry);
  router.get('/slug/:slug', universityController.getBySlug);
  router.get('/:id', universityController.getById);
  router.get('/:id/courses', universityController.getCourses);

  // Admin-only routes
  router.post('/country/:countryId', authenticateAdmin, universityController.create);
  router.patch('/:id', authenticateAdmin, universityController.update);
  router.delete('/:id', authenticateAdmin, universityController.delete);

  return router;
};

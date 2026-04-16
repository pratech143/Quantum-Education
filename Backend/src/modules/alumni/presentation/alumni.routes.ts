import { Router } from 'express';
import type { AlumniController } from './alumni.controller.js';
import { authenticateAdmin } from '../../../shared/middleware/admin-auth.js';

export const createAlumniRouter = (alumniController: AlumniController) => {
  const router = Router();

  // Public routes
  router.get('/', alumniController.getAll);
  router.get('/:id', alumniController.getById);

  // Admin-only routes
  router.post('/', authenticateAdmin, alumniController.create);
  router.patch('/:id', authenticateAdmin, alumniController.update);
  router.delete('/:id', authenticateAdmin, alumniController.delete);

  return router;
};

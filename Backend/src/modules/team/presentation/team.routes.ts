import { Router } from 'express';
import { TeamController } from './team.controller.js';
import { TeamService } from '../application/team.service.js';
import { PrismaTeamRepository } from '../infrastructure/repositories/prisma-team.repository.js';
import { prisma } from '../../../shared/database/prisma.js';
import { authenticateAdmin } from '../../../shared/middleware/admin-auth.js';

const router = Router();
const repository = new PrismaTeamRepository(prisma);
const service = new TeamService(repository);
const controller = new TeamController(service);

// Public routes
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Protected admin routes
router.post('/', authenticateAdmin, controller.create);
router.put('/:id', authenticateAdmin, controller.update);
router.delete('/:id', authenticateAdmin, controller.delete);

export default router;

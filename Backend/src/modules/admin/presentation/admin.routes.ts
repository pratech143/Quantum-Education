import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { authenticateAdmin, requireSuperAdmin } from '../../../shared/middleware/admin-auth.js';
import { AdminAuthController } from './admin-auth.controller.js';
import { AdminManagementController } from './admin-management.controller.js';
import { AdminProfileController } from './admin-profile.controller.js';

const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many login attempts. Please try again later.'
  }
});

export const createAdminRouter = () => {
  const router = Router();
  const authController = new AdminAuthController();
  const managementController = new AdminManagementController();
  const profileController = new AdminProfileController();

  // Auth routes (public)
  router.post('/auth/login', loginRateLimiter, authController.login);
  router.post('/auth/logout', authController.logout);
  router.get('/auth/me', authenticateAdmin, authController.me);

  // Admin management (superadmin only)
  router.get('/admins', authenticateAdmin, requireSuperAdmin, managementController.list);
  router.post('/admins', authenticateAdmin, requireSuperAdmin, managementController.create);
  router.put('/admins/:id', authenticateAdmin, requireSuperAdmin, managementController.update);
  router.delete('/admins/:id', authenticateAdmin, requireSuperAdmin, managementController.remove);
  router.put('/admins/:id/password', authenticateAdmin, requireSuperAdmin, managementController.resetPassword);

  // Stats (authenticated)
  router.get('/stats', authenticateAdmin, managementController.stats);

  // Contact requests (authenticated)
  router.get('/contact-requests', authenticateAdmin, async (req, res) => {
    const { prisma } = await import('../../../shared/database/prisma.js');
    const requests = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, data: requests, requestId: req.requestId });
  });

  router.delete('/contact-requests/:id', authenticateAdmin, async (req, res) => {
    const { prisma } = await import('../../../shared/database/prisma.js');
    const id = req.params['id'];
    await prisma.contactRequest.delete({ where: { id } });
    res.json({ success: true, message: 'Contact request deleted.', requestId: req.requestId });
  });

  // Profile (own account)
  router.put('/profile', authenticateAdmin, profileController.update);
  router.put('/profile/password', authenticateAdmin, profileController.changePassword);

  return router;
};

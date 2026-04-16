import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { authenticateAdmin, requireSuperAdmin } from '../../../shared/middleware/admin-auth.js';
import { AppError } from '../../../shared/errors/app-error.js';
import { AdminAuthController } from './admin-auth.controller.js';
import { AdminManagementController } from './admin-management.controller.js';
import { AdminProfileController } from './admin-profile.controller.js';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename(_req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${crypto.randomUUID()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter(_req, file, cb) {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    cb(null, allowed.includes(file.mimetype));
  }
});

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
  router.get('/stats', authenticateAdmin, async (req, res) => {
    const { prisma } = await import('../../../shared/database/prisma.js');
    const [adminCount, activeAdminCount, countryCount, universityCount, alumniCount, contactCount] = await Promise.all([
      prisma.adminUser.count(),
      prisma.adminUser.count({ where: { isActive: true } }),
      prisma.country.count(),
      prisma.university.count(),
      prisma.alumni.count(),
      prisma.contactRequest.count()
    ]);

    res.json({
      success: true,
      data: {
        totalAdmins: adminCount,
        activeAdmins: activeAdminCount,
        totalCountries: countryCount,
        totalUniversities: universityCount,
        totalAlumni: alumniCount,
        totalContactRequests: contactCount,
        role: req.admin!.role
      },
      requestId: req.requestId
    });
  });

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
    if (typeof id !== 'string') {
      throw new AppError({
        statusCode: 400,
        code: 'INVALID_CONTACT_REQUEST_ID',
        message: 'A valid contact request id is required.'
      });
    }
    await prisma.contactRequest.delete({ where: { id } });
    res.json({ success: true, message: 'Contact request deleted.', requestId: req.requestId });
  });

  // File upload (authenticated)
  router.post('/upload', authenticateAdmin, upload.single('file'), (req, res) => {
    if (!req.file) {
      throw new AppError({
        statusCode: 400,
        code: 'NO_FILE',
        message: 'No image file provided or file type not allowed.'
      });
    }
    const url = `/uploads/${req.file.filename}`;
    res.json({ success: true, data: { url }, requestId: req.requestId });
  });

  // Profile (own account)
  router.put('/profile', authenticateAdmin, profileController.update);
  router.put('/profile/password', authenticateAdmin, profileController.changePassword);

  return router;
};

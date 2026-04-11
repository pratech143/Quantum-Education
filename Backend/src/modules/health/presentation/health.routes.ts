import { Router } from 'express';

export const createHealthRouter = () => {
  const router = Router();

  router.get('/', (_request, response) => {
    response.status(200).json({
      success: true,
      message: 'Service is healthy.'
    });
  });

  return router;
};

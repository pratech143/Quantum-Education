import type { Request, Response } from 'express';

export const notFoundHandler = (request: Request, response: Response) => {
  response.status(404).json({
    success: false,
    code: 'ROUTE_NOT_FOUND',
    message: `Cannot ${request.method} ${request.originalUrl}`,
    requestId: request.requestId
  });
};

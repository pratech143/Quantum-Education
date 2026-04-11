import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/app-error.js';
import { env } from '../config/env.js';
import { ConsoleLogger } from '../logger/console-logger.js';

const logger = new ConsoleLogger();

export const errorHandler = (
  error: unknown,
  request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (error instanceof ZodError) {
    response.status(400).json({
      success: false,
      code: 'VALIDATION_ERROR',
      message: 'The request payload is invalid.',
      errors: error.flatten().fieldErrors,
      requestId: request.requestId
    });
    return;
  }

  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      success: false,
      code: error.code,
      message: error.message,
      requestId: request.requestId
    });
    return;
  }

  logger.error('Unhandled error', {
    requestId: request.requestId,
    error: error instanceof Error ? error.message : 'Unknown error'
  });

  response.status(500).json({
    success: false,
    code: 'INTERNAL_SERVER_ERROR',
    message:
      env.NODE_ENV === 'production'
        ? 'Something went wrong.'
        : 'Something went wrong. Check the server logs for details.',
    requestId: request.requestId
  });
};

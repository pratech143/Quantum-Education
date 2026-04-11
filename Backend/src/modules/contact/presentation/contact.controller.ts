import type { Request, Response } from 'express';
import type { CreateContactRequestUseCase } from '../application/use-cases/create-contact-request.use-case.js';
import { createContactRequestSchema } from './contact.schemas.js';

export class ContactController {
  constructor(private readonly createContactRequestUseCase: CreateContactRequestUseCase) {}

  create = async (request: Request, response: Response) => {
    const payload = createContactRequestSchema.parse(request.body);
    const result = await this.createContactRequestUseCase.execute(payload);

    response.status(201).json({
      success: true,
      message: 'Contact request submitted successfully.',
      data: result,
      requestId: request.requestId
    });
  };
}

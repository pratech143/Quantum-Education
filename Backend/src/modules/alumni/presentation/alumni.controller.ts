import type { Request, Response } from 'express';
import type { AlumniService } from '../application/services/alumni.service.js';
import { createAlumniSchema, updateAlumniSchema, alumniIdParamSchema, alumniPaginationSchema } from './alumni.schemas.js';

export class AlumniController {
  constructor(private readonly alumniService: AlumniService) {}

  create = async (request: Request, response: Response) => {
    const payload = createAlumniSchema.parse(request.body);
    const alumni = await this.alumniService.create(payload);

    response.status(201).json({
      success: true,
      message: 'Alumni created successfully.',
      data: alumni,
      requestId: request.requestId
    });
  };

  update = async (request: Request, response: Response) => {
    const { id } = alumniIdParamSchema.parse(request.params);
    const payload = updateAlumniSchema.parse(request.body);
    const alumni = await this.alumniService.update(id, payload);

    response.status(200).json({
      success: true,
      message: 'Alumni updated successfully.',
      data: alumni,
      requestId: request.requestId
    });
  };

  delete = async (request: Request, response: Response) => {
    const { id } = alumniIdParamSchema.parse(request.params);
    await this.alumniService.delete(id);

    response.status(200).json({
      success: true,
      message: 'Alumni deleted successfully.',
      requestId: request.requestId
    });
  };

  getById = async (request: Request, response: Response) => {
    const { id } = alumniIdParamSchema.parse(request.params);
    const alumni = await this.alumniService.getById(id);

    response.status(200).json({
      success: true,
      data: alumni,
      requestId: request.requestId
    });
  };

  getAll = async (request: Request, response: Response) => {
    const params = alumniPaginationSchema.parse(request.query);
    const result = await this.alumniService.getAll(params);

    response.status(200).json({
      success: true,
      ...result,
      requestId: request.requestId
    });
  };
}

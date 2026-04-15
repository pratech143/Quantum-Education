import type { Request, Response } from 'express';
import type { UniversityService } from '../application/services/university.service.js';
import {
  createUniversitySchema,
  updateUniversitySchema,
  universityIdParamSchema,
  countryIdParamSchema,
  universityPaginationSchema
} from './university.schemas.js';

export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  create = async (request: Request, response: Response) => {
    const { countryId } = countryIdParamSchema.parse(request.params);
    const payload = createUniversitySchema.parse(request.body);
    const university = await this.universityService.create({ ...payload, countryId });

    response.status(201).json({
      success: true,
      message: 'University created successfully.',
      data: university,
      requestId: request.requestId
    });
  };

  update = async (request: Request, response: Response) => {
    const { id } = universityIdParamSchema.parse(request.params);
    const payload = updateUniversitySchema.parse(request.body);
    const university = await this.universityService.update(id, payload);

    response.status(200).json({
      success: true,
      message: 'University updated successfully.',
      data: university,
      requestId: request.requestId
    });
  };

  delete = async (request: Request, response: Response) => {
    const { id } = universityIdParamSchema.parse(request.params);
    await this.universityService.delete(id);

    response.status(200).json({
      success: true,
      message: 'University deleted successfully.',
      requestId: request.requestId
    });
  };

  getById = async (request: Request, response: Response) => {
    const { id } = universityIdParamSchema.parse(request.params);
    const university = await this.universityService.getById(id);

    response.status(200).json({
      success: true,
      data: university,
      requestId: request.requestId
    });
  };

  getBySlug = async (request: Request, response: Response) => {
    const slug = request.params['slug'] as string;
    const university = await this.universityService.getBySlug(slug);

    response.status(200).json({
      success: true,
      data: university,
      requestId: request.requestId
    });
  };

  getByCountry = async (request: Request, response: Response) => {
    const { countryId } = countryIdParamSchema.parse(request.params);
    const params = universityPaginationSchema.parse(request.query);
    const result = await this.universityService.getByCountry(countryId, params);

    response.status(200).json({
      success: true,
      ...result,
      requestId: request.requestId
    });
  };

  getAll = async (request: Request, response: Response) => {
    const params = universityPaginationSchema.parse(request.query);
    const result = await this.universityService.getAll(params);

    response.status(200).json({
      success: true,
      ...result,
      requestId: request.requestId
    });
  };

  getColleges = async (request: Request, response: Response) => {
    const params = universityPaginationSchema.parse(request.query);
    const result = await this.universityService.getByType('COLLEGE', params);

    response.status(200).json({
      success: true,
      ...result,
      requestId: request.requestId
    });
  };

  getCourses = async (request: Request, response: Response) => {
    const { id } = universityIdParamSchema.parse(request.params);
    const university = await this.universityService.getById(id);

    const coursesData = university.coursesData as { courses?: unknown[] } | null;
    const courses = coursesData?.courses || [];

    response.status(200).json({
      success: true,
      data: courses,
      requestId: request.requestId
    });
  };
}

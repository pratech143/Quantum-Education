import type { Request, Response } from 'express';
import type { CountryService } from '../application/services/country.service.js';
import { createCountrySchema, updateCountrySchema, paginationSchema, idParamSchema, slugParamSchema } from './country.schemas.js';

export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  create = async (request: Request, response: Response) => {
    const payload = createCountrySchema.parse(request.body);
    const country = await this.countryService.create(payload);

    response.status(201).json({
      success: true,
      message: 'Country created successfully.',
      data: country,
      requestId: request.requestId
    });
  };

  update = async (request: Request, response: Response) => {
    const { id } = idParamSchema.parse(request.params);
    const payload = updateCountrySchema.parse(request.body);
    const country = await this.countryService.update(id, payload);

    response.status(200).json({
      success: true,
      message: 'Country updated successfully.',
      data: country,
      requestId: request.requestId
    });
  };

  delete = async (request: Request, response: Response) => {
    const { id } = idParamSchema.parse(request.params);
    await this.countryService.delete(id);

    response.status(200).json({
      success: true,
      message: 'Country deleted successfully.',
      requestId: request.requestId
    });
  };

  getById = async (request: Request, response: Response) => {
    const { id } = idParamSchema.parse(request.params);
    const country = await this.countryService.getById(id);

    response.status(200).json({
      success: true,
      data: country,
      requestId: request.requestId
    });
  };

  getBySlug = async (request: Request, response: Response) => {
    const { slug } = slugParamSchema.parse(request.params);
    const country = await this.countryService.getBySlug(slug);

    response.status(200).json({
      success: true,
      data: country,
      requestId: request.requestId
    });
  };

  getAll = async (request: Request, response: Response) => {
    const params = paginationSchema.parse(request.query);
    const result = await this.countryService.getAll(params);

    response.status(200).json({
      success: true,
      ...result,
      requestId: request.requestId
    });
  };
}

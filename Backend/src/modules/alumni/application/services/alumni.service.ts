import type { AlumniRepository } from '../ports/alumni.repository.js';
import type { Alumni, CreateAlumniInput, UpdateAlumniInput } from '../../domain/alumni.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { AppError } from '../../../../shared/errors/app-error.js';

export class AlumniService {
  constructor(private readonly alumniRepository: AlumniRepository) {}

  async create(input: CreateAlumniInput): Promise<Alumni> {
    return this.alumniRepository.create(input);
  }

  async update(id: string, input: UpdateAlumniInput): Promise<Alumni> {
    const alumni = await this.alumniRepository.findById(id);
    if (!alumni) {
      throw new AppError({
        statusCode: 404,
        code: 'ALUMNI_NOT_FOUND',
        message: 'Alumni not found.'
      });
    }
    return this.alumniRepository.update(id, input);
  }

  async delete(id: string): Promise<void> {
    const alumni = await this.alumniRepository.findById(id);
    if (!alumni) {
      throw new AppError({
        statusCode: 404,
        code: 'ALUMNI_NOT_FOUND',
        message: 'Alumni not found.'
      });
    }
    await this.alumniRepository.delete(id);
  }

  async getById(id: string): Promise<Alumni> {
    const alumni = await this.alumniRepository.findById(id);
    if (!alumni) {
      throw new AppError({
        statusCode: 404,
        code: 'ALUMNI_NOT_FOUND',
        message: 'Alumni not found.'
      });
    }
    return alumni;
  }

  async getAll(params: PaginationParams): Promise<PaginatedResult<Alumni>> {
    return this.alumniRepository.findAll(params);
  }
}

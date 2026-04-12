import type { UniversityRepository } from '../ports/university.repository.js';
import type { CountryRepository } from '../../../country/application/ports/country.repository.js';
import type { University, CreateUniversityInput, UpdateUniversityInput } from '../../domain/university.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { AppError } from '../../../../shared/errors/app-error.js';

export class UniversityService {
  constructor(
    private readonly universityRepository: UniversityRepository,
    private readonly countryRepository: CountryRepository
  ) {}

  async create(input: CreateUniversityInput): Promise<University> {
    const country = await this.countryRepository.findById(input.countryId);

    if (!country) {
      throw new AppError({
        statusCode: 404,
        code: 'COUNTRY_NOT_FOUND',
        message: 'The specified country does not exist.'
      });
    }

    return this.universityRepository.create(input);
  }

  async update(id: string, input: UpdateUniversityInput): Promise<University> {
    const university = await this.universityRepository.findById(id);

    if (!university) {
      throw new AppError({
        statusCode: 404,
        code: 'UNIVERSITY_NOT_FOUND',
        message: 'University not found.'
      });
    }

    return this.universityRepository.update(id, input);
  }

  async delete(id: string): Promise<void> {
    const university = await this.universityRepository.findById(id);

    if (!university) {
      throw new AppError({
        statusCode: 404,
        code: 'UNIVERSITY_NOT_FOUND',
        message: 'University not found.'
      });
    }

    await this.universityRepository.delete(id);
  }

  async getByCountry(countryId: string, params: PaginationParams): Promise<PaginatedResult<University>> {
    const country = await this.countryRepository.findById(countryId);

    if (!country) {
      throw new AppError({
        statusCode: 404,
        code: 'COUNTRY_NOT_FOUND',
        message: 'The specified country does not exist.'
      });
    }

    return this.universityRepository.findByCountry(countryId, params);
  }
}

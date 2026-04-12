import type { CountryRepository } from '../ports/country.repository.js';
import type { Country, CountryWithUniversities, CreateCountryInput, UpdateCountryInput } from '../../domain/country.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { AppError } from '../../../../shared/errors/app-error.js';

export class CountryService {
  constructor(private readonly countryRepository: CountryRepository) {}

  async create(input: CreateCountryInput): Promise<Country> {
    const existing = await this.countryRepository.findByName(input.name);

    if (existing) {
      throw new AppError({
        statusCode: 409,
        code: 'COUNTRY_ALREADY_EXISTS',
        message: `A country with the name "${input.name}" already exists.`
      });
    }

    return this.countryRepository.create(input);
  }

  async update(id: string, input: UpdateCountryInput): Promise<Country> {
    const country = await this.countryRepository.findById(id);

    if (!country) {
      throw new AppError({
        statusCode: 404,
        code: 'COUNTRY_NOT_FOUND',
        message: 'Country not found.'
      });
    }

    if (input.name && input.name !== country.name) {
      const existing = await this.countryRepository.findByName(input.name);

      if (existing) {
        throw new AppError({
          statusCode: 409,
          code: 'COUNTRY_ALREADY_EXISTS',
          message: `A country with the name "${input.name}" already exists.`
        });
      }
    }

    return this.countryRepository.update(id, input);
  }

  async delete(id: string): Promise<void> {
    const country = await this.countryRepository.findById(id);

    if (!country) {
      throw new AppError({
        statusCode: 404,
        code: 'COUNTRY_NOT_FOUND',
        message: 'Country not found.'
      });
    }

    await this.countryRepository.delete(id);
  }

  async getById(id: string): Promise<CountryWithUniversities> {
    const country = await this.countryRepository.findByIdWithUniversities(id);

    if (!country) {
      throw new AppError({
        statusCode: 404,
        code: 'COUNTRY_NOT_FOUND',
        message: 'Country not found.'
      });
    }

    return country;
  }

  async getAll(params: PaginationParams): Promise<PaginatedResult<Country>> {
    return this.countryRepository.findAll(params);
  }
}

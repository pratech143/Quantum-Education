import type { Country, CountryWithUniversities, CreateCountryInput, UpdateCountryInput } from '../../domain/country.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';

export interface CountryRepository {
  create(input: CreateCountryInput): Promise<Country>;
  update(id: string, input: UpdateCountryInput): Promise<Country>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Country | null>;
  findByIdWithUniversities(id: string): Promise<CountryWithUniversities | null>;
  findByName(name: string): Promise<Country | null>;
  findAll(params: PaginationParams): Promise<PaginatedResult<Country>>;
}

import type { University, UniversityWithCountry, CreateUniversityInput, UpdateUniversityInput } from '../../domain/university.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';

export interface UniversityRepository {
  create(input: CreateUniversityInput): Promise<University>;
  update(id: string, input: UpdateUniversityInput): Promise<University>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<University | null>;
  findByIdWithCountry(id: string): Promise<UniversityWithCountry | null>;
  findBySlug(slug: string): Promise<University | null>;
  findByCountry(countryId: string, params: PaginationParams): Promise<PaginatedResult<University>>;
  findByType(type: string, params: PaginationParams): Promise<PaginatedResult<University>>;
  findAll(params: PaginationParams): Promise<PaginatedResult<University>>;
}

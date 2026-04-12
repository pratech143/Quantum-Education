import type { University, CreateUniversityInput, UpdateUniversityInput } from '../../domain/university.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';

export interface UniversityRepository {
  create(input: CreateUniversityInput): Promise<University>;
  update(id: string, input: UpdateUniversityInput): Promise<University>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<University | null>;
  findByCountry(countryId: string, params: PaginationParams): Promise<PaginatedResult<University>>;
}

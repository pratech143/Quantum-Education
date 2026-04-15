import type { Alumni, CreateAlumniInput, UpdateAlumniInput } from '../../domain/alumni.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';

export interface AlumniRepository {
  create(input: CreateAlumniInput): Promise<Alumni>;
  update(id: string, input: UpdateAlumniInput): Promise<Alumni>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Alumni | null>;
  findAll(params: PaginationParams): Promise<PaginatedResult<Alumni>>;
}

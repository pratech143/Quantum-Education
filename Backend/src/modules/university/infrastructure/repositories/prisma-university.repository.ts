import type { UniversityRepository } from '../../application/ports/university.repository.js';
import type { University, CreateUniversityInput, UpdateUniversityInput } from '../../domain/university.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { prisma } from '../../../../shared/database/prisma.js';

const stripUndefined = <T extends Record<string, unknown>>(obj: T): { [K in keyof T]: Exclude<T[K], undefined> } => {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as { [K in keyof T]: Exclude<T[K], undefined> };
};

export class PrismaUniversityRepository implements UniversityRepository {
  async create(input: CreateUniversityInput): Promise<University> {
    return prisma.university.create({ data: input });
  }

  async update(id: string, input: UpdateUniversityInput): Promise<University> {
    return prisma.university.update({ where: { id }, data: stripUndefined(input) });
  }

  async delete(id: string): Promise<void> {
    await prisma.university.delete({ where: { id } });
  }

  async findById(id: string): Promise<University | null> {
    return prisma.university.findUnique({ where: { id } });
  }

  async findByCountry(countryId: string, params: PaginationParams): Promise<PaginatedResult<University>> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where = {
      countryId,
      ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {})
    };

    const [data, total] = await Promise.all([
      prisma.university.findMany({
        where,
        skip,
        take: limit,
        orderBy: { ranking: 'asc' }
      }),
      prisma.university.count({ where })
    ]);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
}

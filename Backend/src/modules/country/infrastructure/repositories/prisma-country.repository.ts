import type { CountryRepository } from '../../application/ports/country.repository.js';
import type { Country, CountryWithUniversities, CreateCountryInput, UpdateCountryInput } from '../../domain/country.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { prisma } from '../../../../shared/database/prisma.js';

const stripUndefined = <T extends Record<string, unknown>>(obj: T): { [K in keyof T]: Exclude<T[K], undefined> } => {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as { [K in keyof T]: Exclude<T[K], undefined> };
};

export class PrismaCountryRepository implements CountryRepository {
  async create(input: CreateCountryInput): Promise<Country> {
    return prisma.country.create({ data: input });
  }

  async update(id: string, input: UpdateCountryInput): Promise<Country> {
    return prisma.country.update({ where: { id }, data: stripUndefined(input) });
  }

  async delete(id: string): Promise<void> {
    await prisma.country.delete({ where: { id } });
  }

  async findById(id: string): Promise<Country | null> {
    return prisma.country.findUnique({ where: { id } });
  }

  async findByIdWithUniversities(id: string): Promise<CountryWithUniversities | null> {
    return prisma.country.findUnique({
      where: { id },
      include: {
        universities: {
          orderBy: { ranking: 'asc' }
        }
      }
    });
  }

  async findByName(name: string): Promise<Country | null> {
    return prisma.country.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } }
    });
  }

  async findAll(params: PaginationParams): Promise<PaginatedResult<Country>> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where = search
      ? { name: { contains: search, mode: 'insensitive' as const } }
      : {};

    const [data, total] = await Promise.all([
      prisma.country.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: 'asc' }
      }),
      prisma.country.count({ where })
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

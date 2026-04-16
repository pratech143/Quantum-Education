import type { CountryRepository } from '../../application/ports/country.repository.js';
import type { Country, CountryWithUniversities, CreateCountryInput, UpdateCountryInput } from '../../domain/country.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { prisma } from '../../../../shared/database/prisma.js';

export class PrismaCountryRepository implements CountryRepository {
  async create(input: CreateCountryInput): Promise<Country> {
    return prisma.country.create({ data: input as any }) as any;
  }

  async update(id: string, input: UpdateCountryInput): Promise<Country> {
    const data = Object.fromEntries(
      Object.entries(input).filter(([, v]) => v !== undefined)
    );
    return prisma.country.update({ where: { id }, data: data as any }) as any;
  }

  async delete(id: string): Promise<void> {
    await prisma.country.delete({ where: { id } });
  }

  async findById(id: string): Promise<Country | null> {
    return prisma.country.findUnique({ where: { id } }) as any;
  }

  async findByIdWithUniversities(id: string): Promise<CountryWithUniversities | null> {
    return prisma.country.findUnique({
      where: { id },
      include: {
        universities: {
          orderBy: { ranking: 'asc' }
        }
      }
    }) as any;
  }

  async findBySlug(slug: string): Promise<Country | null> {
    return prisma.country.findUnique({ where: { slug } }) as any;
  }

  async findBySlugWithUniversities(slug: string): Promise<CountryWithUniversities | null> {
    return prisma.country.findUnique({
      where: { slug },
      include: {
        universities: {
          orderBy: { ranking: 'asc' }
        }
      }
    }) as any;
  }

  async findByName(name: string): Promise<Country | null> {
    return prisma.country.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } }
    }) as any;
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
      data: data as any,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
}

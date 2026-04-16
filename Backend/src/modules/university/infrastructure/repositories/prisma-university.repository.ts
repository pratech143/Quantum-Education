import type { UniversityRepository } from '../../application/ports/university.repository.js';
import type { University, UniversityWithCountry, CreateUniversityInput, UpdateUniversityInput } from '../../domain/university.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { prisma } from '../../../../shared/database/prisma.js';

export class PrismaUniversityRepository implements UniversityRepository {
  async create(input: CreateUniversityInput): Promise<University> {
    return prisma.university.create({ data: input as any }) as any;
  }

  async update(id: string, input: UpdateUniversityInput): Promise<University> {
    const data = Object.fromEntries(
      Object.entries(input).filter(([, v]) => v !== undefined)
    );
    return prisma.university.update({ where: { id }, data: data as any }) as any;
  }

  async delete(id: string): Promise<void> {
    await prisma.university.delete({ where: { id } });
  }

  async findById(id: string): Promise<University | null> {
    return prisma.university.findUnique({ where: { id } }) as any;
  }

  async findByIdWithCountry(id: string): Promise<UniversityWithCountry | null> {
    return prisma.university.findUnique({
      where: { id },
      include: {
        country: {
          select: { id: true, name: true, slug: true }
        }
      }
    }) as any;
  }

  async findBySlug(slug: string): Promise<University | null> {
    return prisma.university.findUnique({ where: { slug } }) as any;
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
      data: data as any,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  async findByType(type: string, params: PaginationParams): Promise<PaginatedResult<University>> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where = {
      type: type as any,
      ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {})
    };

    const [data, total] = await Promise.all([
      prisma.university.findMany({
        where,
        skip,
        take: limit,
        orderBy: { ranking: 'asc' },
        include: {
          country: {
            select: { id: true, name: true, slug: true }
          }
        }
      }),
      prisma.university.count({ where })
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

  async findAll(params: PaginationParams): Promise<PaginatedResult<University>> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where = search
      ? { name: { contains: search, mode: 'insensitive' as const } }
      : {};

    const [data, total] = await Promise.all([
      prisma.university.findMany({
        where,
        skip,
        take: limit,
        orderBy: { ranking: 'asc' },
        include: {
          country: {
            select: { id: true, name: true, slug: true }
          }
        }
      }),
      prisma.university.count({ where })
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

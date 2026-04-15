import type { AlumniRepository } from '../../application/ports/alumni.repository.js';
import type { Alumni, CreateAlumniInput, UpdateAlumniInput } from '../../domain/alumni.js';
import type { PaginatedResult, PaginationParams } from '../../../../shared/types/pagination.js';
import { prisma } from '../../../../shared/database/prisma.js';

export class PrismaAlumniRepository implements AlumniRepository {
  async create(input: CreateAlumniInput): Promise<Alumni> {
    return prisma.alumni.create({ data: input as any }) as any;
  }

  async update(id: string, input: UpdateAlumniInput): Promise<Alumni> {
    const data = Object.fromEntries(
      Object.entries(input).filter(([, v]) => v !== undefined)
    );
    return prisma.alumni.update({ where: { id }, data: data as any }) as any;
  }

  async delete(id: string): Promise<void> {
    await prisma.alumni.delete({ where: { id } });
  }

  async findById(id: string): Promise<Alumni | null> {
    return prisma.alumni.findUnique({ where: { id } }) as any;
  }

  async findAll(params: PaginationParams): Promise<PaginatedResult<Alumni>> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { university: { contains: search, mode: 'insensitive' as const } },
            { country: { contains: search, mode: 'insensitive' as const } }
          ]
        }
      : {};

    const [data, total] = await Promise.all([
      prisma.alumni.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.alumni.count({ where })
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

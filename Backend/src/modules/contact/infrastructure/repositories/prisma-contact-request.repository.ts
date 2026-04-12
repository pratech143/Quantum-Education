import type { ContactRequest } from '../../domain/contact-request.js';
import type { ContactRequestRepository } from '../../application/ports/contact-request.repository.js';
import { prisma } from '../../../../shared/database/prisma.js';

export class PrismaContactRequestRepository implements ContactRequestRepository {
  async save(contactRequest: ContactRequest): Promise<void> {
    await prisma.contactRequest.create({
      data: {
        id: contactRequest.id,
        fullName: contactRequest.fullName,
        email: contactRequest.email,
        phoneNumber: contactRequest.phoneNumber ?? null,
        preferredDestination: contactRequest.preferredDestination ?? null,
        message: contactRequest.message,
        createdAt: contactRequest.createdAt
      }
    });
  }

  async findByEmailAndMessage(email: string, message: string): Promise<ContactRequest | null> {
    const result = await prisma.contactRequest.findFirst({
      where: {
        email: { equals: email, mode: 'insensitive' },
        message: { equals: message, mode: 'insensitive' }
      }
    });

    if (!result) return null;

    return {
      id: result.id,
      fullName: result.fullName,
      email: result.email,
      phoneNumber: result.phoneNumber ?? undefined,
      preferredDestination: result.preferredDestination ?? undefined,
      message: result.message,
      createdAt: result.createdAt
    };
  }

  async findAll(): Promise<ContactRequest[]> {
    const results = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return results.map((r: any) => ({
      id: r.id,
      fullName: r.fullName,
      email: r.email,
      phoneNumber: r.phoneNumber ?? undefined,
      preferredDestination: r.preferredDestination ?? undefined,
      message: r.message,
      createdAt: r.createdAt
    }));
  }

  async deleteById(id: string): Promise<void> {
    await prisma.contactRequest.delete({ where: { id } });
  }
}

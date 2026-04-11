import type { ContactRequest } from '../../domain/contact-request.js';
import type { ContactRequestRepository } from '../../application/ports/contact-request.repository.js';

export class InMemoryContactRequestRepository implements ContactRequestRepository {
  private readonly contactRequests = new Map<string, ContactRequest>();

  async save(contactRequest: ContactRequest): Promise<void> {
    this.contactRequests.set(contactRequest.id, contactRequest);
  }

  async findByEmailAndMessage(email: string, message: string): Promise<ContactRequest | null> {
    const normalizedEmail = email.toLowerCase();
    const normalizedMessage = message.toLowerCase();

    for (const contactRequest of this.contactRequests.values()) {
      if (
        contactRequest.email.toLowerCase() === normalizedEmail &&
        contactRequest.message.toLowerCase() === normalizedMessage
      ) {
        return contactRequest;
      }
    }

    return null;
  }
}

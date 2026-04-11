import type { ContactRequest } from '../../domain/contact-request.js';

export interface ContactRequestRepository {
  save(contactRequest: ContactRequest): Promise<void>;
  findByEmailAndMessage(email: string, message: string): Promise<ContactRequest | null>;
}

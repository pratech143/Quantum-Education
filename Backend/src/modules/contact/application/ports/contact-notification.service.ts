import type { ContactRequest } from '../../domain/contact-request.js';

export interface ContactNotificationService {
  notifyNewContactRequest(contactRequest: ContactRequest): Promise<void>;
}

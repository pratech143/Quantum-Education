import type { ContactRequest } from '../../domain/contact-request.js';
import type { ContactNotificationService } from '../../application/ports/contact-notification.service.js';

export class NoopContactNotificationService implements ContactNotificationService {
  async notifyNewContactRequest(_contactRequest: ContactRequest): Promise<void> {
    return;
  }
}

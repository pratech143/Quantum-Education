import { randomUUID } from 'node:crypto';
import type {
  ContactRequest,
  CreateContactRequestInput
} from '../../domain/contact-request.js';
import type { ContactRequestRepository } from '../ports/contact-request.repository.js';
import type { ContactNotificationService } from '../ports/contact-notification.service.js';
import { AppError } from '../../../../shared/errors/app-error.js';

type CreateContactRequestResult = {
  id: string;
  createdAt: string;
};

export class CreateContactRequestUseCase {
  constructor(
    private readonly contactRequestRepository: ContactRequestRepository,
    private readonly contactNotificationService: ContactNotificationService
  ) {}

  async execute(input: CreateContactRequestInput): Promise<CreateContactRequestResult> {
    const existingContactRequest = await this.contactRequestRepository.findByEmailAndMessage(
      input.email,
      input.message
    );

    if (existingContactRequest) {
      throw new AppError({
        statusCode: 409,
        code: 'DUPLICATE_CONTACT_REQUEST',
        message: 'An identical contact request was already submitted.'
      });
    }

    const contactRequest: ContactRequest = {
      id: randomUUID(),
      fullName: input.fullName,
      email: input.email,
      phoneNumber: input.phoneNumber,
      preferredDestination: input.preferredDestination,
      message: input.message,
      createdAt: new Date()
    };

    await this.contactRequestRepository.save(contactRequest);
    await this.contactNotificationService.notifyNewContactRequest(contactRequest);

    return {
      id: contactRequest.id,
      createdAt: contactRequest.createdAt.toISOString()
    };
  }
}

export type ContactRequest = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string | undefined;
  preferredDestination?: string | undefined;
  message: string;
  createdAt: Date;
};

export type CreateContactRequestInput = {
  fullName: string;
  email: string;
  phoneNumber?: string | undefined;
  preferredDestination?: string | undefined;
  message: string;
};

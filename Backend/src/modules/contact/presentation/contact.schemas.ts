import { z } from 'zod';

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

const noHtmlPattern = /^[^<>]*$/;
const phonePattern = /^[+0-9()\-\s]{7,20}$/;

export const createContactRequestSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Full name must be at least 2 characters long.')
      .max(100, 'Full name must be at most 100 characters long.')
      .regex(noHtmlPattern, 'HTML-like characters are not allowed.')
      .transform(normalizeText),
    email: z
      .string()
      .trim()
      .email('Email address is invalid.')
      .max(254, 'Email address is too long.')
      .transform((value) => value.toLowerCase()),
    phoneNumber: z
      .string()
      .trim()
      .regex(phonePattern, 'Phone number format is invalid.')
      .optional()
      .or(z.literal(''))
      .transform((value) => {
        if (!value) {
          return undefined;
        }

        return normalizeText(value);
      }),
    preferredDestination: z
      .string()
      .trim()
      .max(80, 'Preferred destination must be at most 80 characters long.')
      .regex(noHtmlPattern, 'HTML-like characters are not allowed.')
      .optional()
      .or(z.literal(''))
      .transform((value) => {
        if (!value) {
          return undefined;
        }

        return normalizeText(value);
      }),
    message: z
      .string()
      .trim()
      .min(10, 'Message must be at least 10 characters long.')
      .max(2000, 'Message must be at most 2000 characters long.')
      .regex(noHtmlPattern, 'HTML-like characters are not allowed.')
      .transform(normalizeText)
  })
  .strict();

export type CreateContactRequestDto = z.infer<typeof createContactRequestSchema>;

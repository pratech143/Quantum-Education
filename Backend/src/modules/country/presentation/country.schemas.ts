import { z } from 'zod';

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

export const createCountrySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'Country name must be at least 2 characters.')
      .max(100, 'Country name must be at most 100 characters.')
      .transform(normalizeText),
    description: z
      .string()
      .trim()
      .min(10, 'Description must be at least 10 characters.')
      .max(5000, 'Description must be at most 5000 characters.'),
    tuitionFees: z
      .number({ message: 'Tuition fees must be a number.' })
      .nonnegative('Tuition fees cannot be negative.'),
    visaInfo: z
      .string()
      .trim()
      .min(5, 'Visa info must be at least 5 characters.')
      .max(3000, 'Visa info must be at most 3000 characters.'),
    livingCost: z
      .number({ message: 'Living cost must be a number.' })
      .nonnegative('Living cost cannot be negative.'),
    currency: z
      .string()
      .trim()
      .min(1, 'Currency is required.')
      .max(10, 'Currency must be at most 10 characters.')
      .transform((v) => v.toUpperCase())
  })
  .strict();

export const updateCountrySchema = createCountrySchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update.' }
);

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  search: z.string().trim().max(100).optional()
});

export const idParamSchema = z.object({
  id: z.string().uuid('Invalid ID format.')
});

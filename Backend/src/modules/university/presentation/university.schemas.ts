import { z } from 'zod';

const urlPattern = /^https?:\/\/.+/;

export const createUniversitySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'University name must be at least 2 characters.')
      .max(200, 'University name must be at most 200 characters.'),
    slug: z
      .string()
      .trim()
      .min(2)
      .max(200)
      .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens.'),
    description: z
      .string()
      .trim()
      .min(10, 'Description must be at least 10 characters.')
      .max(5000, 'Description must be at most 5000 characters.'),
    location: z.string().trim().max(200).optional(),
    image: z.string().trim().max(1000).optional(),
    ranking: z
      .number({ message: 'Ranking must be a number.' })
      .int('Ranking must be an integer.')
      .positive('Ranking must be a positive number.'),
    qsRanking: z.string().trim().max(50).optional(),
    tagline: z.string().trim().max(300).optional(),
    website: z
      .string()
      .trim()
      .regex(urlPattern, 'Website must be a valid URL starting with http:// or https://.')
      .max(500, 'Website URL must be at most 500 characters.'),
    type: z.enum(['UNIVERSITY', 'COLLEGE']).default('UNIVERSITY'),
    fees: z.string().trim().max(200).optional(),
    heroData: z.any().optional(),
    whySection: z.any().optional(),
    coursesData: z.any().optional(),
    admissionData: z.any().optional()
  })
  .strict();

export const updateUniversitySchema = createUniversitySchema
  .omit({ type: true })
  .partial()
  .extend({ type: z.enum(['UNIVERSITY', 'COLLEGE']).optional() })
  .refine(
    (data) => Object.keys(data).length > 0,
    { message: 'At least one field must be provided for update.' }
  );

export const universityIdParamSchema = z.object({
  id: z.string().uuid('Invalid university ID format.')
});

export const universitySlugParamSchema = z.object({
  slug: z.string().trim().min(1)
});

export const countryIdParamSchema = z.object({
  countryId: z.string().uuid('Invalid country ID format.')
});

export const universityPaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  search: z.string().trim().max(100).optional()
});

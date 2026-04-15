import { z } from 'zod';

export const createAlumniSchema = z
  .object({
    name: z.string().trim().min(2).max(200),
    university: z.string().trim().min(2).max(300),
    degree: z.string().trim().min(2).max(200),
    country: z.string().trim().min(2).max(100),
    quote: z.string().trim().min(5).max(2000),
    image: z.string().trim().max(1000).optional()
  })
  .strict();

export const updateAlumniSchema = createAlumniSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update.' }
);

export const alumniIdParamSchema = z.object({
  id: z.string().uuid('Invalid alumni ID format.')
});

export const alumniPaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  search: z.string().trim().max(100).optional()
});

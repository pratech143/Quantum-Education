import { z } from 'zod';

export const createNewsSchema = z.object({
  headTitle: z.string().trim().min(5).max(500),
  subtitle: z.string().trim().min(5).max(1000),
  label: z.enum(['news', 'notice']),
  description: z.string().trim().min(10),
  image: z.string().trim().max(1000).optional(),
  date: z.string()
    .datetime()
    .or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/))
    .optional()
    .transform(val => val ? new Date(val) : undefined),
  author: z.string().trim().max(200).optional(),
  authorRole: z.string().trim().max(200).optional(),
  authorImage: z.string().trim().max(1000).optional(),
  caption: z.string().trim().max(500).optional(),
  readTime: z.string().trim().max(50).optional(),
  content: z.array(z.any()).optional(),
  isRelatedOnly: z.boolean().optional(),
  phases: z.array(z.string()).optional(),
  pullQuote: z.object({
    text: z.string(),
    source: z.string()
  }).optional()
}).strict();

export const updateNewsSchema = createNewsSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update.' }
);

export const newsIdParamSchema = z.object({
  id: z.string().cuid('Invalid news ID format.')
});

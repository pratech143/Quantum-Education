import { z } from 'zod';

export const createTeamMemberSchema = z.object({
  name: z.string().trim().min(2).max(100),
  role: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(500),
  image: z.string().trim().max(1000).optional(),
  socials: z.object({
    linkedin: z.string().url().optional().or(z.literal('')),
    twitter: z.string().url().optional().or(z.literal('')),
    facebook: z.string().url().optional().or(z.literal(''))
  }).optional(),
  isActive: z.boolean().optional()
});

export const updateTeamMemberSchema = createTeamMemberSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update.' }
);

export const teamMemberIdParamSchema = z.object({
  id: z.string().cuid('Invalid team member ID format.')
});

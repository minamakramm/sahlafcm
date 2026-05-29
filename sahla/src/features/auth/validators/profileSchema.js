import { z } from 'zod'

export const profileSchema = z.object({
  full_name: z
    .string()
    .min(3, 'Name must be at least 3 characters.')
    .max(100, 'Name must be 100 characters or fewer.')
    .optional()
    .or(z.literal('')),
  preferred_language: z
    .enum(['en', 'ar'], {
      errorMap: () => ({ message: 'Please select a valid language.' }),
    })
    .optional(),
})

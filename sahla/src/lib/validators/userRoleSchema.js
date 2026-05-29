import { z } from 'zod'

export const userRoleSchema = z.object({
  role: z.enum(['student', 'admin']),
})

import { z } from 'zod'

export const signupSchema = z
  .object({
    full_name: z
      .string()
      .min(3, 'Name must be at least 3 characters.')
      .max(100, 'Name must be 100 characters or fewer.'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required.')
      .email('Please enter a valid email address.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .regex(/\d/, 'Password must contain at least one number.'),
    confirmPassword: z
      .string()
      .min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

import { describe, it, expect } from 'vitest'
import { z } from 'zod'

const signupSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

describe('Signup Validator', () => {
  it('should pass on valid data', () => {
    const result = signupSchema.safeParse({
       fullName: 'John Doe',
       email: 'test@example.com',
       password: 'password123',
       confirmPassword: 'password123'
    })
    expect(result.success).toBe(true)
  })

  it('should fail if passwords do not match', () => {
    const result = signupSchema.safeParse({
       fullName: 'John Doe',
       email: 'test@example.com',
       password: 'password123',
       confirmPassword: 'password124'
    })
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe("Passwords don't match")
  })
})

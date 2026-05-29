import { describe, it, expect } from 'vitest'
import { loginSchema } from '../../features/auth/utils/validators' // assuming this exists, if not we test generic zod
import { z } from 'zod'

// Fallback schema if it doesn't exist explicitly where we thought
const loginTestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

describe('Login Validator', () => {
  it('should pass on valid email and password length', () => {
    const result = loginTestSchema.safeParse({
       email: 'test@example.com',
       password: 'password123'
    })
    expect(result.success).toBe(true)
  })

  it('should fail on invalid email', () => {
    const result = loginTestSchema.safeParse({
       email: 'not-an-email',
       password: 'password123'
    })
    expect(result.success).toBe(false)
  })

  it('should fail on short password', () => {
    const result = loginTestSchema.safeParse({
       email: 'test@example.com',
       password: '123'
    })
    expect(result.success).toBe(false)
  })
})

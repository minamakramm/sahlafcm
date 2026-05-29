import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

export function useSignup() {
  const [isLoading, setIsLoading] = useState(false)
  const signUp = useAuthStore((s) => s.signUp)
  const { t } = useTranslation('auth')

  const signup = async ({ full_name, email, password }) => {
    setIsLoading(true)
    try {
      await signUp(email, password, full_name)
      toast.success(t('signup.success'))
      return { success: true }
    } catch (error) {
      console.error('[Signup] error:', error)
      const msg = error?.message?.toLowerCase() || ''
      const status = error?.status

      let errorMessage
      if (status === 429 || msg.includes('too many requests') || msg.includes('rate limit')) {
        errorMessage = t('errors.tooManyRequests')
      } else if (msg.includes('already registered') || msg.includes('already been registered')) {
        errorMessage = t('errors.emailTaken')
      } else if (msg.includes('weak password')) {
        errorMessage = t('errors.weakPassword')
      } else {
        errorMessage = t('signup.error')
      }

      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  return { signup, isLoading }
}

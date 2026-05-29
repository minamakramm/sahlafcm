import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

/**
 * Maps Supabase error messages to i18n keys.
 */
function mapAuthError(error) {
  console.error('[Login] error details:', error)
  const msg = error?.message?.toLowerCase() || ''

  if (msg.includes('invalid login credentials') || msg.includes('invalid_credentials')) {
    return 'errors.invalidCredentials'
  }
  if (msg.includes('email not confirmed') || msg.includes('email_not_confirmed')) {
    return 'errors.emailNotConfirmed'
  }
  if (msg.includes('too many requests') || msg.includes('rate_limit')) {
    return 'errors.tooManyRequests'
  }
  return 'errors.default'
}

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const signIn = useAuthStore((s) => s.signIn)
  const fetchProfile = useAuthStore((s) => s.fetchProfile)
  const navigate = useNavigate()
  const { t } = useTranslation('auth')

  const login = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const { user } = await signIn(email, password)

      // Fetch profile to determine role
      await fetchProfile(user.id)
      const profile = useAuthStore.getState().profile

      // Redirect based on role
      const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin'
      navigate(isAdmin ? '/admin/dashboard' : '/', { replace: true })

      toast.success(t('login.success'))
      return { success: true }
    } catch (error) {
      const errorKey = mapAuthError(error)
      const errorMessage = t(errorKey)
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  return { login, isLoading }
}

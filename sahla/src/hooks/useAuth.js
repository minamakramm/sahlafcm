import { useEffect } from 'react'
import { useAuthStore } from '@/stores/authStore'

/**
 * Hook to access auth state and actions.
 * Convenience wrapper over authStore.
 */
export function useAuth() {
  const user = useAuthStore((s) => s.user)
  const profile = useAuthStore((s) => s.profile)
  const session = useAuthStore((s) => s.session)
  const isLoading = useAuthStore((s) => s.isLoading)
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const signIn = useAuthStore((s) => s.signIn)
  const signUp = useAuthStore((s) => s.signUp)
  const signOut = useAuthStore((s) => s.signOut)
  const resetPassword = useAuthStore((s) => s.resetPassword)
  const isAdmin = useAuthStore((s) => s.isAdmin)

  return {
    user,
    profile,
    session,
    isLoading,
    isAuthenticated,
    isAdmin: isAdmin(),
    signIn,
    signUp,
    signOut,
    resetPassword,
  }
}

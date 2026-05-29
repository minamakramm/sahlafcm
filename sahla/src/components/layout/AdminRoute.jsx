import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import toast from 'react-hot-toast'
import { useEffect, useRef } from 'react'

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-glass-400 border-t-accent-500" />
    </div>
  )
}

/**
 * AdminRoute guard:
 * - Not authenticated → /login
 * - Not admin → toast "Access denied." + redirect /
 */
export function AdminRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const isAdmin = useAuthStore((s) => s.isAdmin)
  const isLoading = useAuthStore((s) => s.isLoading)
  const isProfileLoading = useAuthStore((s) => s.isProfileLoading)
  const isInitialized = useAuthStore((s) => s.isInitialized)
  const toastShown = useRef(false)

  // Wait if either the fundamental auth session is loading OR
  // the specific user profile (with the admin role) is currently being fetched
  const isSyncing = isLoading || !isInitialized || (isAuthenticated && isProfileLoading)

  const shouldDeny = !isSyncing && isAuthenticated && !isAdmin()

  useEffect(() => {
    if (shouldDeny && !toastShown.current) {
      toast.error('Access denied.')
      toastShown.current = true
    }
  }, [shouldDeny])

  if (isSyncing) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin()) return <Navigate to="/" replace />

  return children
}

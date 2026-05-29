import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { useSettingsStore } from '@/stores/settingsStore'

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-glass-400 border-t-accent-500" />
    </div>
  )
}

export function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAdmin, profile } = useAuthStore((s) => ({
    isAuthenticated: s.isAuthenticated,
    isLoading: s.isLoading,
    isAdmin: s.isAdmin,
    profile: s.profile
  }))
  const maintenanceMode = useSettingsStore((s) => s.maintenanceMode)
  const location = useLocation()

  if (isLoading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />
  if (maintenanceMode && !isAdmin()) return <Navigate to="/maintenance" replace />

  return children
}

// ============================================
// Sahla — MonitorRoute Guard
// Restricts access to monitor or admin users
// ============================================

import React, { useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { useMonitorAccess } from '@/features/deadlines/hooks/useMonitorAccess'
import toast from 'react-hot-toast'

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-glass-400 border-t-accent-500" />
    </div>
  )
}

/**
 * MonitorRoute guard:
 * - Not authenticated → /login
 * - Not monitor/admin → toast "Access denied" + redirect /deadlines
 */
export function MonitorRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const isAuthLoading = useAuthStore((s) => s.isLoading)
  const { isMonitor, isAdmin, isLoading: isMonitorLoading } = useMonitorAccess()
  const toastShown = useRef(false)

  const isSyncing = isAuthLoading || isMonitorLoading
  const hasAccess = isMonitor || isAdmin
  const shouldDeny = !isSyncing && isAuthenticated && !hasAccess

  useEffect(() => {
    if (shouldDeny && !toastShown.current) {
      toast.error('Access denied.')
      toastShown.current = true
    }
  }, [shouldDeny])

  if (isSyncing) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!hasAccess) return <Navigate to="/deadlines" replace />

  return children
}

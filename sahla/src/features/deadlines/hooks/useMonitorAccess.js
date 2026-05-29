// ============================================
// Sahla — useMonitorAccess Hook
// Checks if current user has monitor or admin role
// ============================================

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

/**
 * Hook to check if the current user has monitor access.
 * Returns { isMonitor, isAdmin, monitorData, isLoading }
 */
export function useMonitorAccess() {
  const user = useAuthStore((s) => s.user)
  const profile = useAuthStore((s) => s.profile)
  const isAuthLoading = useAuthStore((s) => s.isLoading)
  const isAdminFn = useAuthStore((s) => s.isAdmin)

  const [monitorData, setMonitorData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAdmin = isAdminFn()

  useEffect(() => {
    if (isAuthLoading || !user) {
      setIsLoading(false)
      return
    }

    // Admins automatically have access — skip monitor check
    if (isAdmin) {
      setMonitorData({ department_id: null }) // null = all departments
      setIsLoading(false)
      return
    }

    // Check if user is a monitor
    async function checkMonitor() {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from('monitors')
          .select('*')
          .eq('user_id', user.id)

        if (error) throw error
        setMonitorData(data && data.length > 0 ? data : null)
      } catch (err) {
        console.error('[useMonitorAccess] Error:', err)
        setMonitorData(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkMonitor()
  }, [user, isAdmin, isAuthLoading])

  return {
    isMonitor: !!monitorData,
    isAdmin,
    monitorData,
    isLoading: isAuthLoading || isLoading,
    /** Get department IDs this user can manage */
    allowedDepartments: monitorData 
      ? Array.isArray(monitorData) 
        ? monitorData.map(m => m.department_id).filter(Boolean)
        : monitorData.department_id ? [monitorData.department_id] : [] // empty = all
      : [],
    /** Check if a specific department is allowed */
    canManageDepartment: (deptId) => {
      if (isAdmin) return true
      if (!monitorData) return false
      const depts = Array.isArray(monitorData) ? monitorData : [monitorData]
      return depts.some(m => m.department_id === null || m.department_id === deptId)
    }
  }
}

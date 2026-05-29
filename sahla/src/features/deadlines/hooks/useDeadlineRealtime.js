// ============================================
// Sahla — useDeadlineRealtime Hook
// Supabase Realtime subscription for deadlines
// ============================================

import { useEffect, useRef, useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

/**
 * Subscribe to realtime deadline updates.
 * Automatically invalidates React Query cache on changes.
 */
export function useDeadlineRealtime({ enabled = true } = {}) {
  const queryClient = useQueryClient()
  const channelRef = useRef(null)

  const handlePayload = useCallback((payload) => {
    console.debug('[Deadline Realtime]', payload.eventType, payload)
    // Invalidate all deadline queries to refetch fresh data
    queryClient.invalidateQueries({ queryKey: ['deadlines'] })
  }, [queryClient])

  useEffect(() => {
    if (!enabled) return

    // Subscribe to deadlines changes
    channelRef.current = supabase
      .channel('deadlines-realtime')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'deadlines',
      }, handlePayload)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'deadline_reactions',
      }, handlePayload)
      .subscribe((status) => {
        console.debug('[Deadline Realtime] Channel status:', status)
      })

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
      }
    }
  }, [enabled, handlePayload])

  return {
    unsubscribe: () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
      }
    }
  }
}

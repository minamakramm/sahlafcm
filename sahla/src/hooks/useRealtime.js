import { useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

export function useRealtime(channelName, {
  table,
  schema = 'public',
  event = '*',
  filter,
  onPayload,
  enabled = true,
}) {
  const channelRef = useRef(null)

  useEffect(() => {
    if (!enabled || !table) return

    const channelConfig = { event, schema, table }
    if (filter) channelConfig.filter = filter

    channelRef.current = supabase.channel(channelName)
      .on('postgres_changes', channelConfig, (payload) => {
        onPayload(payload)
      })
      .subscribe()

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
      }
    }
  }, [channelName, table, schema, event, filter, enabled, onPayload])

  return { unsubscribe: () => {
    if (channelRef.current) supabase.removeChannel(channelRef.current)
  } }
}

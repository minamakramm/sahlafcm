import { useEffect, useCallback, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

export const EVENTS = {
  PAGE_VIEW: 'page_view',
  LECTURE_VIEW: 'lecture_view',
  LECTURE_TAB_SWITCH: 'lecture_tab_switch',
  SUBJECT_OPEN: 'subject_open',
  EXAM_START: 'exam_start',
  EXAM_SUBMIT: 'exam_submit',
  THEME_CHANGE: 'theme_change',
  ERROR: 'error'
}

export function useAnalytics() {
  // Simple offline queue stored in localStorage
  const queueRef = useRef([])

  // Generate or retrieve session ID
  const getSessionId = useCallback(() => {
    let sid = sessionStorage.getItem('sahla-session-id')
    if (!sid) {
      sid = typeof crypto !== 'undefined' && crypto.randomUUID 
        ? crypto.randomUUID() 
        : `session_${Date.now()}`
      sessionStorage.setItem('sahla-session-id', sid)
    }
    return sid
  }, [])

  // Process queue when online
  const processQueue = useCallback(async () => {
    if (typeof window !== 'undefined' && !window.navigator.onLine) return
    const queue = JSON.parse(localStorage.getItem('sahla-analytics-queue') || '[]')
    if (queue.length === 0) return

    try {
      const { error } = await supabase.from('analytics_events').insert(queue)
      if (!error) {
        localStorage.setItem('sahla-analytics-queue', '[]')
      }
    } catch {
      // Keep in queue if failed
    }
  }, [])

  // Monitor online status to trigger queue processing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', processQueue)
      return () => window.removeEventListener('online', processQueue)
    }
  }, [processQueue])

  // Fire and forget
  const track = useCallback(async (eventType, eventData = {}) => {
    const user = useAuthStore.getState().user
    
    const eventParams = {
       event_type: eventType,
       event_data: eventData,
       session_id: getSessionId(),
       user_id: user?.id || null,
       url: typeof window !== 'undefined' ? window.location.pathname : '',
    }

    if (typeof window !== 'undefined' && !window.navigator.onLine) {
       // Save to local queue
       const queue = JSON.parse(localStorage.getItem('sahla-analytics-queue') || '[]')
       queue.push(eventParams)
       localStorage.setItem('sahla-analytics-queue', JSON.stringify(queue))
       return
    }

    // Try sending immediately
    supabase.from('analytics_events').insert([eventParams]).then(({ error }) => {
       if (error) {
          // If fail, add to queue
           const queue = JSON.parse(localStorage.getItem('sahla-analytics-queue') || '[]')
           queue.push(eventParams)
           localStorage.setItem('sahla-analytics-queue', JSON.stringify(queue))
       }
    })

  }, [getSessionId])

 return { track, EVENTS }
}

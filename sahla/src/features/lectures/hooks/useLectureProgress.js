import { useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'

/**
 * Read lecture progress from Supabase
 */
export function useLectureProgress(subjectId, lectureNumber) {
  const { user, isAuthenticated } = useAuth()
  const [progress, setProgress] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated || !user?.id || !subjectId || !lectureNumber) {
      setProgress(null)
      return
    }

    let cancelled = false
    setIsLoading(true)

    const fetchProgress = async () => {
      try {
        const { data, error } = await supabase
          .from('lecture_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('subject_id', subjectId)
          .eq('lecture_number', String(lectureNumber))
          .maybeSingle()

        if (!cancelled) {
          if (error) {
            console.warn('[useLectureProgress] Fetch error:', error)
            setProgress(null)
          } else {
            setProgress(data)
          }
        }
      } catch (err) {
        console.warn('[useLectureProgress] Error:', err)
        if (!cancelled) setProgress(null)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    fetchProgress()
    return () => { cancelled = true }
  }, [user?.id, isAuthenticated, subjectId, lectureNumber])

  return { progress, isLoading }
}

/**
 * Read ALL lecture progress for a specific subject
 */
export function useSubjectProgress(subjectId) {
  const { user, isAuthenticated } = useAuth()
  const [progressMap, setProgressMap] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchAllProgress = useCallback(async () => {
    if (!isAuthenticated || !user?.id || !subjectId) return

    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('lecture_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subjectId)

      if (error) throw error

      const map = {}
      data?.forEach(row => {
        map[row.lecture_number] = row
      })
      setProgressMap(map)
    } catch (err) {
      console.warn('[useSubjectProgress] Error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [user?.id, isAuthenticated, subjectId])

  useEffect(() => {
    fetchAllProgress()
  }, [fetchAllProgress])

  return { progressMap, isLoading, refetch: fetchAllProgress }
}

/**
 * Update (upsert) lecture progress in Supabase
 */
export function useUpdateProgress(subjectId, lectureNumber) {
  const { user, profile, isAuthenticated } = useAuth()
  const [isUpdating, setIsUpdating] = useState(false)

  const updateProgress = useCallback(async (fields) => {
    if (!isAuthenticated || !user?.id || !profile || !subjectId || !lectureNumber) {
      if (isAuthenticated && !profile) {
        console.warn('[useUpdateProgress] Profile not yet loaded, skipping sync.')
      }
      return
    }

    setIsUpdating(true)
    try {
      const { error } = await supabase
        .from('lecture_progress')
        .upsert(
          {
            user_id: user.id,
            subject_id: subjectId,
            lecture_number: String(lectureNumber),
            ...fields,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,subject_id,lecture_number' }
        )

      if (error) {
        console.warn('[useUpdateProgress] Upsert error:', error)
      }
    } catch (err) {
      console.warn('[useUpdateProgress] Error:', err)
    } finally {
      setIsUpdating(false)
    }
  }, [user?.id, isAuthenticated, subjectId, lectureNumber])

  return { updateProgress, isUpdating }
}

/**
 * Track time spent on a lecture — HIGH ACCURACY
 * Tracks active engagement by using timestamps and visibility state
 */
export function useTimeTracker(subjectId, lectureNumber) {
  const { user, profile, isAuthenticated } = useAuth()
  
  // Track start time of current active session
  const startTimeRef = useRef(Date.now())
  const lastFlushRef = useRef(Date.now())
  
  const flush = useCallback(async () => {
    if (!isAuthenticated || !user?.id || !profile || !subjectId || !lectureNumber) return
    
    // Calculate elapsed since last flush
    const now = Date.now()
    const elapsedSeconds = Math.floor((now - lastFlushRef.current) / 1000)
    
    if (elapsedSeconds < 1) return // Too small to record
    
    lastFlushRef.current = now

    try {
      // 1. Get current atomic value to avoid overwrites
      const { data } = await supabase
        .from('lecture_progress')
        .select('time_spent_seconds')
        .eq('user_id', user.id)
        .eq('subject_id', subjectId)
        .eq('lecture_number', String(lectureNumber))
        .maybeSingle()

      const current = data?.time_spent_seconds || 0

      // 2. Increment and save
      await supabase
        .from('lecture_progress')
        .upsert({
          user_id: user.id,
          subject_id: subjectId,
          lecture_number: String(lectureNumber),
          time_spent_seconds: current + elapsedSeconds,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,subject_id,lecture_number' })
        
    } catch (err) {
      console.warn('[useTimeTracker] Flush error:', err)
      // On error, we "lose" this chunk, but subsequent ones will try to sync
    }
  }, [user?.id, isAuthenticated, subjectId, lectureNumber])

  useEffect(() => {
    if (!isAuthenticated || !subjectId || !lectureNumber) return

    // 1. Reset trackers on lecture change
    startTimeRef.current = Date.now()
    lastFlushRef.current = Date.now()

    // 2. Periodic sync (every 60 seconds)
    const interval = setInterval(flush, 60000)

    // 3. Visibility Change Listener (Pause/Resume tracking)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Tab hidden: Flush what we have and stop counting
        flush()
      } else {
        // Tab focused: Restart the clock
        lastFlushRef.current = Date.now()
      }
    }

    // 4. PageHide Listener (safest for mobile unmount/tab close)
    const handlePageHide = () => flush()

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('pagehide', handlePageHide)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('pagehide', handlePageHide)
      flush() // Final flush on component unmount
    }
  }, [isAuthenticated, subjectId, lectureNumber, flush])

  return { flush }
}
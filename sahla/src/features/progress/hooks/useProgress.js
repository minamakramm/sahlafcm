import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'

export function useProgress() {
  const { user, isAuthenticated } = useAuth()
  const [lectureProgress, setLectureProgress] = useState([])
  const [examAttempts, setExamAttempts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProgress = useCallback(async () => {
    if (!isAuthenticated || !user?.id) {
      setLectureProgress([])
      setExamAttempts([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    try {
      // Fetch both in parallel
      const [progressRes, examRes] = await Promise.all([
        supabase
          .from('lecture_progress')
          .select('*')
          .eq('user_id', user.id)
          .order('last_watched_at', { ascending: false }),
        
        supabase
          .from('exam_attempts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
      ])

      if (progressRes.data) setLectureProgress(progressRes.data)
      if (examRes.data) setExamAttempts(examRes.data)
    } catch (error) {
      console.warn('Error fetching progress:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user?.id, isAuthenticated])

  useEffect(() => {
    fetchProgress()
  }, [fetchProgress])

  return { lectureProgress, examAttempts, isLoading, refetch: fetchProgress }
}

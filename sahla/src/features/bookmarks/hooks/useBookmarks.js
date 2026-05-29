import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

/**
 * Bookmark CRUD hook — reads/writes bookmarks for the authenticated user.
 */
export function useBookmarks() {
  const { user, isAuthenticated } = useAuth()
  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch all bookmarks for this user
  const fetchBookmarks = useCallback(async () => {
    if (!isAuthenticated || !user?.id) {
      setBookmarks([])
      return
    }

    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setBookmarks(data || [])
    } catch (err) {
      console.warn('[useBookmarks] Fetch error:', err)
      setBookmarks([])
    } finally {
      setIsLoading(false)
    }
  }, [user?.id, isAuthenticated])

  useEffect(() => {
    fetchBookmarks()
  }, [fetchBookmarks])

  return { bookmarks, isLoading, refetch: fetchBookmarks }
}

/**
 * Check if a specific lecture is bookmarked + toggle
 */
export function useBookmarkLecture(subjectId, lectureNumber) {
  const { user, isAuthenticated } = useAuth()
  const { t } = useTranslation('lectures')
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isToggling, setIsToggling] = useState(false)

  // Check initial bookmark state
  useEffect(() => {
    if (!isAuthenticated || !user?.id || !subjectId || !lectureNumber) {
      setIsBookmarked(false)
      return
    }

    let cancelled = false

    const check = async () => {
      try {
        const { data, error } = await supabase
          .from('bookmarks')
          .select('id')
          .eq('user_id', user.id)
          .eq('subject_id', subjectId)
          .eq('lecture_number', String(lectureNumber))
          .maybeSingle()

        if (!cancelled && !error) {
          setIsBookmarked(!!data)
        }
      } catch (err) {
        console.warn('[useBookmarkLecture] Check error:', err)
      }
    }

    check()
    return () => { cancelled = true }
  }, [user?.id, isAuthenticated, subjectId, lectureNumber])

  const toggle = useCallback(async () => {
    if (!isAuthenticated || !user?.id) {
      toast.error(t('bookmark.loginRequired', 'Please login to bookmark'))
      return
    }

    setIsToggling(true)
    try {
      if (isBookmarked) {
        // Remove bookmark
        const { error } = await supabase
          .from('bookmarks')
          .delete()
          .eq('user_id', user.id)
          .eq('subject_id', subjectId)
          .eq('lecture_number', String(lectureNumber))

        if (error) throw error
        setIsBookmarked(false)
        toast.success(t('bookmark.removed', 'Bookmark removed'))
      } else {
        // Add bookmark
        const { error } = await supabase
          .from('bookmarks')
          .insert({
            user_id: user.id,
            subject_id: subjectId,
            lecture_number: String(lectureNumber),
            bookmark_type: 'lecture',
          })

        if (error) throw error
        setIsBookmarked(true)
        toast.success(t('bookmark.added', 'Lecture bookmarked!'))
      }
    } catch (err) {
      console.warn('[useBookmarkLecture] Toggle error:', err)
      toast.error('Failed to update bookmark')
    } finally {
      setIsToggling(false)
    }
  }, [isAuthenticated, user?.id, isBookmarked, subjectId, lectureNumber, t])

  return { isBookmarked, isToggling, toggle }
}

import { useState, useCallback, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { useRealtime } from '@/hooks/useRealtime'
import toast from 'react-hot-toast'

export function useFeatureRequests() {
  const { user, isAuthenticated } = useAuth()
  const [requests, setRequests] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchRequests = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('feature_requests')
        .select('*')
        .order('votes', { ascending: false })
        .order('created_at', { ascending: false })
      
      if (error) console.error(error)
      if (data) setRequests(data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRequests()
  }, [fetchRequests])

  // Subscribing to realtime updates
  useRealtime('feature-requests', {
    table: 'feature_requests',
    onPayload: useCallback((payload) => {
      setRequests(prev => {
        if (payload.eventType === 'INSERT') {
          return [payload.new, ...prev].sort((a,b) => b.votes - a.votes)
        }
        if (payload.eventType === 'UPDATE') {
          return prev.map(r => r.id === payload.new.id ? payload.new : r).sort((a,b) => b.votes - a.votes)
        }
        if (payload.eventType === 'DELETE') {
          return prev.filter(r => r.id !== payload.old.id)
        }
        return prev
      })
    }, []),
  })

  const submitRequest = useCallback(async (title, description) => {
    if (!isAuthenticated) return toast.error('Please login to submit a feature request')
    
    // Simple rate limiting via local storage (to avoid hitting Edge function repeatedly in basic tier)
    const lastSubmitStr = localStorage.getItem('sahla-last-feature-request')
    if (lastSubmitStr) {
       const lastSubmit = new Date(lastSubmitStr)
       const diffMinutes = (Date.now() - lastSubmit.getTime()) / 60000
       if (diffMinutes < 5) {
          toast.error("You've recently submitted a suggestion. Please wait a few minutes.")
          return false
       }
    }

    try {
      const { error } = await supabase.from('feature_requests').insert({
        title,
        description,
        user_id: user.id
      })
      if (error) throw error

      localStorage.setItem('sahla-last-feature-request', new Date().toISOString())
      toast.success('Suggestion submitted!')
      return true
    } catch (e) {
      toast.error('Failed to submit suggestion.')
      return false
    }
  }, [isAuthenticated, user?.id])

  const voteForRequest = useCallback(async (requestId) => {
    // Edge function handles voting and duplicate prevention
    if (!isAuthenticated) return toast.error('Please login to vote')

    try {
      const localKey = `sahla-voted-${requestId}`
      if (localStorage.getItem(localKey)) return // already voted

      // Optimistic UI update
      setRequests(prev => prev.map(r => r.id === requestId ? { ...r, votes: r.votes + 1 } : r).sort((a,b) => b.votes - a.votes))
      localStorage.setItem(localKey, 'true')

      const { data, error } = await supabase.functions.invoke('vote-feature-request', {
        body: { requestId }
      })

      if (error) {
         // revert
         localStorage.removeItem(localKey)
         setRequests(prev => prev.map(r => r.id === requestId ? { ...r, votes: r.votes - 1 } : r).sort((a,b) => b.votes - a.votes))
         toast.error('Failed to vote')
      }
    } catch (e) {
      // revert logic inside catch
    }
  }, [isAuthenticated])

  return { requests, isLoading, submitRequest, voteForRequest }
}

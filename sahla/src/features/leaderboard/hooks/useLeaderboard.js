import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { useAuthStore } from '@/stores/authStore'

/**
 * Leaderboard Hook v9 — Realtime
 * 
 * - Calls sync_all_xp() RPC to calculate XP server-side (bypasses RLS)
 * - Subscribes to Supabase Realtime on the profiles table
 * - Automatically refreshes when any user's XP changes
 */
export function useLeaderboard() {
  const { user: currentUser, isAuthenticated } = useAuth()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch leaderboard data from profiles
  const fetchBoard = useCallback(async () => {
    try {
      const { data: profiles, error: err } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url, level, updated_at, xp, show_avatar')
        .not('full_name', 'is', null)
        .order('xp', { ascending: false, nullsFirst: false })
        .limit(200)

      if (err) throw err
      if (!profiles?.length) { setData([]); return }

      // Ensure current user is included
      let pool = [...profiles]
      if (isAuthenticated && currentUser?.id && !profiles.some(p => p.id === currentUser.id)) {
        const { data: me } = await supabase
          .from('profiles')
          .select('id, full_name, avatar_url, level, updated_at, xp, show_avatar')
          .eq('id', currentUser.id)
          .maybeSingle()
        if (me) pool.push(me)
      }

      pool.sort((a, b) => (b.xp || 0) - (a.xp || 0))
      setData(pool.map((p, i) => ({
        ...p,
        rank: i + 1,
        xp: p.xp || 0,
        completed_lectures: 0,
        exams_taken: 0,
        last_active: p.updated_at,
        streak: 0,
      })))
      setError(null)
    } catch (err) {
      setError(err)
    }
  }, [currentUser?.id, isAuthenticated])

  useEffect(() => {
    // ── Set up realtime channel (must call .on() before .subscribe()) ──
    const channel = supabase
      .channel('leaderboard-rt-' + Date.now())
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
        },
        (payload) => {
          fetchBoard()
        }
      )
      .subscribe((status) => {
      })

    // ── Async init: sync XP then fetch ──
    async function init() {
      setIsLoading(true)

      if (isAuthenticated && currentUser?.id) {
        const { error: rpcError } = await supabase.rpc('sync_all_xp')
        if (rpcError) {
          await syncSingleUserXP(currentUser.id)
        } else {
        }
      }

      await fetchBoard()
      setIsLoading(false)
    }

    init()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [currentUser?.id, isAuthenticated, fetchBoard])

  return { data, isLoading, error }
}

/**
 * Fallback: Single user XP sync (if RPC not available)
 */
async function syncSingleUserXP(userId) {
  try {
    const [lpRes, eaRes, evRes, profileRes] = await Promise.all([
      supabase.from('lecture_progress').select('is_completed, mcq_score, time_spent_seconds').eq('user_id', userId).limit(5000),
      supabase.from('exam_attempts').select('score').eq('user_id', userId).limit(5000),
      supabase.from('analytics_events').select('id', { count: 'exact', head: true }).eq('user_id', userId),
      supabase.from('profiles').select('level').eq('id', userId).maybeSingle()
    ])

    const lectures = lpRes.data || []
    const exams = eaRes.data || []
    const eventCount = evRes.count || 0
    const level = parseInt(profileRes.data?.level) || 1

    let lectureXP = 0, mcqXP = 0, timeXP = 0, examXP = 0
    lectures.forEach(l => {
      if (l.is_completed) lectureXP += 100
      if (l.mcq_score > 0) mcqXP += l.mcq_score
      if (l.time_spent_seconds > 0) timeXP += Math.floor(l.time_spent_seconds / 120)
    })
    exams.forEach(e => { examXP += (e.score || 0) * 2 })
    const totalXP = (level * 500) + lectureXP + mcqXP + timeXP + examXP + Math.floor(eventCount * 0.2)

    await supabase.from('profiles').update({ xp: totalXP, updated_at: new Date().toISOString() }).eq('id', userId)
  } catch (err) {
  }
}

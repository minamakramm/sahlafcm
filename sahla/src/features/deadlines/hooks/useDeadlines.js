// ============================================
// Sahla — useDeadlines Hook
// React Query hook for fetching deadlines with filters
// ============================================

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'
import { getWeekDates } from '../lib/deadlineValidators'

const DEADLINES_KEY = 'deadlines'

/**
 * Fetch deadlines with optional filters
 */
async function fetchDeadlines({ departmentId, semesterId, type, status, search }) {
  let query = supabase
    .from('deadlines')
    .select(`
      *,
      subject:subjects(name),
      reactions:deadline_reactions(id, user_id, type, flag_reason),
      created_by_profile:profiles!created_by(full_name)
    `)
    .order('due_date', { ascending: true })

  if (departmentId) query = query.eq('department_id', departmentId)
  if (semesterId) query = query.eq('semester_id', semesterId)
  if (type && type !== 'all') query = query.eq('type', type)
  if (status && status !== 'all') query = query.eq('status', status)
  if (search) query = query.or(`title.ilike.%${search}%,subject_name_override.ilike.%${search}%`)

  const { data, error } = await query
  if (error) throw error
  return data || []
}

/**
 * Hook for listing deadlines (student + monitor)
 */
export function useDeadlines(filters = {}) {
  return useQuery({
    queryKey: [DEADLINES_KEY, filters],
    queryFn: () => fetchDeadlines(filters),
    staleTime: 1000 * 60 * 2, // 2 minutes
  })
}

/**
 * Fetch a single deadline by ID
 */
export function useDeadline(id) {
  return useQuery({
    queryKey: [DEADLINES_KEY, id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('deadlines')
        .select(`
          *,
          subject:subjects(name),
          reactions:deadline_reactions(id, user_id, type, flag_reason),
          created_by_profile:profiles!created_by(full_name)
        `)
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    },
    enabled: !!id,
  })
}

/**
 * Create deadline mutation
 */
export function useCreateDeadline() {
  const queryClient = useQueryClient()
  const user = useAuthStore.getState().user

  return useMutation({
    mutationFn: async (deadlineData) => {
      const payload = {
        ...deadlineData,
        created_by: user?.id,
        updated_by: user?.id,
      }

      // Handle week-based scheduling for quizzes
      if (payload.due_week && (!payload.due_date || payload.due_date === '')) {
        // Store the week end date as due_date for status computation
        const { end } = getWeekDates(payload.due_week)
        payload.due_date = end.toISOString().split('T')[0]
        delete payload.due_time // No specific time for week-based quizzes
      }

      // Compute initial status client-side
      payload.status = computeClientStatus(payload.due_date)

      // Clean optional empty strings
      if (!payload.subject_id) delete payload.subject_id
      if (!payload.subject_name_override) delete payload.subject_name_override
      if (!payload.due_time) delete payload.due_time
      if (!payload.phase_two_date) delete payload.phase_two_date
      if (!payload.phase_two_time) delete payload.phase_two_time
      if (!payload.location) delete payload.location
      if (!payload.reference_url) delete payload.reference_url
      if (!payload.description) delete payload.description
      if (!payload.due_week) delete payload.due_week

      const { data, error } = await supabase
        .from('deadlines')
        .insert(payload)
        .select()
        .single()
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DEADLINES_KEY] })
    },
  })
}

/**
 * Update deadline mutation
 */
export function useUpdateDeadline() {
  const queryClient = useQueryClient()
  const user = useAuthStore.getState().user

  return useMutation({
    mutationFn: async ({ id, ...updates }) => {
      const payload = {
        ...updates,
        updated_by: user?.id,
      }

      // Handle week-based scheduling for quizzes
      if (payload.due_week && (!payload.due_date || payload.due_date === '')) {
        const { end } = getWeekDates(payload.due_week)
        payload.due_date = end.toISOString().split('T')[0]
        payload.due_time = null
      }

      // Clean optional empty strings
      if (payload.subject_id === '') delete payload.subject_id
      if (payload.subject_name_override === '') delete payload.subject_name_override
      if (payload.due_time === '') payload.due_time = null
      if (payload.phase_two_date === '') payload.phase_two_date = null
      if (payload.phase_two_time === '') payload.phase_two_time = null
      if (payload.location === '') payload.location = null
      if (payload.reference_url === '') payload.reference_url = null
      if (payload.description === '') payload.description = null
      if (payload.due_week === '') payload.due_week = null

      const { data, error } = await supabase
        .from('deadlines')
        .update(payload)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DEADLINES_KEY] })
    },
  })
}

/**
 * Delete deadline mutation
 */
export function useDeleteDeadline() {
  const queryClient = useQueryClient()
  const user = useAuthStore.getState().user

  return useMutation({
    mutationFn: async (id) => {
      // Log deletion to history before deleting
      const { data: deadline } = await supabase
        .from('deadlines')
        .select('*')
        .eq('id', id)
        .single()

      if (deadline) {
        await supabase.from('deadline_history').insert({
          deadline_id: id,
          changed_by: user?.id,
          change_type: 'deleted',
          old_values: deadline,
        })
      }

      const { error } = await supabase
        .from('deadlines')
        .delete()
        .eq('id', id)
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DEADLINES_KEY] })
    },
  })
}

/**
 * Mark deadline as done
 */
export function useMarkDeadlineDone() {
  const queryClient = useQueryClient()
  const user = useAuthStore.getState().user

  return useMutation({
    mutationFn: async (id) => {
      const { data, error } = await supabase
        .from('deadlines')
        .update({ status: 'done', updated_by: user?.id })
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DEADLINES_KEY] })
    },
  })
}

/**
 * Submit a reaction (acknowledge or flag)
 */
export function useDeadlineReaction() {
  const queryClient = useQueryClient()
  const user = useAuthStore.getState().user

  return useMutation({
    mutationFn: async ({ deadlineId, type, flag_reason }) => {
      const { data, error } = await supabase
        .from('deadline_reactions')
        .upsert({
          deadline_id: deadlineId,
          user_id: user?.id,
          type,
          flag_reason: type === 'flagged' ? flag_reason : null,
        }, {
          onConflict: 'deadline_id,user_id',
        })
        .select()
        .single()
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DEADLINES_KEY] })
    },
  })
}

/**
 * Fetch deadline history
 */
export function useDeadlineHistory(deadlineId) {
  return useQuery({
    queryKey: [DEADLINES_KEY, 'history', deadlineId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('deadline_history')
        .select('*, changed_by_profile:profiles!changed_by(full_name)')
        .eq('deadline_id', deadlineId)
        .order('changed_at', { ascending: false })
      if (error) throw error
      return data || []
    },
    enabled: !!deadlineId,
  })
}

/**
 * Client-side status computation (mirrors SQL function)
 */
function computeClientStatus(dueDateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(dueDateStr)
  due.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  if (due.getTime() === today.getTime()) return 'today'
  if (due.getTime() === tomorrow.getTime()) return 'tomorrow'
  if (due > tomorrow) return 'upcoming'
  return 'overdue'
}

// ============================================
// Sahla — Deadline Zod Validation Schemas
// ============================================

import { z } from 'zod'

/**
 * Deadline create/edit schema
 * Used with react-hook-form + @hookform/resolvers/zod
 *
 * Quiz type uses week-based scheduling (due_week) instead of exact date.
 * All other types require a specific due_date.
 */
export const deadlineSchema = z.object({
  department_id: z.string().uuid({ message: 'Select a department' }),
  semester_id: z.string().uuid({ message: 'Select a semester' }),
  subject_id: z.string().uuid().optional().or(z.literal('')),
  subject_name_override: z.string().max(100).optional().or(z.literal('')),
  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title too long'),
  description: z.string().max(500).optional().or(z.literal('')),
  type: z.enum(['quiz', 'assignment', 'project', 'other']),
  // due_date is optional for quizzes (they use due_week instead)
  due_date: z.string().optional().or(z.literal('')),
  due_time: z.string().optional().or(z.literal('')),
  phase_two_date: z.string().optional().or(z.literal('')),
  phase_two_time: z.string().optional().or(z.literal('')),
  // Week-based scheduling for quizzes
  due_week: z.enum(['this_week', 'next_week', 'week_after_next', '']).optional().or(z.literal('')),
  location: z.string().max(200).optional().or(z.literal('')),
  reference_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  is_confirmed: z.boolean().default(false),
}).refine(
  data => (data.subject_id && data.subject_id.length > 0) || (data.subject_name_override && data.subject_name_override.length > 0),
  { message: 'Either select a subject or enter a subject name', path: ['subject_id'] }
).refine(
  data => {
    // Quizzes need either due_week or due_date
    if (data.type === 'quiz') {
      return (data.due_week && data.due_week.length > 0) || (data.due_date && data.due_date.length > 0 && !isNaN(Date.parse(data.due_date)))
    }
    // All other types require due_date
    return data.due_date && data.due_date.length > 0 && !isNaN(Date.parse(data.due_date))
  },
  { message: 'Select a date or week', path: ['due_date'] }
)

/**
 * Flag reaction schema
 */
export const flagReactionSchema = z.object({
  type: z.literal('flagged'),
  flag_reason: z.enum(['wrong_date', 'wrong_subject', 'already_done', 'other']),
  flag_note: z.string().max(200).optional(),
})

/**
 * Deadline type options (for UI selectors)
 */
export const DEADLINE_TYPES = ['quiz', 'assignment', 'project', 'other']

/**
 * Week scheduling options (for quiz type)
 */
export const WEEK_OPTIONS = ['this_week', 'next_week', 'week_after_next']

/**
 * Deadline status options
 */
export const DEADLINE_STATUSES = ['upcoming', 'today', 'tomorrow', 'overdue', 'done']

/**
 * Flag reason options
 */
export const FLAG_REASONS = ['wrong_date', 'wrong_subject', 'already_done', 'other']

/**
 * Compute the start (Sunday) and end (Saturday) dates for a given due_week value.
 * Returns { start: Date, end: Date }
 */
export function getWeekDates(dueWeek) {
  const now = new Date()
  const dayOfWeek = now.getDay() // 0=Sun, 1=Mon, ..., 6=Sat
  
  // Calculate Sunday of current week (Start of week)
  const sunday = new Date(now)
  sunday.setHours(0, 0, 0, 0)
  sunday.setDate(now.getDate() - dayOfWeek) 

  let offset = 0
  if (dueWeek === 'next_week') offset = 7
  if (dueWeek === 'week_after_next') offset = 14

  const start = new Date(sunday)
  start.setDate(sunday.getDate() + offset)
  const end = new Date(start)
  end.setDate(start.getDate() + 6) // Saturday
  end.setHours(23, 59, 59, 999)

  return { start, end }
}

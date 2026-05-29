// ============================================
// Sahla — useDeadlineForm Hook
// React Hook Form + Zod integration for deadline forms
// ============================================

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { deadlineSchema } from '../lib/deadlineValidators'

const DRAFT_KEY = 'deadline_form_draft'

/**
 * Hook wrapping RHF with Zod validation for deadline create/edit.
 * Includes local storage persistence to prevent data loss.
 * @param {Object} defaultValues – Pre-fill for edit mode
 */
export function useDeadlineForm(defaultValues = {}) {
  const form = useForm({
    resolver: zodResolver(deadlineSchema),
    defaultValues: {
      department_id: '',
      semester_id: '',
      subject_id: '',
      subject_name_override: '',
      title: '',
      description: '',
      type: 'quiz',
      due_date: '',
      due_time: '',
      phase_two_date: '',
      phase_two_time: '',
      due_week: '',
      location: '',
      reference_url: '',
      is_confirmed: false,
      ...defaultValues,
    },
    mode: 'onBlur',
  })

  const { watch, reset } = form

  // 1. Restore draft on mount if not in edit mode
  useEffect(() => {
    // We only auto-restore for NEW deadlines, not edits (to avoid stale data overwriting DB data)
    // We check if it's new mode by seeing if there are any default values passed in
    const isEditMode = defaultValues && Object.keys(defaultValues).length > 0
    
    if (!isEditMode) {
      const saved = localStorage.getItem(DRAFT_KEY)
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          reset(parsed)
        } catch (e) {
          console.error('Failed to parse deadline draft', e)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]) // Only run ONCE on mount

  // 2. Save changes to draft
  useEffect(() => {
    const isEditMode = defaultValues && Object.keys(defaultValues).length > 0
    
    const subscription = watch((value) => {
      // Only save if it's a new deadline creation (no id)
      if (!isEditMode) {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(value))
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, defaultValues])

  return form
}

export function clearDeadlineDraft() {
  localStorage.removeItem(DRAFT_KEY)
}

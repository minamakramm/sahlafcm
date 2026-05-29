// ============================================
// Sahla — DeadlineForm Component (Monitor)
// Create / Edit deadline form — RHF + Zod
// ============================================

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { X, Check, Loader2, UploadCloud } from 'lucide-react'
import { useDeadlineForm, clearDeadlineDraft } from '../hooks/useDeadlineForm'
import { useCreateDeadline, useUpdateDeadline } from '../hooks/useDeadlines'
import { useMonitorAccess } from '../hooks/useMonitorAccess'
import { DEADLINE_TYPES, WEEK_OPTIONS } from '../lib/deadlineValidators'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'
import { useAnalytics } from '@/hooks/useAnalytics'
import toast from 'react-hot-toast'

/**
 * Deadline create/edit form.
 * @param {Object} deadline – Pass for edit mode (pre-fills form)
 * @param {Function} onClose – Called after submit or cancel
 */
export default function DeadlineForm({ deadline = null, onClose }) {
  const { t, i18n } = useTranslation('deadlines')
  const { track } = useAnalytics()
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'
  const isEditing = !!deadline

  const { isAdmin, allowedDepartments, canManageDepartment } = useMonitorAccess()
  const createMutation = useCreateDeadline()
  const updateMutation = useUpdateDeadline()

  const [departments, setDepartments] = useState([])
  const [semesters, setSemesters] = useState([])
  const [subjects, setSubjects] = useState([])
  const [isUploadingFile, setIsUploadingFile] = useState(false)
  const user = useAuthStore(s => s.user)

  const form = useDeadlineForm(
    isEditing
      ? {
          department_id: deadline.department_id || '',
          semester_id: deadline.semester_id || '',
          subject_id: deadline.subject_id || '',
          subject_name_override: deadline.subject_name_override || '',
          title: deadline.title || '',
          description: deadline.description || '',
          type: deadline.type || 'quiz',
          due_date: deadline.due_date || '',
          due_time: deadline.due_time || '',
          due_week: deadline.due_week || '',
          location: deadline.location || '',
          reference_url: deadline.reference_url || '',
          phase_two_date: deadline.phase_two_date || '',
          phase_two_time: deadline.phase_two_time || '',
          is_confirmed: deadline.is_confirmed || false,
        }
      : undefined
  )

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form

  const watchDepartment = watch('department_id')
  const watchSemester = watch('semester_id')
  const watchType = watch('type')

  // Fetch departments
  useEffect(() => {
    supabase
      .from('departments')
      .select('id, name')
      .then(({ data }) => {
        if (data) {
          // Filter by allowed departments for monitors
          if (!isAdmin && allowedDepartments.length > 0) {
            setDepartments(data.filter(d => allowedDepartments.includes(d.id)))
          } else {
            setDepartments(data)
          }
        }
      })
  }, [isAdmin, allowedDepartments])

  // Fetch semesters when department changes
  useEffect(() => {
    if (!watchDepartment) return
    supabase
      .from('semesters')
      .select('id, name, number')
      .eq('department_id', watchDepartment)
      .order('number')
      .then(({ data }) => setSemesters(data || []))
  }, [watchDepartment])

  // Fetch subjects when semester changes
  useEffect(() => {
    if (!watchSemester) return
    supabase
      .from('subjects')
      .select('id, name')
      .eq('semester_id', watchSemester)
      .order('name')
      .then(({ data }) => setSubjects(data || []))
  }, [watchSemester])

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file || !user) return
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t('form.file_too_large', 'File must be smaller than 5MB'))
      return
    }
    
    setIsUploadingFile(true)
    try {
      const ext = file.name.split('.').pop()
      const fileName = `deadline_${Date.now()}.${ext}`
      const filePath = `${user.id}/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('deadlines') // Dedicated bucket for PDFs/Docs
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('deadlines')
        .getPublicUrl(filePath)

      setValue('reference_url', publicUrl, { shouldValidate: true })
      toast.success(t('form.file_uploaded', 'File uploaded successfully!'))
    } catch (err) {
      console.error('[FileUpload]', err)
      toast.error(t('form.file_upload_error', 'Failed to upload file'))
    } finally {
      setIsUploadingFile(false)
    }
  }

  const onSubmit = async (formData) => {
    try {
      if (isEditing) {
        await updateMutation.mutateAsync({ id: deadline.id, ...formData })
        track('monitor_deadline_updated', { entity_id: deadline.id })
        toast.success(t('monitor.updated_success'))
      } else {
        await createMutation.mutateAsync(formData)
        track('monitor_deadline_created')
        toast.success(t('monitor.created_success'))
      }
      clearDeadlineDraft()
      onClose?.()
    } catch (err) {
      console.error('[DeadlineForm] Error:', err)
      toast.error(t('monitor.error_generic'))
    }
  }

  const inputClass = `w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500/10 transition-all ${fontClass}`
  const labelClass = `block text-xs font-bold text-white/50 mb-1.5 uppercase tracking-wider ${fontClass}`
  const errorClass = `mt-1 text-xs text-red-400 ${fontClass}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`${fontClass}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="text-lg font-black text-white">
          {isEditing ? t('edit') : t('add')}
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded-xl hover:bg-white/5 transition-colors"
        >
          <X size={18} className="text-white/40" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Department */}
          <div>
            <label className={labelClass}>{t('form.department')}</label>
            <select {...register('department_id')} className={inputClass}>
            <option value="">{t('form.select_department')}</option>
            {departments.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          {errors.department_id && <p className={errorClass}>{t('validation.department_required')}</p>}
        </div>

        {/* Semester */}
        <div>
          <label className={labelClass}>{t('form.semester')}</label>
          <select {...register('semester_id')} className={inputClass} disabled={!watchDepartment}>
            <option value="">{t('form.select_semester')}</option>
            {semesters.map(s => (
              <option key={s.id} value={s.id}>{s.name || `Semester ${s.number}`}</option>
            ))}
          </select>
          {errors.semester_id && <p className={errorClass}>{t('validation.semester_required')}</p>}
        </div>

        {/* Subject select + custom name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>{t('form.subject')}</label>
            <select {...register('subject_id')} className={inputClass} disabled={!watchSemester}>
              <option value="">{t('form.select_subject')}</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>{t('form.subject_custom')}</label>
            <input
              {...register('subject_name_override')}
              className={inputClass}
              placeholder={t('form.or_type_custom')}
            />
          </div>
        </div>
        {errors.subject_id && <p className={errorClass}>{t('validation.subject_required')}</p>}

        {/* Title */}
        <div>
          <label className={labelClass}>{t('form.title')}</label>
          <input
            {...register('title')}
            className={inputClass}
            placeholder={t('form.title_placeholder')}
          />
          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        {/* Type pills */}
        <div>
          <label className={labelClass}>{t('form.type')}</label>
          <div className="flex flex-wrap gap-2">
            {DEADLINE_TYPES.map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setValue('type', type, { shouldValidate: true })}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                  watchType === type
                    ? 'bg-accent-500/20 text-accent-300 border-accent-500/30 shadow-[0_0_12px_rgba(139,92,246,0.1)]'
                    : 'bg-white/[0.03] text-white/40 border-white/5 hover:bg-white/[0.06] hover:text-white/60'
                }`}
              >
                {t(`types.${type}`)}
              </button>
            ))}
          </div>
          {errors.type && <p className={errorClass}>{errors.type.message}</p>}
        </div>

        {/* Date / Week scheduling */}
        {watchType === 'quiz' ? (
          /* Week-based scheduling for quizzes */
          <div>
            <label className={labelClass}>{t('form.due_week')}</label>
            <div className="flex flex-wrap gap-2">
              {WEEK_OPTIONS.map(week => (
                <button
                  key={week}
                  type="button"
                  onClick={() => {
                    setValue('due_week', week, { shouldValidate: true })
                    // Clear exact date fields when using week scheduling
                    setValue('due_date', '', { shouldValidate: false })
                    setValue('due_time', '', { shouldValidate: false })
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 border ${
                    watch('due_week') === week
                      ? 'bg-violet-500/20 text-violet-300 border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.15)]'
                      : 'bg-white/[0.03] text-white/40 border-white/5 hover:bg-white/[0.06] hover:text-white/60'
                  }`}
                >
                  {t(`weeks.${week}`)}
                </button>
              ))}
            </div>
            {errors.due_date && <p className={errorClass}>{t('validation.week_or_date_required')}</p>}
            {/* Optional: still allow exact date for quizzes */}
            <p className="text-[11px] text-white/20 mt-2 mb-1">{t('form.or_exact_date')}</p>
            <input
              type="date"
              {...register('due_date')}
              onChange={(e) => {
                register('due_date').onChange(e)
                if (e.target.value) {
                  setValue('due_week', '', { shouldValidate: false })
                }
              }}
              className={`${inputClass} [color-scheme:dark]`}
            />
          </div>
        ) : (
          /* Exact date + time for all other types */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>{t('form.due_date')}</label>
              <input
                type="date"
                {...register('due_date')}
                className={`${inputClass} [color-scheme:dark]`}
              />
              {errors.due_date && <p className={errorClass}>{errors.due_date.message}</p>}
            </div>
            <div>
              <label className={labelClass}>{t('form.due_time')}</label>
              <input
                type="time"
                {...register('due_time')}
                className={`${inputClass} [color-scheme:dark]`}
              />
              {errors.due_time && <p className={errorClass}>{errors.due_time.message}</p>}
            </div>
          </div>
        )}

        {/* Phase 2 (Only for Projects) */}
        {watchType === 'project' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="col-span-full">
              <h4 className="text-xs font-bold text-accent-400 mb-1">{t('form.phase_two', 'Phase 2 (Optional)')}</h4>
              <p className="text-[10px] text-white/40 mb-3">{t('form.phase_two_desc', 'Add a second deadline phase for this project')}</p>
            </div>
            <div>
              <label className={labelClass}>{t('form.phase_two_date', 'Phase 2 Date')}</label>
              <input
                type="date"
                {...register('phase_two_date')}
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div>
              <label className={labelClass}>{t('form.phase_two_time', 'Phase 2 Time')}</label>
              <input
                type="time"
                {...register('phase_two_time')}
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
          </div>
        )}

        {/* Location */}
        <div>
          <label className={labelClass}>{t('form.location')}</label>
          <input
            {...register('location')}
            className={inputClass}
            placeholder={t('form.location_placeholder')}
          />
        </div>

        {/* Reference URL / PDF Dropzone */}
        <div>
          <label className={labelClass}>{t('form.reference_url', 'Reference Link / PDF')}</label>
          <div className="relative">
            <input
              {...register('reference_url')}
              className={`${inputClass} pr-12`}
              placeholder={t('form.reference_url_placeholder', 'https://... or click to upload PDF')}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <label className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors text-white/50 hover:text-white">
                {isUploadingFile ? <Loader2 size={16} className="animate-spin" /> : <UploadCloud size={16} />}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg"
                  className="hidden"
                  onChange={handleFileUpload}
                  disabled={isUploadingFile}
                />
              </label>
            </div>
          </div>
          {errors.reference_url && <p className={errorClass}>{errors.reference_url.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>{t('form.description')}</label>
          <textarea
            {...register('description')}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder={t('form.description_placeholder')}
          />
          {errors.description && <p className={errorClass}>{errors.description.message}</p>}
        </div>

        {/* Confirmed toggle */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
          <div>
            <p className="text-sm font-bold text-white">{t('form.is_confirmed')}</p>
            <p className="text-xs text-white/30">{t('confirmed_badge')}</p>
          </div>
          <button
            type="button"
            onClick={() => setValue('is_confirmed', !watch('is_confirmed'), { shouldValidate: true })}
            className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
              watch('is_confirmed')
                ? 'bg-emerald-500/50 border border-emerald-500/50'
                : 'bg-white/10 border border-white/10'
            }`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              className={`w-5 h-5 rounded-full bg-white shadow-md ${
                watch('is_confirmed') ? 'ml-6' : 'ml-1'
              }`}
            />
          </button>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-4 mt-2 border-t border-white/5">
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting || createMutation.isPending || updateMutation.isPending}
            className="flex-1 h-12 rounded-2xl bg-accent-500 text-white font-bold text-sm transition-all hover:bg-accent-600 shadow-[0_4px_20px_rgba(139,92,246,0.3)] border border-white/10 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {(isSubmitting || createMutation.isPending || updateMutation.isPending) ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Check size={16} />
            )}
            {t('save')}
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="h-12 px-6 rounded-2xl bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:bg-white/10 transition-all"
          >
            {t('cancel')}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

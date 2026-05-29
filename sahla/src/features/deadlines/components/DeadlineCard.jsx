// ============================================
// Sahla — DeadlineCard Component
// Single deadline card with status badge, countdown, reactions
// ============================================

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, CheckCircle2, AlertTriangle } from 'lucide-react'
import DeadlineCountdown from './DeadlineCountdown'
import DeadlineReaction from './DeadlineReaction'
import { useAnalytics } from '@/hooks/useAnalytics'

/** Status → visual config mapping */
const STATUS_CONFIG = {
  overdue: {
    border: 'border-red-500/40',
    badge: 'bg-red-500/20 text-red-400 border-red-500/30',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.08)]',
    icon: '🔴',
  },
  today: {
    border: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.08)]',
    icon: '🟠',
  },
  tomorrow: {
    border: 'border-yellow-400/30',
    badge: 'bg-yellow-400/15 text-yellow-300 border-yellow-400/25',
    glow: '',
    icon: '🟡',
  },
  upcoming: {
    border: 'border-white/10',
    badge: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    glow: '',
    icon: '🔵',
  },
  done: {
    border: 'border-emerald-500/20 opacity-60',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    glow: '',
    icon: '🟢',
  },
}

/** Deadline type → pill config */
const TYPE_COLORS = {
  exam: 'bg-red-500/10 text-red-400 border-red-500/20',
  quiz: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  assignment: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  project: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  lab: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  revision: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  other: 'bg-white/5 text-white/50 border-white/10',
}

export default function DeadlineCard({ deadline, index = 0 }) {
  const { t, i18n } = useTranslation('deadlines')
  const { track } = useAnalytics()

  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const config = STATUS_CONFIG[deadline.status] || STATUS_CONFIG.upcoming
  const typeColor = TYPE_COLORS[deadline.type] || TYPE_COLORS.other
  const isDone = deadline.status === 'done'

  const subjectName = deadline.subject_name_override || deadline.subject?.name || ''

  // Determine if this is a week-based quiz
  const isWeekBased = deadline.type === 'quiz' && !!deadline.due_week

  const dueDate = deadline.due_date ? new Date(deadline.due_date) : null
  const formattedDate = dueDate
    ? dueDate.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    : null
  const formattedTime = deadline.due_time
    ? new Date(`2000-01-01T${deadline.due_time}`).toLocaleTimeString(isRtl ? 'ar-EG' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`glass-tier-1 ${config.border} ${config.glow} p-5 transition-all duration-300 hover:bg-white/[0.08] group ${fontClass}`}
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={() => track('deadline_viewed', { entity_id: deadline.id })}
    >
      {/* Header row: status badge + type pill + confirmed */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          {/* Status badge */}
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${config.badge}`}>
            <span>{config.icon}</span>
            {t(`status.${deadline.status}`)}
          </span>

          {/* Type pill */}
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${typeColor}`}>
            {t(`types.${deadline.type}`)}
          </span>

          {/* Confirmed badge */}
          {deadline.is_confirmed && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 size={11} />
              {t('confirmed_badge')}
            </span>
          )}
        </div>

        {/* Countdown (today only) */}
        <DeadlineCountdown
          dueDate={deadline.due_date}
          dueTime={deadline.due_time}
          status={deadline.status}
        />
      </div>

      {/* Subject + Title */}
      <div className={`mb-2 ${isDone ? 'line-through opacity-50' : ''}`}>
        {subjectName && (
          <p className="text-white/40 text-xs font-medium mb-0.5">{subjectName}</p>
        )}
        <h3 className="text-white font-bold text-base leading-tight">{deadline.title}</h3>
      </div>

      {/* Description */}
      {deadline.description && (
        <p className="text-white/40 text-xs mb-3 leading-relaxed line-clamp-2">
          {deadline.description}
        </p>
      )}

      {/* Meta row: location + date/time or week */}
      <div className="flex items-center gap-4 text-white/40 text-xs flex-wrap">
        {deadline.location && (
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {deadline.location}
          </span>
        )}
        {isWeekBased ? (
          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1 w-fit px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15 text-[11px] font-bold">
              <Calendar size={12} />
              {t(`weeks.${deadline.due_week}`)}
            </span>
            <div className="relative mt-1 group-hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-accent-500 rounded-full" />
              <p className="text-[10px] text-accent-300 font-black italic tracking-tight pl-2 leading-tight">
                "Mesh 3arfeen sekshanak emta bas akeed el esbo3 da.. <span className="text-white underline decoration-accent-500/50 underline-offset-2">8om zaker!</span> 😉"
              </p>
            </div>
          </div>
        ) : (
          <>
            {formattedDate && (
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {formattedDate}
              </span>
            )}
            {formattedTime && (
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {formattedTime}
              </span>
            )}
          </>
        )}

        {/* Phase Two info */}
        {deadline.type === 'project' && deadline.phase_two_date && (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/15 text-[11px] font-bold">
            <span className="opacity-50">PH2:</span>
            <span>{new Date(deadline.phase_two_date).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        )}

        {/* Reference Link / PDF */}
        {deadline.reference_url && (
          <a
            href={deadline.reference_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-accent-400 hover:bg-white/10 hover:border-accent-500/30 transition-all ml-auto group/link active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] font-black uppercase tracking-widest">{deadline.reference_url.includes('storage.googleapis.com') ? 'View PDF' : 'Open Link'}</span>
            <AlertTriangle size={12} className="group-hover/link:animate-pulse" />
          </a>
        )}
      </div>

      {/* Reactions */}
      <DeadlineReaction deadline={deadline} />
    </motion.div>
  )
}

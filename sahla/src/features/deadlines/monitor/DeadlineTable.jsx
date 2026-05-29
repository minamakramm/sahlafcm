// ============================================
// Sahla — DeadlineTable Component (Monitor)
// Table view of monitor's deadlines with actions
// ============================================

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Pencil, Trash2, CheckCircle, History, Calendar } from 'lucide-react'

const STATUS_CONFIG = {
  overdue: 'bg-red-500/15 text-red-400 border-red-500/25',
  today: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  tomorrow: 'bg-yellow-400/12 text-yellow-300 border-yellow-400/20',
  upcoming: 'bg-blue-500/12 text-blue-400 border-blue-500/20',
  done: 'bg-emerald-500/12 text-emerald-400 border-emerald-500/20',
}

const TYPE_CONFIG = {
  exam: 'bg-red-500/10 text-red-400 border-red-500/15',
  quiz: 'bg-violet-500/10 text-violet-400 border-violet-500/15',
  assignment: 'bg-blue-500/10 text-blue-400 border-blue-500/15',
  project: 'bg-teal-500/10 text-teal-400 border-teal-500/15',
  lab: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/15',
  revision: 'bg-amber-500/10 text-amber-400 border-amber-500/15',
  other: 'bg-white/5 text-white/40 border-white/10',
}

export default function DeadlineTable({ deadlines, onEdit, onDelete, onMarkDone, onViewHistory }) {
  const { t, i18n } = useTranslation('deadlines')
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  if (!deadlines || deadlines.length === 0) {
    return (
      <div className={`glass-tier-1 p-8 text-center ${fontClass}`}>
        <Calendar size={32} className="mx-auto text-white/20 mb-3" />
        <p className="text-white/30 text-sm">{t('no_deadlines')}</p>
      </div>
    )
  }

  return (
    <div className={`styled-table-wrapper ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>{t('subject_col')}</th>
            <th>{t('title_col')}</th>
            <th>{t('type_col')}</th>
            <th>{t('due_date_col')}</th>
            <th>{t('monitor_col', 'Monitor')}</th>
            <th>{t('status_col')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((deadline, idx) => {
            const isWeekBased = deadline.type === 'quiz' && !!deadline.due_week
            const dueDate = deadline.due_date ? new Date(deadline.due_date) : null
            const formattedDate = dueDate
              ? dueDate.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              : null
            const flagCount = (deadline.reactions || []).filter(r => r.type === 'flagged').length

            return (
              <motion.tr
                key={deadline.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.03 }}
                className={deadline.status === 'done' ? 'opacity-50' : ''}
              >
                <td>
                  <span className="text-white/60 text-sm font-medium">
                    {deadline.subject_name_override || '—'}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${deadline.status === 'done' ? 'line-through' : ''}`}>
                      {deadline.title}
                    </span>
                    {deadline.is_confirmed && (
                      <span className="text-[9px] text-emerald-400 font-black">✓</span>
                    )}
                    {flagCount > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-400 text-[9px] font-bold border border-red-500/20">
                        ⚑ {flagCount}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${TYPE_CONFIG[deadline.type] || TYPE_CONFIG.other}`}>
                    {t(`types.${deadline.type}`)}
                  </span>
                </td>
                <td>
                  {isWeekBased ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15 text-[10px] font-bold">
                      {t(`weeks.${deadline.due_week}`)}
                    </span>
                  ) : (
                    <>
                      {formattedDate && (
                        <span className="text-white/70 text-sm tabular-nums">{formattedDate}</span>
                      )}
                      {deadline.due_time && (
                        <span className="text-white/30 text-xs ml-1.5">{deadline.due_time}</span>
                      )}
                    </>
                  )}
                </td>
                <td>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-tighter truncate max-w-[80px] block">
                    {deadline.created_by_profile?.full_name || 'System'}
                  </span>
                </td>
                <td>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${STATUS_CONFIG[deadline.status] || STATUS_CONFIG.upcoming}`}>
                    {t(`status.${deadline.status}`)}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onEdit?.(deadline)}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-white/30 hover:text-blue-400 transition-all"
                      title={t('edit')}
                    >
                      <Pencil size={14} />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDelete?.(deadline)}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-white/30 hover:text-red-400 transition-all"
                      title={t('delete')}
                    >
                      <Trash2 size={14} />
                    </motion.button>
                    {deadline.status !== 'done' && (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onMarkDone?.(deadline.id)}
                        className="p-1.5 rounded-lg hover:bg-white/5 text-white/30 hover:text-emerald-400 transition-all"
                        title={t('monitor.mark_done')}
                      >
                        <CheckCircle size={14} />
                      </motion.button>
                    )}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onViewHistory?.(deadline.id)}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-white/30 hover:text-accent-400 transition-all"
                      title={t('history')}
                    >
                      <History size={14} />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

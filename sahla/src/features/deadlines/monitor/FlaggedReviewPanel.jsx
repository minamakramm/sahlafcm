// ============================================
// Sahla — FlaggedReviewPanel Component (Monitor)
// Review student flag reports
// ============================================

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X, Check, Flag } from 'lucide-react'
import toast from 'react-hot-toast'

/**
 * Collapsible panel showing deadlines flagged by students.
 * @param {Array} flaggedDeadlines – Deadlines with at least one 'flagged' reaction
 * @param {Function} onDismiss – Dismiss a flag (delete the reaction)
 * @param {Function} onEdit – Open edit form for the deadline
 */
export default function FlaggedReviewPanel({ flaggedDeadlines = [], onDismiss, onEdit }) {
  const { t, i18n } = useTranslation('deadlines')
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  if (flaggedDeadlines.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-tier-1 border-red-500/20 p-5 ${fontClass}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
          <AlertTriangle size={14} className="text-red-400" />
        </div>
        <h3 className="text-sm font-black text-red-400 uppercase tracking-wider">
          {t('monitor.review_flags')}
        </h3>
        <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[11px] font-bold border border-red-500/20">
          {flaggedDeadlines.length}
        </span>
      </div>

      <div className="space-y-3">
        {flaggedDeadlines.map((deadline) => {
          const flags = (deadline.reactions || []).filter(r => r.type === 'flagged')
          const reasonCounts = flags.reduce((acc, f) => {
            acc[f.flag_reason] = (acc[f.flag_reason] || 0) + 1
            return acc
          }, {})

          return (
            <motion.div
              key={deadline.id}
              layout
              className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
            >
              <Flag size={14} className="text-red-400/60 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{deadline.title}</p>
                <p className="text-xs text-white/30">
                  {deadline.subject_name_override || ''} · {t(`types.${deadline.type}`)}
                </p>
                {/* Flag reasons breakdown */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {Object.entries(reasonCounts).map(([reason, count]) => (
                    <span
                      key={reason}
                      className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20"
                    >
                      {t(`reactions.flag_reason.${reason}`)} ({count})
                    </span>
                  ))}
                </div>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onEdit?.(deadline)}
                  className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-all"
                  title={t('edit')}
                >
                  <Check size={12} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onDismiss?.(deadline.id)}
                  className="p-2 rounded-lg bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 transition-all"
                  title={t('monitor.dismiss_flag')}
                >
                  <X size={12} />
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

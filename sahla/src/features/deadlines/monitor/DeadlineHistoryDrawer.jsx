// ============================================
// Sahla — DeadlineHistoryDrawer Component (Monitor)
// Audit trail drawer per deadline
// ============================================

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X, History, GitCommitHorizontal } from 'lucide-react'
import { useDeadlineHistory } from '../hooks/useDeadlines'

export default function DeadlineHistoryDrawer({ deadlineId, isOpen, onClose }) {
  const { t, i18n } = useTranslation('deadlines')
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const { data: history = [], isLoading } = useDeadlineHistory(isOpen ? deadlineId : null)

  const changeTypeLabels = {
    created: { text: 'Created', color: 'text-emerald-400' },
    updated: { text: 'Updated', color: 'text-blue-400' },
    deleted: { text: 'Deleted', color: 'text-red-400' },
    status_changed: { text: 'Status Changed', color: 'text-amber-400' },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRtl ? -400 : 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isRtl ? -400 : 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} z-[9999] h-full w-full max-w-md bg-[#0f0e17]/95 backdrop-blur-3xl shadow-2xl border-l border-white/10 overflow-y-auto ${fontClass}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="p-4 pt-20 pb-28 md:p-6 md:pb-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History size={18} className="text-accent-400" />
                  <h2 className="text-lg font-black text-white">{t('history')}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <X size={18} className="text-white/40" />
                </button>
              </div>

              {/* Timeline */}
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-3">
                      <div className="skeleton w-3 h-3 rounded-full mt-1 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="skeleton h-4 w-24 rounded" />
                        <div className="skeleton h-3 w-full rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : history.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-white/30 text-sm">{t('history_empty')}</p>
                </div>
              ) : (
                <div className="relative">
                  {/* Vertical line */}
                  <div className={`absolute top-0 bottom-0 w-px bg-white/10 ${isRtl ? 'right-[7px]' : 'left-[7px]'}`} />

                  <div className="space-y-6">
                    {history.map((entry, idx) => {
                      const config = changeTypeLabels[entry.change_type] || changeTypeLabels.updated
                      const date = new Date(entry.changed_at)
                      const formattedDate = date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })

                      return (
                        <motion.div
                          key={entry.id}
                          initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className={`flex gap-3 ${isRtl ? 'pr-0' : 'pl-0'}`}
                        >
                          {/* Dot */}
                          <div className={`w-[15px] h-[15px] rounded-full border-2 border-white/20 bg-surface-dark shrink-0 mt-0.5 z-10 ${
                            entry.change_type === 'created' ? 'border-emerald-500/50 bg-emerald-500/20' :
                            entry.change_type === 'deleted' ? 'border-red-500/50 bg-red-500/20' :
                            'border-blue-500/50 bg-blue-500/20'
                          }`} />

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs font-black uppercase tracking-wider ${config.color}`}>
                                {config.text}
                              </span>
                              <span className="text-[10px] text-white/20">{formattedDate}</span>
                            </div>
                            {entry.changed_by_profile && (
                              <p className="text-xs text-white/40 mb-1">
                                by {entry.changed_by_profile.full_name || 'Unknown'}
                              </p>
                            )}
                            {/* Show changed fields for updates */}
                            {entry.change_type === 'updated' && entry.old_values && entry.new_values && (
                              <div className="glass-tier-1 p-3 mt-2 text-[11px] space-y-1 rounded-xl">
                                {Object.keys(entry.new_values).map(key => {
                                  if (['updated_at', 'updated_by', 'created_at', 'created_by', 'id'].includes(key)) return null
                                  if (JSON.stringify(entry.old_values[key]) === JSON.stringify(entry.new_values[key])) return null
                                  return (
                                    <div key={key} className="flex items-start gap-1">
                                      <span className="text-white/30 font-mono">{key}:</span>
                                      <span className="text-red-400/60 line-through break-all">{String(entry.old_values[key] ?? '-')}</span>
                                      <span className="text-white/10">→</span>
                                      <span className="text-emerald-400 break-all">{String(entry.new_values[key] ?? '-')}</span>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

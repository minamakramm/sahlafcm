// ============================================
// Sahla — DeadlineReaction Component
// Acknowledge / Flag buttons for student interaction
// ============================================

import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Flag, ChevronDown, Send } from 'lucide-react'
import { useDeadlineReaction } from '../hooks/useDeadlines'
import { useAuthStore } from '@/stores/authStore'
import { useAnalytics } from '@/hooks/useAnalytics'
import { FLAG_REASONS } from '../lib/deadlineValidators'
import toast from 'react-hot-toast'

export default function DeadlineReaction({ deadline }) {
  const { t, i18n } = useTranslation('deadlines')
  const { track } = useAnalytics()
  const user = useAuthStore((s) => s.user)
  const reactionMutation = useDeadlineReaction()

  const [showFlagForm, setShowFlagForm] = useState(false)
  const [flagReason, setFlagReason] = useState('wrong_date')
  const [flagNote, setFlagNote] = useState('')

  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const reactions = deadline.reactions || []
  const myReaction = reactions.find(r => r.user_id === user?.id)
  const isAcknowledged = myReaction?.type === 'acknowledged'
  const isFlagged = myReaction?.type === 'flagged'
  const acknowledgedCount = reactions.filter(r => r.type === 'acknowledged').length
  const flaggedCount = reactions.filter(r => r.type === 'flagged').length

  const handleAcknowledge = async () => {
    if (!user) return toast.error('Login required')
    try {
      await reactionMutation.mutateAsync({
        deadlineId: deadline.id,
        type: 'acknowledged',
      })
      track('deadline_acknowledged', { entity_id: deadline.id })
    } catch (err) {
      toast.error(t('monitor.error_generic'))
    }
  }

  const handleFlag = async () => {
    if (!user) return toast.error('Login required')
    try {
      await reactionMutation.mutateAsync({
        deadlineId: deadline.id,
        type: 'flagged',
        flag_reason: flagReason,
      })
      track('deadline_flagged', { entity_id: deadline.id, metadata: { reason: flagReason } })
      setShowFlagForm(false)
      setFlagNote('')
    } catch (err) {
      toast.error(t('monitor.error_generic'))
    }
  }

  return (
    <div className={`flex flex-col gap-2 mt-3 pt-3 border-t border-white/5 ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Acknowledge button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAcknowledge}
          disabled={reactionMutation.isPending}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            isAcknowledged
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/80'
          }`}
        >
          <Check size={13} />
          <span>{t('reactions.acknowledge')}</span>
          {acknowledgedCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/10 text-[10px]">
              {acknowledgedCount}
            </span>
          )}
        </motion.button>

        {/* Flag button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => isFlagged ? null : setShowFlagForm(!showFlagForm)}
          disabled={isFlagged}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            isFlagged
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-white/5 text-white/50 border border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20'
          }`}
        >
          <Flag size={13} />
          <span>{isFlagged ? t('reactions.flag') : t('reactions.flag')}</span>
          {flaggedCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/10 text-[10px]">
              {flaggedCount}
            </span>
          )}
          {!isFlagged && (
            <ChevronDown size={11} className={`transition-transform ${showFlagForm ? 'rotate-180' : ''}`} />
          )}
        </motion.button>
      </div>

      {/* Flag form */}
      <AnimatePresence>
        {showFlagForm && !isFlagged && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {FLAG_REASONS.map(reason => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setFlagReason(reason)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                      flagReason === reason
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {t(`reactions.flag_reason.${reason}`)}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={flagNote}
                  onChange={(e) => setFlagNote(e.target.value)}
                  placeholder={t('reactions.flag_note_placeholder')}
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:border-red-500/30 focus:outline-none"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleFlag}
                  disabled={reactionMutation.isPending}
                  className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all"
                >
                  <Send size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

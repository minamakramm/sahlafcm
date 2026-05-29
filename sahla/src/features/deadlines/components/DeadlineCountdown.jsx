// ============================================
// Sahla — DeadlineCountdown Component
// Live countdown timer per deadline card
// ============================================

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Clock } from 'lucide-react'

/**
 * Live countdown to a deadline's due_date + due_time.
 * Only renders for 'today' status deadlines.
 */
export default function DeadlineCountdown({ dueDate, dueTime, status }) {
  const { t } = useTranslation('deadlines')
  const [remaining, setRemaining] = useState('')
  const [isOverdue, setIsOverdue] = useState(false)

  useEffect(() => {
    if (status !== 'today') return

    function computeRemaining() {
      const now = new Date()
      let target

      if (dueTime) {
        const [hours, minutes] = dueTime.split(':').map(Number)
        target = new Date(dueDate)
        target.setHours(hours, minutes, 0, 0)
      } else {
        // End of today
        target = new Date(dueDate)
        target.setHours(23, 59, 59, 0)
      }

      const diff = target - now
      if (diff <= 0) {
        setIsOverdue(true)
        setRemaining('')
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((diff % (1000 * 60)) / 1000)

      const parts = []
      if (hours > 0) parts.push(`${hours}h`)
      if (mins > 0) parts.push(`${mins}m`)
      parts.push(`${secs}s`)

      setRemaining(parts.join(' '))
      setIsOverdue(false)
    }

    computeRemaining()
    const interval = setInterval(computeRemaining, 1000)
    return () => clearInterval(interval)
  }, [dueDate, dueTime, status])

  if (status !== 'today') return null

  if (isOverdue) {
    return (
      <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold animate-pulse">
        <Clock size={13} />
        <span>{t('status.overdue')}</span>
      </div>
    )
  }

  if (!remaining) return null

  return (
    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold tabular-nums">
      <Clock size={13} className="animate-pulse" />
      <span>{t('countdown', { time: remaining })}</span>
    </div>
  )
}

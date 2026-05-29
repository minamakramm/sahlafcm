// ============================================
// Sahla — DeadlineBoard Component
// Main public board (student view) — grouped, filtered, realtime
// ============================================

import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, ChevronDown, Sparkles } from 'lucide-react'
import DeadlineCard from './DeadlineCard'
import DeadlineFilters from './DeadlineFilters'
import DeadlineSkeleton from './DeadlineSkeleton'
import { useDeadlines } from '../hooks/useDeadlines'
import { useDeadlineRealtime } from '../hooks/useDeadlineRealtime'
import { useAnalytics } from '@/hooks/useAnalytics'

/** Group deadlines by status/time */
function groupDeadlines(deadlines) {
  const groups = {
    overdue: [],
    today: [],
    tomorrow: [],
    this_week: [],
    later: [],
  }

  const now = new Date()
  now.setHours(0, 0, 0, 0)
  // End of week is Saturday (assuming Sunday start)
  const endOfWeek = new Date(now)
  endOfWeek.setDate(now.getDate() + (6 - now.getDay()))
  endOfWeek.setHours(23, 59, 59, 999)

  deadlines.forEach(d => {
    if (d.status === 'done') {
      // Done items go to the latest applicable group or 'later'
      groups.later.push(d)
    } else if (d.status === 'overdue') {
      groups.overdue.push(d)
    } else if (d.status === 'today') {
      groups.today.push(d)
    } else if (d.status === 'tomorrow') {
      groups.tomorrow.push(d)
    } else {
      const dueDate = new Date(d.due_date)
      dueDate.setHours(0, 0, 0, 0)
      if (dueDate <= endOfWeek) {
        groups.this_week.push(d)
      } else {
        groups.later.push(d)
      }
    }
  })

  return groups
}

/** Client-side filter logic */
function filterDeadlines(deadlines, filters) {
  let filtered = [...deadlines]

  if (filters.type && filters.type !== 'all') {
    filtered = filtered.filter(d => d.type === filters.type)
  }

  if (filters.timeGroup && filters.timeGroup !== 'all') {
    switch (filters.timeGroup) {
      case 'today':
        filtered = filtered.filter(d => d.status === 'today')
        break
      case 'this_week': {
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        const endOfWeek = new Date(now)
        endOfWeek.setDate(now.getDate() + (6 - now.getDay()))
        endOfWeek.setHours(23, 59, 59, 999)
        filtered = filtered.filter(d => {
          const dd = new Date(d.due_date)
          return dd <= endOfWeek && d.status !== 'overdue'
        })
        break
      }
      case 'overdue':
        filtered = filtered.filter(d => d.status === 'overdue')
        break
    }
  }

  if (filters.search) {
    const q = filters.search.toLowerCase()
    filtered = filtered.filter(d =>
      d.title?.toLowerCase().includes(q) ||
      d.subject_name_override?.toLowerCase().includes(q) ||
      d.description?.toLowerCase().includes(q) ||
      d.location?.toLowerCase().includes(q)
    )
  }

  return filtered
}

export default function DeadlineBoard() {
  const { t, i18n } = useTranslation('deadlines')
  const { track } = useAnalytics()
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const [filters, setFilters] = useState({
    type: 'all',
    timeGroup: 'all',
    search: '',
  })
  const [collapsedGroups, setCollapsedGroups] = useState({ overdue: true })

  // Fetch deadlines
  const { data: deadlines = [], isLoading, error } = useDeadlines()

  // Subscribe to realtime updates
  useDeadlineRealtime()

  // Apply client-side filters
  const filtered = useMemo(() => filterDeadlines(deadlines, filters), [deadlines, filters])
  const grouped = useMemo(() => groupDeadlines(filtered), [filtered])

  const toggleGroup = (group) => {
    setCollapsedGroups(prev => ({ ...prev, [group]: !prev[group] }))
  }

  const groupOrder = ['overdue', 'today', 'tomorrow', 'this_week', 'later']
  const groupIcons = {
    overdue: '🔴',
    today: '🟠',
    tomorrow: '🟡',
    this_week: '📅',
    later: '🔵',
  }

  const totalCount = filtered.length

  return (
    <>
      <Helmet>
        <title>{t('title')} — Sahla</title>
        <meta name="description" content={t('subtitle')} />
      </Helmet>

      <div className={`container-fluid py-8 ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-2xl bg-accent-500/10 border border-accent-500/20">
              <CalendarDays size={22} className="text-accent-400" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">{t('title')}</h1>
              <p className="text-white/40 text-sm">{t('subtitle')}</p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <DeadlineFilters filters={filters} onFilterChange={setFilters} />
        </motion.div>

        {/* Content */}
        {isLoading ? (
          <DeadlineSkeleton count={4} />
        ) : error ? (
          <div className="glass-tier-1 p-8 text-center">
            <p className="text-red-400 font-bold">{t('monitor.error_generic')}</p>
          </div>
        ) : totalCount === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-tier-2 glass-highlight p-12 text-center"
          >
            <Sparkles size={48} className="mx-auto text-accent-400/50 mb-4" />
            <h2 className="text-xl font-black text-white mb-2">{t('no_deadlines')}</h2>
            <p className="text-white/40 text-sm">{t('no_deadlines_subtitle')}</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {groupOrder.map(groupKey => {
              const items = grouped[groupKey]
              if (!items || items.length === 0) return null
              const isCollapsed = collapsedGroups[groupKey]

              return (
                <motion.div
                  key={groupKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  {/* Group header */}
                  <button
                    onClick={() => toggleGroup(groupKey)}
                    className="flex items-center gap-2 mb-3 w-full text-left group/header"
                  >
                    <span className="text-lg">{groupIcons[groupKey]}</span>
                    <h2 className="text-sm font-black uppercase tracking-widest text-white/60 group-hover/header:text-white/80 transition-colors">
                      {t(`groups.${groupKey}`)}
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-white/30 text-[11px] font-bold">
                      {items.length}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-white/30 transition-transform duration-200 ${isCollapsed ? (isRtl ? 'rotate-90' : '-rotate-90') : ''}`}
                    />
                    <div className="flex-1 h-px bg-white/5 ml-2" />
                  </button>

                  {/* Group items */}
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 overflow-hidden"
                      >
                        {items.map((deadline, idx) => (
                          <DeadlineCard key={deadline.id} deadline={deadline} index={idx} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

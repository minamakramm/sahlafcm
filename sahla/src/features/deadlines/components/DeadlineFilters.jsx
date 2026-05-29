// ============================================
// Sahla — DeadlineFilters Component
// Filter bar for type, status, and time grouping
// ============================================

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import { DEADLINE_TYPES } from '../lib/deadlineValidators'

const TIME_FILTERS = ['all', 'today', 'this_week', 'overdue']

export default function DeadlineFilters({ filters, onFilterChange }) {
  const { t, i18n } = useTranslation('deadlines')
  const isRtl = i18n.language === 'ar'
  const fontClass = isRtl ? 'font-arabic' : 'font-sans'

  const activeType = filters.type || 'all'
  const activeTime = filters.timeGroup || 'all'

  return (
    <div className={`space-y-3 ${fontClass}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Search bar */}
      <div className="relative">
        <Search size={16} className="absolute top-1/2 -translate-y-1/2 text-white/30 ltr:left-4 rtl:right-4" />
        <input
          type="text"
          placeholder={t('search_placeholder')}
          value={filters.search || ''}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3 text-sm text-white placeholder-white/30 focus:border-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500/10 transition-all ${
            isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
          } ${fontClass}`}
        />
      </div>

      {/* Type filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <SlidersHorizontal size={14} className="text-white/30 shrink-0" />
        {['all', ...DEADLINE_TYPES].map(type => (
          <motion.button
            key={type}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange({ ...filters, type })}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
              activeType === type
                ? 'bg-accent-500/20 text-accent-300 border-accent-500/30 shadow-[0_0_12px_rgba(139,92,246,0.1)]'
                : 'bg-white/[0.03] text-white/40 border-white/5 hover:bg-white/[0.06] hover:text-white/60'
            }`}
          >
            {type === 'all' ? t('types.all') : t(`types.${type}`)}
          </motion.button>
        ))}
      </div>

      {/* Time group pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {TIME_FILTERS.map(tf => (
          <motion.button
            key={tf}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange({ ...filters, timeGroup: tf })}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
              activeTime === tf
                ? 'bg-secondary-500/15 text-secondary-300 border-secondary-500/25'
                : 'bg-white/[0.03] text-white/40 border-white/5 hover:bg-white/[0.06] hover:text-white/60'
            }`}
          >
            {tf === 'all' ? t('filter_all') : tf === 'today' ? t('groups.today') : tf === 'this_week' ? t('groups.this_week') : t('groups.overdue')}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAllDepartments } from '../utils/staticData'
import { Badge } from '@/components/ui'

export const DepartmentFilter = ({ activeDepartmentSlug, onSelect }) => {
  const { t, i18n } = useTranslation('common')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const departments = getAllDepartments()

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-4">
      {departments.map((dept) => {
        const isActive = dept.slug === activeDepartmentSlug
        const isDisabled = !dept.isActive

        return (
          <motion.button
            key={dept.slug}
            whileTap={!isDisabled ? { scale: 0.95 } : {}}
            onClick={() => !isDisabled && onSelect(dept.slug)}
            disabled={isDisabled}
            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${fontFamily} ${
              isActive
                ? 'bg-accent-500/20 border border-accent-500/40 text-accent-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                : isDisabled
                ? 'bg-white/[0.01] border border-white/5 text-white/20 cursor-not-allowed'
                : 'bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/20 cursor-pointer shadow-sm'
            }`}
          >
            <span>{i18n.language === 'ar' ? dept.nameAr : dept.name}</span>
            {isDisabled && (
              <Badge variant="warning" className="text-[10px] px-1.5 py-0">
                {t('status.comingSoon', 'Coming Soon')}
              </Badge>
            )}
          </motion.button>
        )
      })}
    </div>
  )
}

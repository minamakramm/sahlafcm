import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, FileText, CheckSquare, PenLine } from 'lucide-react';

export const TabBar = ({ activeTab, onChange, className = '' }) => {
  const { t, i18n } = useTranslation('lectures');
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  const tabs = [
    { id: 'explanation', label: t('tabs.explanation', 'Explanation'), icon: BookOpen },
    { id: 'summary', label: t('tabs.summary', 'Summary'), icon: FileText },
    { id: 'mcq', label: t('tabs.mcq', 'MCQ'), icon: CheckSquare },
    { id: 'written', label: t('tabs.written', 'Written'), icon: PenLine }
  ];

  return (
    <div 
      className={`glass-tier-1 rounded-[16px] p-1 flex items-center overflow-x-auto hide-scrollbar overscroll-x-contain snap-x snap-mandatory scroll-smooth ${className}`}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative flex items-center gap-1.5 xs:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 
              min-w-max text-[0.8rem] sm:text-sm font-medium transition-all duration-300
              snap-center ${fontFamily}
            `}
            style={{ color: isActive ? 'var(--text-brand)' : 'var(--text-tertiary)' }}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 rounded-[12px]"
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  boxShadow: 'var(--shadow-xs)',
                }}
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              />
            )}
            <Icon size={14} className="relative z-10 sm:w-4 sm:h-4" />
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

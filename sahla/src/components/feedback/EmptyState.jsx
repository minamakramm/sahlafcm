import React from 'react';
import { useTranslation } from 'react-i18next';
import { PackageOpen } from 'lucide-react';
import { Button } from '../ui';

export const EmptyState = ({ 
  icon: Icon = PackageOpen, 
  titleKey = 'empty.default.title', 
  defaultTitle = 'No data found',
  descriptionKey = 'empty.default.description',
  defaultDescription = 'There is currently no data to display here.',
  actionLabelKey,
  defaultActionLabel,
  onAction,
  className = ''
}) => {
  const { t, i18n } = useTranslation();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <div className={`glass-tier-1 p-8 rounded-[24px] flex flex-col items-center justify-center text-center max-w-sm mx-auto ${className}`}>
      <div className="w-16 h-16 rounded-full glass-tier-2 flex items-center justify-center mb-4 text-[#a5b4fc]">
        <Icon size={32} />
      </div>
      <h3 className={`text-xl font-semibold text-white mb-2 ${fontFamily}`}>
        {t(titleKey, defaultTitle)}
      </h3>
      <p className={`text-sm text-white/60 mb-6 ${fontFamily}`}>
        {t(descriptionKey, defaultDescription)}
      </p>
      {onAction && actionLabelKey && (
        <Button variant="primary" onClick={onAction} className={fontFamily}>
          {t(actionLabelKey, defaultActionLabel)}
        </Button>
      )}
    </div>
  );
};

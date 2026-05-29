import React from 'react';
import { useTranslation } from 'react-i18next';

export const Divider = ({ label, className = '' }) => {
  const { i18n } = useTranslation();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  if (!label) {
    return <div className={`w-full h-px bg-[rgba(255,255,255,0.07)] ${className}`} />;
  }

  return (
    <div className={`relative flex items-center w-full py-4 ${className}`}>
      <div className="flex-grow h-px bg-[rgba(255,255,255,0.07)]" />
      <span className={`px-4 text-xs font-medium text-white/50 bg-transparent ${fontFamily}`}>
        {label}
      </span>
      <div className="flex-grow h-px bg-[rgba(255,255,255,0.07)]" />
    </div>
  );
};

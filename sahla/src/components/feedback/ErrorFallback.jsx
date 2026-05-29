import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const { t, i18n } = useTranslation();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${fontFamily}`}>
      <div className="glass-tier-3 p-8 max-w-md w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[rgba(239,68,68,0.15)] flex items-center justify-center mb-6 text-[#fca5a5]">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {t('error.title', 'Something went wrong')}
        </h2>
        <p className="text-white/60 mb-6 text-sm">
          {error?.message || t('error.description', 'An unexpected error occurred. Please try again.')}
        </p>
        <Button variant="danger" onClick={resetErrorBoundary} className="w-full">
          {t('error.retry', 'Try Again')}
        </Button>
      </div>
    </div>
  );
};

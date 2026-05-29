import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff } from 'lucide-react';

export const OfflineBanner = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { t, i18n } = useTranslation();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className={`fixed top-[60px] left-0 right-0 z-40 px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium ${fontFamily}`}
          style={{
            background: 'var(--color-warning-bg)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--color-warning-border)',
            color: 'var(--color-warning-text)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <WifiOff size={16} />
          <span>{t('status.offline', "You're offline — some features may not work.")}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Timer = ({ totalSeconds = 3600, onExpire, isPaused = false }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          if (onExpire) onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeLeft, onExpire]);

  const percentage = (timeLeft / totalSeconds) * 100;
  
  let colorClass = 'text-green-400 stroke-green-400';
  if (percentage <= 20) colorClass = 'text-red-500 stroke-red-500';
  else if (percentage <= 50) colorClass = 'text-amber-400 stroke-amber-400';

  const isPulsing = timeLeft < 60 && timeLeft > 0;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative flex items-center justify-center w-[200px] h-[200px] ${isPulsing ? 'animate-pulse' : ''}`}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r={radius} className="stroke-white/10" strokeWidth="8" fill="transparent" />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            className={colorClass}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </svg>
        <div className="absolute text-3xl font-bold text-white font-sans tracking-widest">
          {minutes}:{seconds}
        </div>
      </div>
      <div className="mt-4 text-sm font-medium text-white/70">
        {t('exam.timer.label', 'Time remaining')}
      </div>
    </div>
  );
};

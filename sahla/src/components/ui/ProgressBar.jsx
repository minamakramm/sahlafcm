import React from 'react';
import { motion } from 'framer-motion';

export const ProgressBar = ({ progress = 0, className = '' }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full h-2 rounded-full glass-tier-1 overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        initial={{ width: 0 }}
        animate={{ width: `${clampedProgress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const Toggle = ({ isToggled, onToggle, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none ${className}`}
      style={{
        background: isToggled ? 'rgba(99,102,241,0.5)' : 'var(--glass-tier-1-bg)',
        border: isToggled ? '1px solid rgba(99,102,241,0.5)' : '1px solid var(--glass-tier-1-border)',
      }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className={`w-5 h-5 rounded-full bg-white shadow-md ${isToggled ? 'ml-6' : 'ml-1'}`}
      />
    </button>
  );
};

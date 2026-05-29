import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * FloatingMenuFab - A premium, liquid-glass floating action button 
 * designed specifically for mobile to solve navigation conflicts.
 */
export const FloatingMenuFab = ({ onClick, isOpen }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div 
      className="lg:hidden fixed bottom-[110px] sm:bottom-[120px] left-6 right-6 z-[500] pointer-events-none flex justify-end"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <motion.button
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={`
          pointer-events-auto h-14 w-14 rounded-2xl flex items-center justify-center
          glass-tier-3 border-accent-500/30 shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.2)]
          relative overflow-hidden group transition-all duration-300
        `}
        aria-label={isOpen ? "Close Menu" : "Toggle Menu"}
      >
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/20 to-accent-400/20 opacity-0 group-active:opacity-100 transition-opacity" />
        
        {/* High-blur Glow Orb behind icon */}
        <div className="absolute inset-0 bg-accent-500/10 blur-xl rounded-full scale-150 pointer-events-none" />
        
        {/* Animated Icon Container */}
        <AnimatePresence mode="wait">
            <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
                {isOpen ? (
                    <X className="text-white w-6 h-6 relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                ) : (
                    <Menu className="text-white w-6 h-6 relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                )}
            </motion.div>
        </AnimatePresence>

        {/* Glossy top highlight */}
        <div className="absolute top-0 inset-x-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </motion.button>
    </div>
  );
};

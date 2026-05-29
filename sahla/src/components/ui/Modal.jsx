import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto px-4 py-8 custom-scrollbar"
          data-lenis-prevent="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] backdrop-blur-md pointer-events-none"
            style={{ background: 'var(--bg-overlay)' }}
          />
          
          {/* Content Wrapper */}
          <div 
            className="w-full max-w-lg mt-[5vh] sm:mt-[10vh] relative z-10 pb-12"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-tier-3 glass-highlight w-full p-6 sm:p-8 relative rounded-[2.5rem]"
              style={{
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

import React, { memo } from 'react';

/**
 * PageWrapper — lightweight wrapper that uses CSS-only opacity transition
 * instead of framer-motion for page transitions.
 * This eliminates the heavy AnimatePresence overhead that was causing
 * layout shifts during scroll and navigation.
 */
const PageWrapperInner = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full animate-fade-in ${className}`}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </div>
  );
};

export const PageWrapper = memo(PageWrapperInner);

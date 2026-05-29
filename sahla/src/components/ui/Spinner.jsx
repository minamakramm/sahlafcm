import React from 'react';

export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4 text-[2px]',
    md: 'w-6 h-6 text-[3px]',
    lg: 'w-8 h-8 text-[4px]'
  };

  return (
    <svg
      className={`animate-spin text-white/20 fill-white ${sizes[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentFill"
      />
    </svg>
  );
};

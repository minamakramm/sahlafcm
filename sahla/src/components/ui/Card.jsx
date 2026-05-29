import React from 'react';

export const Card = ({ children, tier = 'standard', withHighlight = false, className = '', ...props }) => {
  const tiers = {
    subtle: 'glass-tier-1',
    standard: 'glass-tier-2',
    elevated: 'glass-tier-3',
    accent: 'glass-tier-4'
  };

  const highlightClass = withHighlight && ['standard', 'elevated', 'accent'].includes(tier) 
    ? 'glass-highlight' 
    : '';

  return (
    <div className={`${tiers[tier]} ${highlightClass} ${className} p-4`} {...props}>
      {children}
    </div>
  );
};

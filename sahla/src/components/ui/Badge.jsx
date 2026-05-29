import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variantStyles = {
    default: {
      background: 'var(--glass-tier-1-bg)',
      border: '1px solid var(--glass-tier-1-border)',
      color: 'var(--text-primary)',
    },
    success: {
      background: 'var(--color-success-bg)',
      border: '1px solid var(--color-success-border)',
      color: 'var(--color-success-text)',
    },
    warning: {
      background: 'var(--color-warning-bg)',
      border: '1px solid var(--color-warning-border)',
      color: 'var(--color-warning-text)',
    },
    error: {
      background: 'var(--color-danger-bg)',
      border: '1px solid var(--color-danger-border)',
      color: 'var(--color-danger-text)',
    },
    purple: {
      background: 'rgba(168,85,247,0.12)',
      border: '1px solid rgba(168,85,247,0.25)',
      color: 'var(--text-brand)',
    },
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
      style={variantStyles[variant] || variantStyles.default}
    >
      {children}
    </span>
  );
};

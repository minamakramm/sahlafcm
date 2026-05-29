import React from 'react';
import { motion } from 'framer-motion';
import { Spinner } from './Spinner';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  className = '', 
  as: Component = motion.button,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold font-sans transition-all duration-300 outline-none select-none tracking-tight whitespace-nowrap leading-none";
  
  const variants = {
    primary: "bg-[#6366f1] !text-white hover:bg-[#4f46e5] border border-[var(--border-default)]",
    secondary: "bg-secondary-500/10 border border-secondary-500/20 hover:bg-secondary-500/20",
    accent: "bg-gradient-to-r from-indigo-600 to-violet-600 !text-white hover:from-indigo-500 hover:to-violet-500 border border-[var(--border-default)]",
    ghost: "border border-transparent hover:border-[var(--border-default)]",
    danger: "border border-[var(--color-danger-border)]",
    success: "border border-[var(--color-success-border)]",
  };

  // Style objects for token-driven colors that can't be in className
  const variantStyles = {
    primary: { boxShadow: 'var(--shadow-brand)' },
    secondary: { color: 'var(--text-accent)' },
    accent: { boxShadow: 'var(--shadow-brand)' },
    ghost: { color: 'var(--text-tertiary)' },
    danger: { background: 'var(--color-danger-bg)', color: 'var(--color-danger-text)' },
    success: { background: 'var(--color-success-bg)', color: 'var(--color-success-text)' },
  };

  const sizes = {
    sm: "h-[36px] px-4 text-xs rounded-full",
    md: "h-[44px] px-6 text-sm rounded-full",
    lg: "h-[54px] px-8 text-base rounded-full"
  };

  const isMotion = typeof Component !== 'string' && !!Component?.animate;

  return (
    <Component
      {...(isMotion ? { 
        whileTap: { scale: 0.97 },
        whileHover: { y: -1 }
      } : {})}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      style={variantStyles[variant] || {}}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center min-w-[2rem]">
          <Spinner size="sm" />
        </span>
      ) : (
        children
      )}
    </Component>
  );
};

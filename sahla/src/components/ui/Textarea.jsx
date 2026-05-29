import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Textarea = forwardRef(({ className = '', error, dir, ...props }, ref) => {
  const { i18n } = useTranslation();
  const direction = dir || (i18n.language === 'ar' ? 'rtl' : 'ltr');
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <div className="relative w-full" dir={direction}>
      <textarea
        ref={ref}
        className={`w-full min-h-[100px] resize-y rounded-[14px] px-4 py-3 outline-none transition-all duration-200 ${fontFamily} ${className}`}
        style={{
          background: 'var(--bg-elevated)',
          border: error ? '1px solid var(--color-danger-border)' : '1px solid var(--border-default)',
          color: 'var(--text-primary)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = error ? 'var(--color-danger-border)' : 'var(--border-focus)';
          e.target.style.boxShadow = 'var(--focus-ring)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? 'var(--color-danger-border)' : 'var(--border-default)';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
      {error && (
        <p className={`mt-1.5 text-sm ${fontFamily}`} style={{ color: 'var(--color-danger-text)' }}>{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

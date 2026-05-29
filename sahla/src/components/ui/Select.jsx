import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Select = forwardRef(({ className = '', children, placeholder, value, onChange, ...props }, ref) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  
  const isRtl = i18n.language === 'ar';
  const fontFamily = isRtl ? 'font-arabic' : 'font-sans';

  const options = (React.Children.map(children, child => {
    if (!child) return null;
    return { value: child.props.value, label: child.props.children };
  }) || []).filter(Boolean);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    if (onChange) onChange({ target: { value: val, name: props.name } });
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${isOpen ? 'z-[100]' : 'z-30'} ${className} ${fontFamily}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <select ref={ref} value={value} onChange={onChange} className="hidden" {...props}>
        {children}
      </select>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between backdrop-blur-xl rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300"
        style={{
          background: 'var(--glass-bg)',
          border: isOpen ? '1px solid var(--border-focus)' : '1px solid var(--border-default)',
          color: isOpen ? 'var(--text-brand)' : 'var(--text-primary)',
          boxShadow: isOpen ? 'var(--focus-ring)' : 'none',
        }}
      >
        <span className="truncate">{selectedOption?.label || placeholder}</span>
        <ChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: isOpen ? 'var(--text-brand)' : 'var(--text-tertiary)' }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-[110] w-full mt-2 overflow-hidden rounded-2xl ${isRtl ? 'right-0' : 'left-0'}`}
            style={{ 
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar py-2 px-1.5">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className="w-full flex items-center justify-between px-4 py-3 text-[0.825rem] rounded-xl transition-all mb-1"
                  style={{
                    color: value === opt.value ? 'var(--text-brand)' : 'var(--text-secondary)',
                    background: value === opt.value ? 'var(--hover-overlay)' : 'transparent',
                    fontWeight: value === opt.value ? 700 : 400,
                  }}
                  onMouseEnter={(e) => { if (value !== opt.value) e.currentTarget.style.background = 'var(--hover-overlay)' }}
                  onMouseLeave={(e) => { if (value !== opt.value) e.currentTarget.style.background = 'transparent' }}
                >
                  <span>{opt.label}</span>
                  {value === opt.value && <Check size={14} style={{ color: 'var(--text-brand)' }} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Select.displayName = 'Select';

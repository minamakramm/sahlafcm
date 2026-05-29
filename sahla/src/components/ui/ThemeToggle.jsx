import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { useTranslation } from 'react-i18next'

export const ThemeToggle = ({ variant = 'icon' }) => {
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)
  const toggle = useThemeStore((s) => s.toggle)
  const { t } = useTranslation('common')
  const isLight = resolvedTheme === 'light'

  if (variant === 'icon') {
    return (
      <button
        onClick={toggle}
        aria-label={t(isLight ? 'theme.switchDark' : 'theme.switchLight', isLight ? 'Switch to dark mode' : 'Switch to light mode')}
        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--border-default)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--glass-bg-hover)'
          e.currentTarget.style.borderColor = 'var(--border-strong)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--glass-bg)'
          e.currentTarget.style.borderColor = 'var(--border-default)'
        }}
      >
        {isLight
          ? <Moon size={16} style={{ color: 'var(--text-secondary)' }} />
          : <Sun  size={16} style={{ color: 'var(--text-secondary)' }} />
        }
      </button>
    )
  }

  if (variant === 'switch') {
    return (
      <button
        role="switch"
        aria-checked={isLight}
        onClick={toggle}
        aria-label={t('theme.toggle', 'Toggle theme')}
        className="relative w-12 h-6 rounded-full transition-colors duration-200"
        style={{
          background: isLight ? 'var(--color-brand-primary)' : 'var(--border-default)',
        }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 flex items-center justify-center"
          style={{ transform: isLight ? 'translateX(24px)' : 'translateX(0)' }}
        >
          {isLight
            ? <Sun  size={11} style={{ color: 'var(--color-brand-primary)' }} />
            : <Moon size={11} style={{ color: 'var(--text-tertiary)' }} />
          }
        </span>
      </button>
    )
  }

  if (variant === 'menu') {
    const options = [
      { value: 'light',  icon: Sun,     label: t('theme.light', 'Light')  },
      { value: 'dark',   icon: Moon,    label: t('theme.dark', 'Dark')   },
      { value: 'system', icon: Monitor, label: t('theme.system', 'System') },
    ]
    const current = theme ?? 'system'

    return (
      <div
        className="flex gap-1 p-1 rounded-lg"
        style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {options.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            aria-pressed={current === value}
            title={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all duration-150"
            style={{
              background: current === value ? 'var(--bg-elevated)' : 'transparent',
              color: current === value ? 'var(--text-primary)' : 'var(--text-tertiary)',
              boxShadow: current === value ? 'var(--shadow-xs)' : 'none',
            }}
          >
            <Icon size={13} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    )
  }

  return null
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import i18n from '@/lib/i18n'

const getSystemTheme = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

export const useThemeStore = create(
  persist(
    (set, get) => ({
      // State
      theme: null,          // null = follow system, 'light' | 'dark' = explicit
      resolvedTheme: 'dark',// actual applied theme
      language: 'en',

      // Derived getters
      get dir() {
        return get().language === 'ar' ? 'rtl' : 'ltr'
      },

      get fontClass() {
        return get().language === 'ar' ? 'font-arabic' : 'font-sans'
      },

      // Language actions
      setLanguage: (lang) => {
        set({ language: lang })
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
        i18n.changeLanguage(lang)
        localStorage.setItem('sahla-lang', lang)
      },

      toggleLanguage: () => {
        const current = get().language
        get().setLanguage(current === 'en' ? 'ar' : 'en')
      },

      // Theme actions
      setTheme: (theme) => {
        // theme: 'light' | 'dark' | 'system'
        const resolved = theme === 'system' ? getSystemTheme() : theme
        document.documentElement.setAttribute('data-theme', resolved)
        set({
          theme: theme === 'system' ? null : theme,
          resolvedTheme: resolved,
        })
      },

      toggle: () => {
        const next = get().resolvedTheme === 'dark' ? 'light' : 'dark'
        get().setTheme(next)
      },

      /**
       * Initialize theme + language state from persisted storage.
       * Called once at app boot.
       */
      initTheme: () => {
        const savedLang = localStorage.getItem('sahla-lang') || 'en'
        const state = get()

        // Apply language
        state.setLanguage(savedLang)

        // Apply theme — the anti-flash script in index.html already set
        // data-theme before JS loads, so we just sync the store state
        const stored = state.theme
        const resolved = stored ?? getSystemTheme()
        document.documentElement.setAttribute('data-theme', resolved)
        set({ resolvedTheme: resolved })
      },
    }),
    {
      name: 'sahla-theme',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
)

// Watch system preference changes
if (typeof window !== 'undefined') {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const store = useThemeStore.getState()
      if (store.theme === null) {
        const resolved = e.matches ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', resolved)
        useThemeStore.setState({ resolvedTheme: resolved })
      }
    })
}

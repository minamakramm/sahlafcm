import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from '@/app/Providers'
import { Router } from '@/app/Router'
import { ErrorBoundary } from '@/app/ErrorBoundary'
import '@/lib/i18n'
import '@/index.css'

// ─── GSAP: register plugins before any component mounts ───
import '@/lib/gsap'
import { applyReducedMotionMode } from '@/lib/gsap'
applyReducedMotionMode()

// Initialize theme from localStorage before render to avoid flash
const savedLang = localStorage.getItem('sahla-lang') || 'en'
document.documentElement.lang = savedLang
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Providers>
        <Router />
      </Providers>
    </ErrorBoundary>
  </React.StrictMode>
)

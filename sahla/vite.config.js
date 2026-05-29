import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Disable sourcemap in production for smaller bundles
    sourcemap: false,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Minify with esbuild (faster than terser)
    minify: 'esbuild',
    // Enable CSS code splitting — each lazy route gets its own CSS
    cssCodeSplit: true,
    // Preload dynamic imports for faster navigation
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached long-term, ~140KB
          vendor: ['react', 'react-dom'],
          // Router — separate chunk, changes rarely, ~30KB
          router: ['react-router-dom'],
          // Supabase — large, changes rarely, ~100KB
          supabase: ['@supabase/supabase-js'],
          // Firebase + FCM — split for lazy loading
          firebase: ['firebase/app', 'firebase/messaging'],
          // State management — ~40KB
          state: ['zustand', '@tanstack/react-query'],
          // i18n — separate chunk, ~50KB
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Framer motion — heavy (~120KB), used widely but can load after first paint
          motion: ['framer-motion'],
          // GSAP + Lenis — scroll animation engine (~80KB)
          gsap: ['gsap', '@gsap/react', 'lenis'],
          // ─── HEAVY LIBS: split into on-demand chunks ───
          // Mermaid — ~1.5MB! Only used in DiagramBlock (rare)
          mermaid: ['mermaid'],
          // Highlight.js — ~100KB, only used in CodeBlock
          hljs: ['highlight.js'],
          // KaTeX — ~250KB, only used in mathRenderer
          katex: ['katex'],
          // Recharts — ~500KB, only used in admin analytics
          charts: ['recharts'],
          // PDF generation — ~600KB, only used when clicking "Download PDF"
          pdf: ['jspdf', 'html2canvas'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
})


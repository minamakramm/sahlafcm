import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { CodeBlock } from './CodeBlock'
import { ImageBlock } from './ImageBlock'
import { DiagramBlock } from './DiagramBlock'
import { PDFBlock } from './PDFBlock'
import { VideoBlock } from './VideoBlock'
import { replaceEmojisWithHTML } from '../../../utils/iconMap'
import { renderMath } from '../../../utils/mathRenderer'
import { useTranslation } from 'react-i18next'
import { Maximize2, X, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useThemeStore } from '@/stores/themeStore'

// ─── Constants ───────────────────────────────────────────────────────────────

const CALLOUT_CONFIG = {
  'callout-warning': { icon: '⚠️', label: 'Warning' },
  'callout-error':   { icon: '🚨', label: 'Error' },
  'callout-success': { icon: '✅', label: 'Success' },
  'callout-info':    { icon: '💡', label: 'Info' },
}
const DEFAULT_CALLOUT = { icon: '💡', label: 'Info' }

// ─── HTML Processing Pipeline ─────────────────────────────────────────────────

/**
 * Wraps <table> elements in a horizontal-scroll container.
 */
const wrapTables = (html) =>
  html.replace(/<table[\s\S]*?<\/table>/gi, '<div class="styled-table-wrapper">$&</div>')

/**
 * Enhances callout divs with icon + semantic wrapper.
 */
const enhanceCallouts = (html) =>
  html.replace(
    /<div class="callout (callout-[a-z]+)">([\s\S]*?)<\/div>/gi,
    (_, cls, content) => {
      const { icon, label } = CALLOUT_CONFIG[cls] ?? DEFAULT_CALLOUT
      return `<div class="callout ${cls}" role="note" aria-label="${label}">
        <span class="callout-icon" aria-hidden="true">${icon}</span>
        <div class="callout-content">${content}</div>
      </div>`
    }
  )

/**
 * Injects line-number gutters into static .code-block divs.
 */
const injectCodeLineNumbers = (html) =>
  html.replace(/<div class="code-block">([\s\S]*?)<\/div>/gi, (_, inner) => {
    const lines = inner.trim().split('\n')
    const gutter = lines
      .map((_, i) => `<span>${i + 1}</span>`)
      .join('')
    return `<div class="code-block">
      <div class="code-gutter-injected" aria-hidden="true">${gutter}</div>
      <pre><code>${inner}</code></pre>
    </div>`
  })

/**
 * Enhances lecture-img containers with an accessible expand badge.
 */
const injectImageBadges = (html) =>
  html.replace(
    /<div class="lecture-img-container">([\s\S]*?)<\/div>/gi,
    (_, inner) => `<div class="lecture-img-container" role="button" tabindex="0" aria-label="Click to enlarge image">
      ${inner}
      <div class="lecture-img-badge" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
        <span>Enlarge</span>
      </div>
    </div>`
  )

const PIPELINE = [wrapTables, enhanceCallouts, injectCodeLineNumbers, injectImageBadges]

const processHTML = (raw) =>
  PIPELINE.reduce((html, fn) => fn(html), renderMath(replaceEmojisWithHTML(raw)))

// ─── Lightbox ────────────────────────────────────────────────────────────────

const Lightbox = ({ img, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return createPortal(
    <AnimatePresence>
      {img && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={img.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
          onClick={onClose}
        >
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); onClose() }}
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <motion.figure
            initial={{ scale: 0.94, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img.src} alt={img.alt} className="lightbox-image" />
            {img.alt && img.alt !== 'Enlarged Image' && (
              <figcaption className="lightbox-caption">{img.alt}</figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// ─── Error Boundary ───────────────────────────────────────────────────────────

class BlockErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="block-error" role="alert">
          <AlertTriangle size={16} aria-hidden="true" />
          <span>Failed to render block</span>
          {process.env.NODE_ENV === 'development' && (
            <pre className="block-error-detail">{this.state.error.message}</pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}

// ─── Block: Text ─────────────────────────────────────────────────────────────

const TextBlock = ({ block, index, isAr, isDark }) => {
  const [lightboxImg, setLightboxImg] = useState(null)
  const closeLightbox = useCallback(() => setLightboxImg(null), [])

  const rawHTML = isAr && block.content.bodyAr
    ? block.content.bodyAr
    : block.content.body

  // Memoize the expensive HTML pipeline
  const processedHTML = useMemo(() => processHTML(rawHTML), [rawHTML])

  const handleClick = useCallback((e) => {
    const container = e.target.closest('.lecture-img-container')
    const img = container
      ? container.querySelector('img.lecture-img, img')
      : e.target.closest('.lecture-img')

    if (img?.src) {
      setLightboxImg({ src: img.src, alt: img.alt || 'Enlarged Image' })
    }
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') handleClick(e)
  }, [handleClick])

  return (
    <>
      <div
        id={`content-block-text-${index}`}
        dir={isAr ? 'rtl' : 'ltr'}
        className={[
          'prose max-w-none',
          isDark ? 'prose-invert' : '',
          'prose-headings:text-[var(--text-primary)]',
          'prose-p:text-[var(--text-secondary)]',
          'prose-strong:text-[var(--text-primary)]',
          'prose-a:text-[var(--text-accent)] prose-a:no-underline hover:prose-a:underline',
        ].join(' ')}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: processedHTML }}
      />
      {lightboxImg && <Lightbox img={lightboxImg} onClose={closeLightbox} />}
    </>
  )
}

// ─── Block: Unsupported ───────────────────────────────────────────────────────

const UnsupportedBlock = ({ type }) => (
  <div className="glass-tier-1 p-4 text-white/40 text-sm flex items-center gap-2" role="status">
    <AlertTriangle size={14} aria-hidden="true" />
    Unsupported block type: <code className="opacity-70">{type}</code>
  </div>
)

// ─── Block Registry ───────────────────────────────────────────────────────────

/**
 * Maps block.type → render function.
 * Adding a new block type = one new entry here.
 */
const BLOCK_REGISTRY = {
  text:    (block, index, { isAr, isDark }) =>
    <TextBlock block={block} index={index} isAr={isAr} isDark={isDark} />,

  code:    (block, index, { isAr }) =>
    <CodeBlock
      language={block.content.language}
      code={block.content.code}
      caption={isAr && block.content.captionAr ? block.content.captionAr : block.content.caption}
      index={index}
    />,

  image:   (block, index, { isAr }) =>
    <ImageBlock
      src={block.content.src}
      alt={isAr && block.content.altAr ? block.content.altAr : block.content.alt}
      caption={isAr && block.content.captionAr ? block.content.captionAr : block.content.caption}
      index={index}
    />,

  diagram: (block, index, { isAr }) =>
    <DiagramBlock
      code={block.content.code}
      diagramType={block.content.diagramType}
      caption={isAr && block.content.captionAr ? block.content.captionAr : block.content.caption}
      index={index}
    />,

  pdf:     (block, index, { isAr }) =>
    <PDFBlock
      src={block.content.src}
      title={isAr && block.content.titleAr ? block.content.titleAr : block.content.title}
      index={index}
    />,

  video:   (block, index, { isAr }) =>
    <VideoBlock
      src={block.content.src}
      platform={block.content.platform}
      title={isAr && block.content.titleAr ? block.content.titleAr : block.content.title}
      index={index}
    />,
}

// ─── i18n helper ─────────────────────────────────────────────────────────────

/** Pick the localised field or fall back to the base field. */
export const localise = (obj, field, isAr) =>
  (isAr && obj[`${field}Ar`]) ? obj[`${field}Ar`] : obj[field]

// ─── Main Export ─────────────────────────────────────────────────────────────

/**
 * Routes content blocks to their correct renderer by type.
 * Each block is wrapped in a BlockErrorBoundary so one bad block
 * never crashes the whole content tree.
 */
export const ContentRenderer = ({ block, index }) => {
  const { i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const isDark = resolvedTheme === 'dark'

  const renderer = BLOCK_REGISTRY[block?.type]

  return (
    <BlockErrorBoundary>
      {renderer
        ? renderer(block, index, { isAr, isDark })
        : <UnsupportedBlock type={block?.type ?? 'unknown'} />}
    </BlockErrorBoundary>
  )
}
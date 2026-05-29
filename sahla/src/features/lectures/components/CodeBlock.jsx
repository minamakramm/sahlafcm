import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

// highlight.js is dynamically imported to save ~100KB on initial load
let hljsInstance = null
const getHljs = async () => {
  if (hljsInstance) return hljsInstance

  const [
    { default: hljs },
    { default: python },
    { default: javascript },
    { default: java },
    { default: cpp },
    { default: sql },
    { default: xml },
    { default: css },
    { default: bash },
    { default: json }
  ] = await Promise.all([
    import('highlight.js/lib/core'),
    import('highlight.js/lib/languages/python'),
    import('highlight.js/lib/languages/javascript'),
    import('highlight.js/lib/languages/java'),
    import('highlight.js/lib/languages/cpp'),
    import('highlight.js/lib/languages/sql'),
    import('highlight.js/lib/languages/xml'),
    import('highlight.js/lib/languages/css'),
    import('highlight.js/lib/languages/bash'),
    import('highlight.js/lib/languages/json'),
    import('highlight.js/styles/atom-one-dark.css')
  ])

  hljs.registerLanguage('python', python)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('java', java)
  hljs.registerLanguage('cpp', cpp)
  hljs.registerLanguage('c', cpp)
  hljs.registerLanguage('sql', sql)
  hljs.registerLanguage('html', xml)
  hljs.registerLanguage('xml', xml)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('json', json)

  hljsInstance = hljs
  return hljs
}

export const CodeBlock = ({ language = 'python', code, caption, index }) => {
  const { t } = useTranslation('common')
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const highlightCode = async () => {
      if (!codeRef.current) return
      try {
        setLoading(true)
        const hljs = await getHljs()
        if (!cancelled && codeRef.current) {
          // Instead of passing the ref directly to highlightElement which mutates the DOM,
          // we re-assign innerHTML and highlight it.
          codeRef.current.textContent = code;
          codeRef.current.className = `language-${language} text-[0.95rem] leading-relaxed !bg-transparent`;
          hljs.highlightElement(codeRef.current)
        }
      } catch (err) {
        console.warn('Failed to load highlight.js', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    highlightCode()

    return () => {
      cancelled = true
    }
  }, [code, language])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success(t('actions.copied', 'Copied!'))
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy')
    }
  }, [code, t])

  const langLabel = language?.toUpperCase() || 'CODE'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="code-block"
      dir="ltr"
      id={`content-block-code-${index}`}
    >
      {/* Header Actions - Positioned absolute to not interfere with MacOS padding */}
      <div className="absolute top-[14px] right-4 flex items-center gap-4 z-10 no-print">
        <span className="text-[10px] font-bold font-mono text-white/20 uppercase tracking-widest">{langLabel}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/80 transition-colors"
          aria-label="Copy code"
          id={`copy-code-${index}`}
        >
          {copied ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>

      {/* Line Numbers Gutter - Placed relative to the .code-block container */}
      <div 
        className="absolute left-0 top-[44px] bottom-[24px] w-[45px] flex flex-col items-center select-none pointer-events-none z-[10]"
        aria-hidden="true"
      >
         {code.split('\n').map((_, i) => (
           <span key={i} className="text-[10px] font-mono text-white/30 leading-[1.8] block">{i + 1}</span>
         ))}
      </div>

      {/* Code content */}
      <div className="relative min-h-[2rem] z-[3]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-accent-500" />
          </div>
        )}

        <pre className="!bg-transparent !p-0 !m-0 !shadow-none !border-none relative">
          <code
            ref={codeRef}
            className={`language-${language} !bg-transparent opacity-0 transition-opacity duration-300 ${!loading ? 'opacity-100' : ''}`}
          >
            {code}
          </code>
        </pre>
      </div>

      {/* Caption */}
      {caption && (
        <div className="mt-4 text-xs text-white/30 italic border-t border-white/[0.03] pt-3">{caption}</div>
      )}
    </motion.div>
  )
}

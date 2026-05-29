import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Mermaid is dynamically imported on first use (~1.5MB saved from initial bundle)
let mermaidInstance = null
const getMermaid = async () => {
  if (mermaidInstance) return mermaidInstance
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
      primaryColor: '#6366f1',
      primaryTextColor: '#fff',
      primaryBorderColor: '#818cf8',
      lineColor: '#818cf8',
      secondaryColor: '#312e81',
      tertiaryColor: 'rgba(255,255,255,0.05)',
      fontFamily: 'Supreme, sans-serif',
      fontSize: '14px',
    },
    flowchart: {
      curve: 'basis',
      padding: 15,
    },
  })
  mermaidInstance = mermaid
  return mermaid
}

export const DiagramBlock = ({ code, diagramType = 'mermaid', caption, index }) => {
  const containerRef = useRef(null)
  const [error, setError] = useState(null)
  const [rendered, setRendered] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (diagramType !== 'mermaid' || !code || !containerRef.current) return

    let cancelled = false
    const id = `mermaid-diagram-${index}-${Date.now()}`

    const renderDiagram = async () => {
      try {
        setLoading(true)
        const mermaid = await getMermaid()
        const { svg } = await mermaid.render(id, code)
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
          setRendered(true)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError('Failed to render diagram')
          console.warn('[DiagramBlock] Render error:', err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    renderDiagram()
    return () => { cancelled = true }
  }, [code, diagramType, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="glass-tier-1 overflow-hidden my-8 relative group border-white/5 hover:border-white/10 transition-colors"
      id={`content-block-diagram-${index}`}
    >
      <div className="p-6 md:p-10 flex justify-center overflow-x-auto bg-white/[0.01]">
        {error ? (
          <div className="text-white/30 text-[0.8rem] flex flex-col items-center gap-3 py-12">
            <span className="opacity-50">⚠️</span>
            {error}
          </div>
        ) : loading && !rendered ? (
          <div className="text-white/30 text-[0.8rem] flex items-center gap-2 py-12">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-accent-500" />
            Loading diagram…
          </div>
        ) : (
          <div
            ref={containerRef}
            className="mermaid-container [&_svg]:max-w-full [&_svg]:h-auto transition-transform duration-500 group-hover:scale-[1.01]"
          />
        )}
      </div>
      {caption && (
        <div className="px-6 py-4 text-[0.825rem] text-white/40 text-center italic tracking-wide border-t border-white/5 bg-white/[0.01]">
          {caption}
        </div>
      )}
    </motion.div>
  )
}

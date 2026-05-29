import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const PDFBlock = ({ src, title, index }) => {
  const { t } = useTranslation('lectures')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="glass-tier-1 overflow-hidden my-8 border-white/5 shadow-2xl group"
      id={`content-block-pdf-${index}`}
    >
      {/* PDF header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 group-hover:rotate-6 transition-transform">
            <FileText size={16} />
          </div>
          <span className="text-[0.9rem] font-bold text-white/80 tracking-tight">{title || 'Lecture Document'}</span>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] text-xs font-semibold text-accent-300 hover:bg-accent-500 hover:text-white transition-all duration-300"
        >
          <ExternalLink size={14} />
          <span>{t('content.openExternal', 'Open PDF')}</span>
        </a>
      </div>

      {/* PDF frame */}
      <div className="w-full aspect-[4/3] bg-black/40 ring-1 ring-inset ring-white/5">
        <iframe
          src={`${src}#toolbar=1&navpanes=0`}
          title={title}
          className="w-full h-full border-0 brightness-[0.9] hover:brightness-100 transition-all duration-500"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}

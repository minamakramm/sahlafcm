import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageOff, Maximize2, X } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export const ImageBlock = ({ src, alt, caption, index }) => {
  const [hasError, setHasError] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  if (hasError) {
    return (
      <div className="glass-tier-1 p-8 flex flex-col items-center justify-center gap-3 text-white/30" id={`content-block-image-${index}`}>
        <ImageOff size={40} />
        <span className="text-sm">{alt || 'Image unavailable'}</span>
      </div>
    )
  }

  return (
    <>
      <motion.figure
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="image-block-wrapper group cursor-zoom-in max-w-full md:max-w-[450px] mx-auto"
        id={`content-block-image-${index}`}
        onClick={() => setIsZoomed(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-auto object-contain max-h-[500px] bg-[rgba(255,255,255,0.02)]
              transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
          />
          
          <div className="lecture-img-badge">
            <Maximize2 size={12} className="text-accent-500" />
            <span>Click to Enlarge</span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {caption && (
          <figcaption className="px-6 py-4 text-[0.825rem] text-white/40 text-center italic tracking-wide border-t border-white/5 bg-white/[0.01]">
            {caption}
          </figcaption>
        )}
      </motion.figure>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isZoomed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={() => setIsZoomed(false)}
            >
              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                <button 
                  className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shadow-2xl backdrop-blur-md border border-white/10"
                  onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                >
                  <X className="text-white" size={28} />
                </button>
              </div>
              <motion.img 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={src} 
                alt={alt} 
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

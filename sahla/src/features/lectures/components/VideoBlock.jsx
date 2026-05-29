import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export const VideoBlock = ({ src, platform = 'youtube', title, index }) => {
  // Transform YouTube URLs for embed
  const getEmbedUrl = () => {
    if (platform === 'youtube') {
      // Already an embed URL
      if (src.includes('/embed/')) return src
      // Convert watch URL to embed
      const match = src.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/)
      if (match) return `https://www.youtube.com/embed/${match[1]}`
      return src
    }
    return src
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="glass-tier-1 overflow-hidden my-8 border-white/5 shadow-2xl group"
      id={`content-block-video-${index}`}
    >
      {/* Video header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">
            <Play size={14} fill="currentColor" className="ml-0.5" />
          </div>
          <span className="text-[0.9rem] font-bold text-white/80 tracking-tight">{title || 'Lecture Video'}</span>
        </div>
        <div className="flex gap-1.5 grayscale opacity-30">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Video frame */}
      <div className="relative w-full aspect-video bg-black/40 ring-1 ring-inset ring-white/5">
        {platform === 'local' ? (
          <video
            src={src}
            controls
            className="w-full h-full object-contain"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={getEmbedUrl()}
            title={title || 'Video'}
            className="w-full h-full border-0 brightness-[0.9] hover:brightness-100 transition-all duration-500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  )
}

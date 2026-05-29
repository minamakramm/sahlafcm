import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

export const ScrollStory = ({ children, className = '', scrollHeight = '120vh' }) => {
  const containerRef = useRef(null)
  
  // Track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ position: 'relative', minHeight: scrollHeight }}
    >
      <div className="sticky top-0 min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        
        {/* Content layering */}
        <div className="relative z-10 w-full">
          {typeof children === 'function' ? children({ scrollYProgress }) : children}
        </div>
      </div>
    </div>
  )
}

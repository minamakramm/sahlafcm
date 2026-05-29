import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedText = ({
  text,
  className = '',
  letterClassName = '',
  as: Tag = 'div',
  staggerDelay = 0.03,
  delay = 0,
}) => {
  // Split into words, then characters
  const words = (text || '').split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Tag className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={`flex flex-wrap ${className}`}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
            {Array.from(word).map((letter, letterIdx) => (
              <motion.span
                variants={child}
                key={letterIdx}
                className={`inline-block ${letterClassName}`}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </Tag>
  )
}

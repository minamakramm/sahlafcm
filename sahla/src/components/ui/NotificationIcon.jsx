import React from 'react';
import { motion } from 'framer-motion';

/**
 * A highly premium, glowing SVG notification bell icon with interactive hover wiggles
 * and an optional active glowing green badge. Aligning with Sahla's modern dark aesthetics.
 */
export function NotificationIcon({ 
  size = 24, 
  className = '', 
  active = false, 
  animated = true,
  onClick
}) {
  // SVG proportions are 192x192 from our notification.svg
  const bellVariants = {
    idle: { rotate: 0 },
    hover: { 
      rotate: animated ? [0, -10, 10, -10, 8, -8, 4, -4, 0] : 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const clapperVariants = {
    idle: { x: 0 },
    hover: {
      x: animated ? [-2, 2, -2, 2, -1, 1, 0] : 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const badgeVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: [1, 1.25, 0.95, 1.1, 1],
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 192 192" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`relative select-none ${className}`}
      onClick={onClick}
      initial="idle"
      whileHover="hover"
      whileTap="hover"
      style={{ cursor: onClick ? 'pointer' : 'inherit' }}
    >
      <defs>
        {/* Bell Metallic Gradient */}
        <linearGradient id="bellGradComponent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Emerald Glow for Badge */}
        <linearGradient id="emeraldGradComponent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Filters for Glow & Premium Shadows */}
        <filter id="emeraldGlowComponent" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="bellShadowComponent" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.7" />
        </filter>
      </defs>

      <g filter="url(#bellShadowComponent)">
        {/* Bell Clapper (Bottom Ring) - wiggles slightly off-beat */}
        <motion.path 
          d="M 80,132 A 16,16 0 0,0 112,132" 
          fill="none" 
          stroke="url(#emeraldGradComponent)" 
          strokeWidth="10" 
          strokeLinecap="round"
          variants={clapperVariants}
        />

        {/* Sleek Minimalist Bell Body */}
        <motion.path 
          d="M 96,36 
             C 86,36 68,42 68,70 
             L 68,102 
             C 68,110 56,118 56,122 
             L 136,122 
             C 136,118 124,110 124,102 
             L 124,70 
             C 124,42 106,36 96,36 Z" 
          fill="url(#bellGradComponent)"
          variants={bellVariants}
          style={{ originX: "96px", originY: "36px" }}
        />

        {/* Bell Accent Stripe (Adds High-Fidelity Silhouette) */}
        <motion.path 
          d="M 69,102 C 80,100 112,100 123,102" 
          fill="none" 
          stroke="#475569" 
          strokeWidth="3" 
          opacity="0.35" 
          strokeLinecap="round"
          variants={bellVariants}
          style={{ originX: "96px", originY: "36px" }}
        />

        {/* Glowing Notification Dot (Active State) */}
        {active && (
          <motion.g 
            variants={badgeVariants}
            style={{ originX: "132px", originY: "44px" }}
          >
            {/* Pulsing ring underneath */}
            <circle 
              cx="132" 
              cy="44" 
              r="22" 
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              opacity="0.5"
              className="animate-ping"
              style={{ transformOrigin: "132px 44px" }}
            />
            {/* Main glowing dot */}
            <circle 
              cx="132" 
              cy="44" 
              r="15" 
              fill="url(#emeraldGradComponent)" 
              filter="url(#emeraldGlowComponent)"
            />
            {/* Specular highlights for glass/gloss effect */}
            <circle 
              cx="132" 
              cy="44" 
              r="9" 
              fill="#ffffff" 
              opacity="0.9"
            />
            <circle 
              cx="129" 
              cy="41" 
              r="3" 
              fill="#ffffff" 
              opacity="0.95"
            />
          </motion.g>
        )}
      </g>
    </motion.svg>
  );
}

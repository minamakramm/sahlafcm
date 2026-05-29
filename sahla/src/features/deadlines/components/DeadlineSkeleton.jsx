// ============================================
// Sahla — DeadlineSkeleton Component
// Loading skeleton for deadline cards
// ============================================

import React from 'react'

export default function DeadlineSkeleton({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="glass-tier-1 p-5 animate-pulse"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="skeleton h-6 w-20 rounded-full" />
              <div className="skeleton h-6 w-16 rounded-full" />
            </div>
            <div className="skeleton h-5 w-24 rounded" />
          </div>
          <div className="skeleton h-5 w-3/4 mb-2 rounded" />
          <div className="skeleton h-4 w-1/2 mb-4 rounded" />
          <div className="flex items-center gap-3">
            <div className="skeleton h-4 w-32 rounded" />
            <div className="skeleton h-4 w-20 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

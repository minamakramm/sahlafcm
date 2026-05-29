import React from 'react'
import { motion } from 'framer-motion'
import { VoteButton } from './VoteButton'

export const FeatureRequestCard = ({ request, onVote }) => {
  const isVoted = localStorage.getItem(`sahla-voted-${request.id}`) === 'true'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-tier-1 p-5 rounded-3xl flex items-start gap-5"
    >
      <VoteButton votes={request.votes} isVoted={isVoted} onVote={() => onVote(request.id)} />
      
      <div className="flex-1 min-w-0 pt-1">
        <h3 className="text-white font-bold text-lg mb-1 truncate">{request.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap line-clamp-3">
          {request.description}
        </p>
        <div className="mt-3 text-xs text-white/30 uppercase tracking-wider">
          {new Date(request.created_at).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  )
}

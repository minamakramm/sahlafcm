import React from 'react'
import { ChevronUp } from 'lucide-react'

export const VoteButton = ({ votes, isVoted, onVote }) => {
  return (
    <button
      onClick={onVote}
      disabled={isVoted}
      className={`
        flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 shadow-sm
        min-w-[60px] flex-shrink-0
        ${isVoted ? 'bg-[rgba(165,180,252,0.15)] border border-[rgba(165,180,252,0.3)]' : 'glass-tier-2 hover:bg-white/10'}
      `}
      aria-label="Vote for this feature"
    >
      <ChevronUp size={24} className={`mb-1 ${isVoted ? 'text-[#a5b4fc]' : 'text-white/50'}`} />
      <span className={`text-base font-bold ${isVoted ? 'text-white' : 'text-white/80'}`}>
        {votes}
      </span>
    </button>
  )
}

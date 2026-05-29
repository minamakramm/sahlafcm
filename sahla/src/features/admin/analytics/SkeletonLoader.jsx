import React from 'react';

export const SkeletonLoader = ({ className }) => (
  <div className={`relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl ${className || 'h-64'}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
    <div className="p-6 space-y-4">
      <div className="h-3 bg-white/5 rounded-md w-1/3" />
      <div className="h-8 bg-white/5 rounded-md w-2/3" />
      <div className="h-2 bg-white/5 rounded-full w-full mt-4" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="h-10 bg-white/5 rounded-lg" />
        <div className="h-10 bg-white/5 rounded-lg" />
      </div>
    </div>
  </div>
);

export const ChartSkeletonLoader = () => (
   <div className="relative overflow-hidden w-full h-72 bg-white/5 border border-white/10 rounded-2xl p-6">
       <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
       <div className="h-3 bg-white/5 rounded-md w-1/4 mb-6" />
       <div className="flex gap-2 h-40 items-end">
           <div className="w-1/7 bg-primary/10 rounded-md h-[30%] animate-pulse" style={{ animationDelay: '0ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[55%] animate-pulse" style={{ animationDelay: '100ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[70%] animate-pulse" style={{ animationDelay: '200ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[45%] animate-pulse" style={{ animationDelay: '300ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[85%] animate-pulse" style={{ animationDelay: '400ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[90%] animate-pulse" style={{ animationDelay: '500ms' }} />
           <div className="w-1/7 bg-primary/10 rounded-md h-[65%] animate-pulse" style={{ animationDelay: '600ms' }} />
       </div>
   </div>
);

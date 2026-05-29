import React from 'react';
import { SkeletonLoader } from './SkeletonLoader';

/**
 * SubjectCardSkeleton — matches the exact dimensions of SubjectCard
 * to prevent Cumulative Layout Shift (CLS) during loading.
 */
export const SubjectCardSkeleton = () => {
  return (
    <div
      className="glass-tier-2 p-6 md:p-8 h-full flex flex-col gap-4 rounded-[24px]"
      style={{ minHeight: '420px' }} /* Match real card height */
    >
      <div className="flex items-start justify-between">
        <SkeletonLoader className="w-12 h-12 md:w-14 md:h-14 rounded-[18px] shrink-0" />
        <SkeletonLoader className="w-24 h-6 rounded-full" />
      </div>
      
      {/* Title */}
      <SkeletonLoader className="w-3/4 h-6 rounded-lg" />
      
      {/* Description lines */}
      <div className="flex flex-col gap-2 flex-grow">
        <SkeletonLoader className="w-full h-4 rounded" />
        <SkeletonLoader className="w-5/6 h-4 rounded" />
      </div>
      
      {/* Visual block placeholder */}
      <SkeletonLoader className="w-full rounded-xl" style={{ minHeight: '120px' }} />
      
      {/* Footer */}
      <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
        <div className="flex gap-4">
          <SkeletonLoader className="w-24 h-4 rounded" />
          <SkeletonLoader className="w-20 h-4 rounded" />
        </div>
        <SkeletonLoader className="w-full h-11 rounded-full" />
      </div>
    </div>
  );
};

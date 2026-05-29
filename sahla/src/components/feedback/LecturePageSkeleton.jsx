import React from 'react';
import { SkeletonLoader } from './SkeletonLoader';

export const LecturePageSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="glass-tier-2 p-6 flex flex-col gap-4">
        <SkeletonLoader className="w-3/4 h-8 rounded" />
        <SkeletonLoader className="w-1/4 h-5 rounded" />
        <div className="flex gap-2">
          <SkeletonLoader className="w-20 h-6 rounded-full" />
          <SkeletonLoader className="w-20 h-6 rounded-full" />
        </div>
      </div>
      <div className="glass-tier-2 p-6 flex flex-col gap-3">
        <SkeletonLoader className="w-full h-4 rounded" />
        <SkeletonLoader className="w-full h-4 rounded" />
        <SkeletonLoader className="w-5/6 h-4 rounded" />
        <SkeletonLoader className="w-full h-4 rounded mt-4" />
        <SkeletonLoader className="w-4/5 h-4 rounded" />
      </div>
    </div>
  );
};

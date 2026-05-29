import React from 'react';
import { SkeletonLoader } from './SkeletonLoader';

export const LectureListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-tier-2 p-4 flex items-center gap-4">
          <SkeletonLoader className="w-10 h-10 rounded-lg shrink-0" />
          <div className="flex flex-col gap-2 flex-grow">
            <SkeletonLoader className="w-2/3 h-5 rounded" />
            <SkeletonLoader className="w-1/3 h-4 rounded" />
          </div>
          <SkeletonLoader className="w-8 h-8 rounded-full shrink-0" />
        </div>
      ))}
    </div>
  );
};

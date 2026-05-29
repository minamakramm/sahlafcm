import React from 'react';
import { SkeletonLoader } from './SkeletonLoader';

export const ExamSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
      <div className="flex justify-between items-center glass-tier-2 p-4">
        <SkeletonLoader className="w-32 h-6 rounded" />
        <SkeletonLoader className="w-24 h-6 rounded" />
      </div>
      <div className="glass-tier-2 p-6 flex flex-col gap-6">
        <SkeletonLoader className="w-full h-8 rounded" />
        <SkeletonLoader className="w-3/4 h-8 rounded" />
        <div className="flex flex-col gap-3 mt-4">
          {[1, 2, 3, 4].map(i => (
            <SkeletonLoader key={i} className="w-full h-14 rounded-xl" />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <SkeletonLoader className="w-24 h-10 rounded-lg" />
        <SkeletonLoader className="w-24 h-10 rounded-lg" />
      </div>
    </div>
  );
};

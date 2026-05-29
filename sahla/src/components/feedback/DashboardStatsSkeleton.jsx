import React from 'react';
import { SkeletonLoader } from './SkeletonLoader';

export const DashboardStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="glass-tier-2 p-4 flex flex-col gap-2 relative overflow-hidden">
          <SkeletonLoader className="w-8 h-8 rounded-full mb-2" />
          <SkeletonLoader className="w-16 h-8 rounded" />
          <SkeletonLoader className="w-24 h-4 rounded" />
        </div>
      ))}
    </div>
  );
};

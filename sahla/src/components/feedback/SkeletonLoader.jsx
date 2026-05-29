import React from 'react';

export const SkeletonLoader = ({ className = '' }) => {
  return (
    <div className={`skeleton ${className}`} />
  );
};

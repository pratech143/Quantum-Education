import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonHeading, SkeletonPill } from './SkeletonBase';

const GenericPageSkeleton = () => {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative px-6 py-16 md:py-24 bg-surface border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <SkeletonPill width="140px" />
          <SkeletonHeading width="60%" />
          <SkeletonText lines={2} width="40%" />
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SkeletonHeading width="80%" />
            <SkeletonText lines={4} />
            <SkeletonBox width="200px" height="3rem" radius="0.75rem" />
          </div>
          <SkeletonBox height="500px" radius="1.5rem" />
        </div>
      </section>

      {/* Grid Section Skeleton */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4 flex flex-col items-center">
            <SkeletonHeading width="40%" />
            <SkeletonText lines={1} width="30%" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
                <SkeletonBox width="60px" height="60px" radius="1rem" />
                <SkeletonHeading width="70%" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPageSkeleton;

import React from 'react';
import { SkeletonBox, SkeletonCircle, SkeletonText, SkeletonHeading, SkeletonPill } from './SkeletonBase';

const HomeSkeleton = () => {
  return (
    <div className="flex flex-col w-full bg-background overflow-x-hidden min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative min-h-[560px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#F9F9F9]">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10 w-full">
          <div className="col-span-12 lg:col-span-6 py-4 lg:py-2 space-y-8">
            <SkeletonPill width="160px" />
            <div className="space-y-4">
              <SkeletonHeading width="100%" />
              <SkeletonHeading width="80%" />
            </div>
            <SkeletonText lines={3} width="90%" />
            <div className="flex gap-4 pt-4">
              <SkeletonBox width="180px" height="3.5rem" radius="0.75rem" />
              <SkeletonBox width="180px" height="3.5rem" radius="0.75rem" />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative min-h-[400px]">
             <SkeletonCircle size="450px" className="max-w-full aspect-square" />
          </div>
        </div>
      </section>

      {/* Trust Section Skeleton */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between gap-8 opacity-50">
          {[...Array(5)].map((_, i) => (
            <SkeletonBox key={i} width="120px" height="2rem" />
          ))}
        </div>
      </section>

      {/* Destinations Section Skeleton */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 space-y-12">
          <div className="space-y-4">
            <SkeletonHeading width="300px" />
            <SkeletonText lines={2} width="500px" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <SkeletonBox key={i} height="400px" radius="1rem" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;

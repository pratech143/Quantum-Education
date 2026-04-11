import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonBox = ({ className = '', height = '1rem', width = '100%', radius = '0.5rem' }) => (
  <motion.div
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.5, 0.8, 0.5] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    className={`bg-slate-200 ${className}`}
    style={{ height, width, borderRadius: radius }}
  />
);

export const SkeletonCircle = ({ size = '3rem', className = '' }) => (
  <SkeletonBox className={className} height={size} width={size} radius="9999px" />
);

export const SkeletonText = ({ lines = 3, className = '', gap = '0.5rem' }) => (
  <div className={`flex flex-col ${className}`} style={{ gap }}>
    {[...Array(lines)].map((_, i) => (
      <SkeletonBox 
        key={i} 
        width={i === lines - 1 && lines > 1 ? '70%' : '100%'} 
        height="0.875rem" 
      />
    ))}
  </div>
);

export const SkeletonHeading = ({ className = '', width = '50%' }) => (
  <SkeletonBox className={className} height="2.5rem" width={width} radius="0.75rem" />
);

export const SkeletonPill = ({ className = '', width = '100px' }) => (
  <SkeletonBox className={className} height="1.5rem" width={width} radius="999px" />
);

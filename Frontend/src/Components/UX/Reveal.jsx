import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal Component
 * Provides a smooth fade-in and slide-up animation when the element enters the viewport.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be revealed
 * @param {string} [props.direction='up'] - Direction of motion ('up', 'down', 'left', 'right')
 * @param {number} [props.delay=0] - Delay before animation starts (in seconds)
 * @param {number} [props.duration=0.6] - Duration of the animation (in seconds)
 * @param {number} [props.distance=20] - Distance to travel (in pixels)
 * @param {string} [props.className] - Additional Tailwind classes
 */
const Reveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6, 
  distance = 20,
  className = '' 
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

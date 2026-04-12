import React from 'react';
import { motion } from 'framer-motion';

const StepCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative z-10 flex flex-col items-center text-center max-w-[200px] w-full"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-white mb-6 shadow-lg transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </motion.div>
      <h5 className="font-bold text-primary mb-2">{title}</h5>
      <p className="text-xs text-on-surface-variant">{description}</p>
    </motion.div>
  );
};

export default StepCard;

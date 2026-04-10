import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5000+', label: 'Placements' },
  { value: '25+', label: 'Countries' },
  { value: '500+', label: 'Partner Universities' },
];

const AlumniStats = () => {
  return (
    <section className="py-16 px-6 bg-surface-container-highest border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2 group"
            >
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-primary transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-on-surface-variant font-medium tracking-widest uppercase text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStats;

import React from 'react';
import { motion } from 'framer-motion';

const StudentLife = ({ items }) => {
  return (
    <section className="px-6 mb-20 max-w-7xl mx-auto">
      <h3 className="text-3xl font-black text-primary font-headline mb-8 tracking-tight">
        Student Life
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-surface-container-low p-8 rounded-3xl text-center border border-black/5 hover:bg-surface-container transition-colors group cursor-default"
          >
            <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <p className="font-black text-sm text-primary uppercase tracking-widest leading-tight">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StudentLife;

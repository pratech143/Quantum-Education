import React from 'react';
import { motion } from 'framer-motion';

const FeaturedPrograms = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex justify-between items-end mb-10 px-4">
        <h2 className="text-4xl font-bold text-primary font-headline tracking-tight">Featured Programs</h2>
        <a className="text-primary font-semibold hover:underline underline-offset-8 font-label" href="#">View all courses</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/30">
        {data.map((program, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group border-b border-outline-variant/30 py-6 transition-all hover:bg-surface-container-low px-8 
              ${i % 3 === 0 ? 'md:pr-12 md:pl-4' : i % 3 === 1 ? 'md:px-12' : 'md:pl-12 md:pr-4'}`}
          >
            <span className="text-outline text-xs font-mono mb-4 block">{program.code}</span>
            <h4 className="text-xl font-bold text-primary mb-3 font-headline leading-tight">{program.title}</h4>
            <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
              {program.description}
            </p>
            <div className="mt-6 flex gap-3">
              {program.tags.map((tag, j) => (
                <span key={j} className="text-[10px] px-2 py-1 bg-secondary-container/50 text-on-secondary-container rounded font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrograms;

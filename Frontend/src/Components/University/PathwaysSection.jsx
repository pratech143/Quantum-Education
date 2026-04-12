import React from 'react';
import { motion } from 'framer-motion';

const PathwaysSection = ({ data }) => {
  return (
    <section className="bg-surface-container-highest/20 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-primary mb-4 font-headline">{data.title}</h2>
          <p className="text-lg text-on-secondary-fixed-variant leading-relaxed mb-6">
            {data.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.options.map((option, i) => (
              <div key={i} className="bg-white/50 p-6 rounded-lg border border-outline-variant/10">
                <span className="font-bold text-primary block mb-1 font-headline">{option.title}</span>
                <span className="text-sm text-on-surface-variant">{option.details}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PathwaysSection;

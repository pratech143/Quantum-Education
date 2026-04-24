import React from 'react';
import { motion } from 'framer-motion';

const OutcomesSection = () => {
  return (
    <section className="py-20 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl font-black text-primary mb-2">200+</div>
          <p className="text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Success Stories</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl font-black text-primary mb-2">25+</div>
          <p className="text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Global Partners</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl font-black text-primary mb-2">95%</div>
          <p className="text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Visa Approval Rate</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;

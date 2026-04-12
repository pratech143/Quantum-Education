import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = ({ data }) => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl font-headline font-bold text-primary mb-6">
              {data.title}
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-on-surface-variant leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

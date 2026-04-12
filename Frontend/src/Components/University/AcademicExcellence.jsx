import React from 'react';
import { motion } from 'framer-motion';

const AcademicExcellence = ({ data }) => {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="text-4xl font-bold text-primary tracking-tight leading-tight font-headline">
              {data.title}
            </h2>
            <div className="mt-6 h-1 w-20 bg-primary"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.highlights.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-primary mb-4 font-headline">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;

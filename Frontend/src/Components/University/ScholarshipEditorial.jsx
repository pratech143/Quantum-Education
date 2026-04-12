import React from 'react';
import { motion } from 'framer-motion';

const ScholarshipEditorial = ({ data }) => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-on-primary p-12 md:p-16 rounded-[2rem] relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-headline font-bold mb-8">
              {data.title}
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-12">
              {data.description}
            </p>
            <button className="bg-on-primary text-primary px-10 py-5 rounded-xl font-label font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all shadow-lg active:scale-95">
              VISIT WEBSITE
            </button>
          </div>
          
          {/* Decorative tonal element */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarshipEditorial;

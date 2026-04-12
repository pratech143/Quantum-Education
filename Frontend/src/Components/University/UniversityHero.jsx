import React from 'react';
import { motion } from 'framer-motion';

const UniversityHero = ({ data }) => {
  return (
    <section className="relative min-h-[795px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-primary tracking-tight mb-8 leading-tight">
            {data.title} <br/>
            <span className="text-on-primary-container/80">{data.titleAccent}</span>
          </h1>
          <p className="text-xl text-on-primary/90 leading-relaxed font-body mb-10 text-balance">
            {data.description}
          </p>
          <div className="flex gap-4">
            <button className="bg-on-primary text-primary px-8 py-4 rounded-xl font-label font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors shadow-lg">
              {data.cta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityHero;

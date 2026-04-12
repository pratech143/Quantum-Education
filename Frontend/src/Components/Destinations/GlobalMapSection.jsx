import React from 'react';
import { motion } from 'framer-motion';

const GlobalMapSection = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-bold text-primary mb-6"
        >
          Our Global Footprint
        </motion.h2>
        
        <div className="flex justify-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl font-black text-primary mb-2">25+</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Countries</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-primary mb-2">5000+</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Students Placed</div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] min-h-[450px] flex items-center justify-center">
        <svg 
          viewBox="0 0 1000 450" 
          className="w-full h-full opacity-20 text-primary pointer-events-none"
          fill="currentColor"
        >
          <path d="M150,150 Q200,100 250,150 T350,150" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M600,100 Q650,50 700,100 T800,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-10 mix-blend-multiply grayscale"></div>
        </div>



        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface pointer-events-none"></div>
      </div>
    </section>
  );
};

export default GlobalMapSection;

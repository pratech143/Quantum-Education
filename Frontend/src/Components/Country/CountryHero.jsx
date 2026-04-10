import React from 'react';
import { motion } from 'framer-motion';

const CountryHero = ({ data }) => {
  return (
    <section className="relative px-6 mb-12">
      <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-on-primary font-headline mb-3 leading-tight tracking-tight">
              {data.title}
            </h1>
            <p className="text-on-primary/80 text-lg md:text-xl mb-8 max-w-xl leading-snug font-body italic">
              — {data.tagline}
            </p>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {data.stats.map((stat, i) => (
                <div key={i} className="tonal-shift-no-border p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg border border-white/20">
                  <span className="text-primary font-black text-xl md:text-2xl font-headline tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-black text-on-surface-variant uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroCampus from '../../assets/Alumni/hero-campus.jpg';

const stats = [
  { value: '5000+', label: 'Students Placed' },
  { value: '500+', label: 'Partner Universities' },
  { value: '95%', label: 'Visa Success Rate' },
  { value: '12+', label: 'Years Experience' },
];

const AlumniHero = () => {
  return (
    <section className="relative pt-0 pb-20 px-6 md:px-12 overflow-hidden bg-surface-container-low border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-4"
          >
            Alumni Excellence
          </motion.span>
          
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary leading-tight mb-4 tracking-tighter">
            Celebrating <span className="text-secondary">Global Success</span>
          </h1>
          
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            With over 5,000+ placements in prestigious universities worldwide, our alumni are shaping the future across industries. Your international journey begins where theirs did.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-gradient text-white px-8 py-4 rounded-xl text-md font-bold uppercase tracking-wide transition-all shadow-xl shadow-primary/20 flex items-center gap-3"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Integrated Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">
                {stat.value}
              </div>
              <div className="h-1 w-8 bg-secondary/30 mb-2 rounded-full"></div>
              <div className="text-on-surface-variant font-black tracking-widest uppercase text-[9px] md:text-[10px] opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Editorial Element */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none"
      >
        <img 
          className="w-full h-full object-cover grayscale" 
          alt="classic university campus facade" 
          src={heroCampus} 
        />
      </motion.div>
    </section>
  );
};

export default AlumniHero;

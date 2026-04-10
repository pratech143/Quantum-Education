import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroCampus from '../../assets/Alumni/hero-campus.jpg';

const AlumniHero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 overflow-hidden bg-surface-container-low">
      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-6"
          >
            Alumni Excellence
          </motion.span>
          
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary leading-tight mb-8 tracking-tighter">
            Celebrating <span className="text-secondary">Global Success</span>
          </h1>
          
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
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
      </div>

      {/* Decorative Editorial Element */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
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

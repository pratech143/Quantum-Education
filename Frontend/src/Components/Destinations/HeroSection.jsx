import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/destinations/dest-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative px-6 py-12 md:py-24 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex self-start px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-sm font-semibold tracking-wide uppercase"
        >
          Global Destinations
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-6"
            >
              Explore Your <br />
              <span className="text-primary-container">Study Destinations</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Unlock a world of prestige and opportunity. We connect ambitious students from Nepal to top-tier international universities across the globe.
            </motion.p>
            
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="primary-gradient px-8 py-4 rounded-xl text-white font-bold uppercase tracking-wider flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                Start Your Journey
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </Link>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-[4/5] rounded-xl overflow-hidden editorial-image-mask"
            >
              <img
                className="w-full h-full object-cover"
                alt="Ambitious international students"
                src={heroImg}
              />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl max-w-[240px]"
            >
              <p className="text-sm font-medium text-primary mb-2 italic">"The transition was seamless, the guidance was unparalleled."</p>
              <p className="text-xs font-bold text-on-surface-variant">— Aditi R., London School of Economics</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import aboutHeroImg from '../../assets/about-hero.png';

import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[751px] flex items-center pt-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-primary font-headline font-bold text-xs uppercase tracking-widest"
          >
            Global Opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter"
          >
            Empowering <br />
            <span className="text-primary/60">Global Ambitions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-body"
          >
            We bridge the gap between local potential and the world's most prestigious campuses. Your journey to international excellence starts with a single, guided step.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="primary-gradient text-white px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider shadow-lg"
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link to="/alumni">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-surface-container-highest text-on-surface font-headline font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Our Success Stories
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Decorative Blur Circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary-container/10 rounded-full blur-3xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative z-10"
          >
            <img 
              alt="University campus hallway" 
              className="w-full h-[500px] object-cover" 
              src={aboutHeroImg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </motion.div>
          
          {/* Stats Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-8 -left-8 glass-effect p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary font-headline">5000+</p>
                <p className="text-xs text-primary/60 font-black font-body uppercase tracking-widest">
                  Students Placed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

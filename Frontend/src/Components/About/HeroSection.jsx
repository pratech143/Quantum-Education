import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutHeroImg from '../../assets/about-hero.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="University campus hallway"
          className="w-full h-full object-cover"
          src={aboutHeroImg}
        />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-[#f0f8ff] font-headline font-bold text-xs uppercase tracking-widest mb-6 shadow-md border border-white/10"
          >
            Global Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white leading-tight tracking-tighter mb-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          >
            Empowering <br />
            <span className="text-[#e2f0ff]">Global Ambitions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#f0f8ff] font-bold max-w-xl leading-relaxed font-body mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            We bridge the gap between local potential and the world's most prestigious campuses. Your journey to international excellence starts with a single, guided step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider shadow-xl"
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link to="/alumni">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm font-headline font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                Our Success Stories
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

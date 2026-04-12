import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/destinations/dest-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Study abroad destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Global Destinations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
          >
            Explore Your <br />
            <span className="text-white/80">Study Destinations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Unlock a world of prestige and opportunity. We connect ambitious students from Nepal to top-tier international universities across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wider flex items-center gap-3 shadow-lg"
              >
                Start Your Journey
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </Link>
            <a href="#destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors"
              >
                View Countries
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

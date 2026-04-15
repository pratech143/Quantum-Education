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
        <div className="absolute inset-0 bg-on-primary-fixed/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-4 py-1.5 rounded-full bg-primary-fixed/10 backdrop-blur-sm text-primary-fixed text-sm font-bold tracking-wide uppercase mb-6 border border-primary-fixed/20"
          >
            Global Destinations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-fixed leading-[1.1] tracking-tight mb-5 drop-shadow-lg"
          >
            Explore Your <br />
            <span className="text-on-primary-container">Study Destinations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-primary-container font-bold text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
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
                whileTap={{ scale: 0.98 }}
                className="group relative bg-primary text-on-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wider flex items-center gap-3
                  overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(5,114,255,0.4)] transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative flex items-center gap-3">
                  Start Your Journey
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </motion.button>
            </Link>
            <a href="#destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-fixed/10 backdrop-blur-md border border-primary-fixed/25 text-primary-fixed px-8 py-4 rounded-xl font-bold uppercase tracking-wider
                  hover:bg-primary-fixed/20 hover:border-primary-fixed/50 hover:shadow-[0_8px_30px_rgba(185,234,255,0.15)] transition-all duration-300"
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

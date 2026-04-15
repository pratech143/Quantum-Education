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
        <div className="absolute inset-0 bg-on-primary-fixed/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/10 backdrop-blur-sm text-primary-fixed font-headline font-bold text-xs uppercase tracking-widest mb-6 border border-primary-fixed/20"
          >
            Global Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary-fixed leading-tight tracking-tighter mb-5 drop-shadow-lg"
          >
            Empowering <br />
            <span className="text-on-primary-container">Global Ambitions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-on-primary-container font-bold max-w-xl leading-relaxed font-body mb-8 mx-auto"
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
                whileTap={{ scale: 0.98 }}
                className="group relative bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider
                  overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(5,114,255,0.4)] transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative">Start Your Journey</span>
              </motion.button>
            </Link>
            <Link to="/alumni">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-fixed/10 backdrop-blur-md border border-primary-fixed/25 text-primary-fixed px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider
                  hover:bg-primary-fixed/20 hover:border-primary-fixed/50 hover:shadow-[0_8px_30px_rgba(185,234,255,0.15)] transition-all duration-300"
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

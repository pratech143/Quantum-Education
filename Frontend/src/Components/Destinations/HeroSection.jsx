import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/destinations/dest-hero.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative px-6  pb-8 md:pt-0 md:pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col">
        <motion.div
          id="dpill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex self-start px-4 py-1.5 rounded-full bg-secondary-container text-primary font-semibold tracking-wide uppercase text-xs shadow-sm "
        >
          Global Destinations
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight"
            >
              Explore Your <br />
              <span className="text-primary/60">Study Destinations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl font-body"
            >
              Unlock a world of prestige and opportunity. We connect ambitious students from Nepal to top-tier international universities across the globe.
            </motion.p>

            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="primary-gradient px-8 py-4 rounded-xl text-white font-bold uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-primary/20"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                className="w-full h-full object-cover"
                alt="Ambitious international students on campus"
                src={heroImg}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

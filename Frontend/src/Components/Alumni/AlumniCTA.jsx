import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '../../assets/Alumni/cta-bg.jpg';

import { Link } from 'react-router-dom';

const AlumniCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl overflow-hidden relative p-12 md:p-24 text-center shadow-2xl shadow-primary/30"
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover mix-blend-overlay" 
              src={ctaBg} 
              alt="Background pattern" 
            />
          </div>

          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-headline font-extrabold text-3xl md:text-6xl text-white mb-8 tracking-tight"
            >
              Ready to write your <br className="hidden md:block" /> global story?
            </motion.h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Your future at a world-class university is just one consultation away. Let's make it happen together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-5 rounded-2xl text-md font-headline font-bold uppercase tracking-widest shadow-xl transition-all"
                >
                  Book a Consultation
                </motion.button>
              </Link>
              <Link to="/destinations">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-md font-headline font-bold uppercase tracking-widest backdrop-blur-sm transition-all"
                >
                  Explore Destinations
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniCTA;

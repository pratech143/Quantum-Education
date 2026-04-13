import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="primary-gradient rounded-3xl overflow-hidden relative p-12 md:p-24 text-center shadow-2xl shadow-primary/30"
        >
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-tight tracking-tighter"
            >
              Ready to write your <br className="hidden md:block" /> global story?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto leading-relaxed"
            >
              The world's best classrooms are waiting. Start your application today with the experts who care about your journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4 flex justify-center"
            >
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-headline font-extrabold text-lg uppercase tracking-widest hover:bg-surface-container-low transition-all shadow-xl"
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

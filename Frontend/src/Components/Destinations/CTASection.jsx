import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto primary-gradient p-12 md:p-24 rounded-3xl text-white text-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Ready to study abroad?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
          >
            Your global future starts with a single conversation. Book a free consultation with our expert advisors today and find your perfect destination.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl"
              >
                Book Consultation
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all backdrop-blur-sm"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto primary-gradient p-12 md:p-20 rounded-xl text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 relative z-10">Ready to study abroad?</h2>

        <p className="text-on-primary-container text-lg mb-8 max-w-xl mx-auto relative z-10">Your global future starts with a single conversation. Book a free consultation with our expert advisors today.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link to="/contact">
            <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
              Book Consultation
            </button>
          </Link>
          <Link to="/contact">
            <button className="border-2 border-white/30 hover:bg-white/10 px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

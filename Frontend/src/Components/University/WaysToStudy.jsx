import React from 'react';
import { motion } from 'framer-motion';

const WaysToStudy = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Undergraduate Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 shadow-sm"
        >
          <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block font-headline">Foundation & Early Career</span>
          <h2 className="text-3xl font-bold text-primary mb-4 font-headline">{data.undergrad.title}</h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            {data.undergrad.description}
          </p>
          <ul className="space-y-4">
            {data.undergrad.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> 
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Postgraduate Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 primary-gradient text-on-primary p-10 rounded-xl shadow-xl"
        >
          <span className="text-xs font-bold text-primary-fixed uppercase tracking-widest mb-2 block font-headline">Specialization & Research</span>
          <h2 className="text-3xl font-bold text-white mb-4 font-headline">{data.postgrad.title}</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            {data.postgrad.description}
          </p>
          <ul className="space-y-4">
            {data.postgrad.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full"></span> 
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToStudy;

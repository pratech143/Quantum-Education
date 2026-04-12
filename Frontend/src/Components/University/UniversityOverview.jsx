import React from 'react';
import { motion } from 'framer-motion';

const UniversityOverview = ({ overview, stats }) => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-4xl md:text-5xl font-black font-headline mb-8">
              {overview.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word} {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
              {overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:border-primary/20 transition-colors">
                <div className="text-primary text-4xl font-black font-headline mb-2">{stat.value}</div>
                <div className="text-on-surface-variant font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniversityOverview;

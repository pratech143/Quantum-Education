import React from 'react';
import { motion } from 'framer-motion';

const CountryOverview = ({ data }) => {
  return (
    <section className="px-6 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-black text-primary font-headline mb-8 tracking-tight">
          {data.title}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main text component */}
          <div className="lg:col-span-12">
            <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 shadow-sm border border-black/5">
              <p className="text-on-surface-variant leading-relaxed text-lg md:text-xl font-body mb-10">
                {data.description}
              </p>
              
              {/* Highlight cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.highlights.map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-surface-container-lowest rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-lg mb-1 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant font-medium leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CountryOverview;

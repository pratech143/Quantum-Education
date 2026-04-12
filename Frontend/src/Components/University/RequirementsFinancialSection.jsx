import React from 'react';
import { motion } from 'framer-motion';

const RequirementsFinancialSection = ({ requirements, financials }) => {
  return (
    <section className="py-24 bg-surface-container-highest/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">assignment_turned_in</span>
              <h3 className="text-primary text-2xl font-black font-headline">{requirements.title}</h3>
            </div>
            <ul className="space-y-6">
              {requirements.list.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-teal-600 mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">{item.title}</p>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tuition & Scholarship */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="primary-gradient text-on-primary p-10 rounded-xl shadow-xl"
            >
              <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                payments
              </span>
              <h3 className="text-2xl font-black font-headline mb-6">{financials.costs.title}</h3>
              <div className="space-y-4">
                {financials.costs.items.map((item, i) => (
                  <div key={i} className={`flex justify-between pb-4 ${i !== financials.costs.items.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <span className="text-on-primary/70">{item.label}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h4 className="font-black font-headline text-xl mb-2">{financials.scholarship.title}</h4>
                <p className="text-on-tertiary-fixed-variant text-sm">{financials.scholarship.description}</p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12">
                {financials.scholarship.icon}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsFinancialSection;

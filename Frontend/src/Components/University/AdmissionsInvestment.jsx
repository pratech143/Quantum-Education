import React from 'react';
import { motion } from 'framer-motion';

const AdmissionsInvestment = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 border-t border-outline-variant/20">
      <h2 className="text-4xl font-bold text-primary mb-10 font-headline tracking-tight">Admissions & Investment</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Requirements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-4 font-headline">Entry Requirements</h4>
            <div className="space-y-4">
              {data.requirements.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant">{item.label}</span>
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fees */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-4 font-headline">Indicative Fees</h4>
            <div className="space-y-4">
              {data.fees.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant">{item.label}</span>
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scholarship */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-4 font-headline">Scholarships</h4>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <p className="font-bold text-primary text-xl mb-2 font-headline">{data.scholarship.title}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {data.scholarship.description}
              </p>
              <button className="mt-4 text-xs font-bold text-primary underline underline-offset-8 uppercase tracking-widest">
                Check Eligibility
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AdmissionsInvestment;

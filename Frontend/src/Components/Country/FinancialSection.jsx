import React from 'react';
import { motion } from 'framer-motion';

const FinancialSection = ({ financials }) => {
  return (
    <section className="px-6 mb-20 max-w-7xl mx-auto">
      <h3 className="text-3xl font-black text-primary font-headline mb-8 tracking-tight">
        Financial Overview
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Costs Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="primary-gradient text-on-primary p-10 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-primary/30"
        >
          <span className="material-symbols-outlined absolute -right-8 -top-8 text-[12rem] opacity-5 select-none transition-transform group-hover:scale-110">
            savings
          </span>
          
          <h4 className="text-2xl font-black mb-10 font-headline tracking-tight">Study Investment</h4>
          
          <div className="space-y-6">
            {financials.costs.map((cost, i) => (
              <div key={i} className="flex justify-between items-center border-b border-on-primary/10 pb-4 last:border-0 last:pb-0">
                <span className="font-medium opacity-80">{cost.level}</span>
                <span className="font-black text-xl tracking-tight">{cost.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Scholarships Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-tertiary-container text-on-tertiary-container p-10 md:p-12 rounded-3xl border border-tertiary/10 shadow-lg relative overflow-hidden"
        >
          <span className="material-symbols-outlined absolute -right-8 -top-8 text-[12rem] opacity-5 select-none">
            workspace_premium
          </span>
          
          <h4 className="text-2xl font-black mb-10 font-headline tracking-tight">Scholarship Pathways</h4>
          
          <ul className="space-y-6">
            {financials.scholarships.map((scholar, i) => (
              <li key={i} className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-on-tertiary-container/10 flex items-center justify-center shrink-0 group-hover:bg-on-tertiary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-on-tertiary-container" data-icon="verified">verified</span>
                </div>
                <p className="text-lg font-bold leading-tight pt-1">
                  {scholar}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialSection;

import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      value: "5000+",
      label: "Success Stories"
    },
    {
      value: "25+",
      label: "Global Partners"
    },
    {
      value: "98%",
      label: "Visa Approval Rate"
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              className="text-6xl font-black text-primary mb-4 tabular-nums tracking-tighter"
            >
              {stat.value}
            </motion.div>
            <div className="h-1 w-12 bg-primary/20 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

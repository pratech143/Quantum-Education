import React from 'react';
import { motion } from 'framer-motion';

const CountryFAQ = ({ faqs }) => {
  return (
    <section className="px-6 mb-20 max-w-4xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-black text-primary font-headline mb-8 text-center tracking-tight"
      >
        Common Questions
      </motion.h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-surface-container-low rounded-3xl p-6 md:p-8 group shadow-sm border border-black/5 cursor-pointer"
          >
            <summary className="flex justify-between items-center font-black text-primary text-lg list-none tracking-tight">
              {faq.q}
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-2xl">
                expand_more
              </span>
            </summary>
            <div className="mt-6 text-on-surface-variant leading-relaxed text-lg border-t border-black/5 pt-6 font-body">
              {faq.a}
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
};

export default CountryFAQ;

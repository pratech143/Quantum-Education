import React from 'react';
import { motion } from 'framer-motion';

const UniversityInfoCards = ({ data }) => {
  return (
    <section className="pb-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Entry Requirements */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low p-12 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-headline font-bold text-primary mb-6">
              {data.requirements.title}
            </h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed text-lg">
              {data.requirements.description}
            </p>
          </div>
          <button className="w-fit text-primary border-b-2 border-primary font-label font-bold py-2 hover:opacity-70 transition-opacity uppercase tracking-widest">
            VISIT WEBSITE
          </button>
        </motion.div>

        {/* How to Apply */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-highest p-12 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-headline font-bold text-primary mb-6">
              {data.howToApply.title}
            </h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed text-lg">
              {data.howToApply.description}
            </p>
          </div>
          <button className="w-fit text-primary border-b-2 border-primary font-label font-bold py-2 hover:opacity-70 transition-opacity uppercase tracking-widest">
            VISIT WEBSITE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityInfoCards;

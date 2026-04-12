import React from 'react';
import { motion } from 'framer-motion';

const WaysToStudyCards = ({ data }) => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={data.background} 
          alt="background texture" 
          className="w-full h-full object-cover grayscale" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-headline font-bold text-on-primary mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-on-primary/80 text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.methods.map((method, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-container-lowest/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col justify-end ${!method.count ? 'pt-24' : ''}`}
            >
              {method.count && (
                <div className="text-4xl font-headline font-extrabold text-on-primary mb-4">
                  {method.count}
                </div>
              )}
              <h3 className="font-headline font-bold text-on-primary">
                {method.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToStudyCards;

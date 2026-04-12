import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experience }) => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-primary text-3xl font-black font-headline mb-12">{experience.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experience.cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-outline-variant/10 shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={card.image} 
                  alt={card.title} 
                />
              </div>
              <div className="p-8">
                <h4 className="text-primary font-headline font-bold text-xl mb-3">{card.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

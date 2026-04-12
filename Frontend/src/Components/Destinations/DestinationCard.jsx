import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ id, name, title, description, image, labels, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl border border-surface-container/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt={`Study in ${title}`}
          src={image}
        />
        <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
          {name}
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-headline text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed hidden sm:block">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {labels.map((label, i) => (
            <span key={i} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-secondary-fixed-variant uppercase">
              {label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;

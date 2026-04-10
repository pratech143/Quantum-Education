import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DestinationCard = ({ name, countryCode, description, image, tags, index }) => {
  const slug = name.toLowerCase().replace(/\s+/g, '');

  return (
    <Link to={`/countries/${slug}`} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full"
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src={image} 
            alt={`${name} campus or landmark`}
          />
          <div className="absolute top-4 left-4 glass-card px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-primary uppercase border border-white/20">
            {countryCode}
          </div>
        </div>
        
        <div className="p-8 space-y-4">
          <h3 className="font-headline text-2xl font-bold text-primary tracking-tight">
            {name}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-surface-container rounded-full text-[9px] font-black text-primary/60 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationCard;

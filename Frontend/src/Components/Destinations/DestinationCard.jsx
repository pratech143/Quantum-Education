import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DestinationCard = ({ id, name, title, slug, description, image, labels, index = 0 }) => {
  return (
    <Link to={`/countries/${slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl border border-surface-container/50 cursor-pointer"
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
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {labels.map((label, i) => (
                <span key={i} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-secondary-fixed-variant uppercase">
                  {label}
                </span>
              ))}
            </div>
            <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationCard;

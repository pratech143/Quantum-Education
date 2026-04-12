import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UniversitySection = ({ universities }) => {
  return (
    <section className="mb-20">
      <div className="px-6 flex justify-between items-end mb-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-black text-primary font-headline tracking-tight">
          Top Universities
        </h3>
        <button className="text-sm font-black text-primary flex items-center gap-1 group">
          View All 
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>
      
      <div className="flex overflow-x-auto gap-8 px-6 pb-8 no-scrollbar scroll-smooth">
        {universities.map((uni, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[320px] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
          >
            <div className="h-48 w-full relative group">
              <img 
                src={uni.image} 
                alt={uni.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            <div className="p-8">
              <h4 className="font-black text-primary text-xl mb-2 leading-tight h-14 line-clamp-2">
                {uni.name}
              </h4>
              <p className="text-on-surface-variant font-body text-sm mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">location_on</span>
                {uni.location}
              </p>
              
              <Link to={`/universities/${uni.slug}`}>
                <button className="primary-gradient w-full text-on-primary py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 text-center">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UniversitySection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

import { destinationsData } from '../../data/destinationsData';

const DestinationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter based on search query
  const filteredDestinations = destinationsData.filter(dest =>
    dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which to show
  const visibleDestinations = showAll ? filteredDestinations : filteredDestinations.slice(0, 3);

  return (
    <section id="destinations" className="py-16 md:py-20 px-6 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"
        >
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-6">Choose Your Path</h2>
            <p className="text-on-surface-variant max-w-md">Discover the distinct advantages of each major international study hub tailored to your career goals.</p>
          </div>
          
          {/* Search Bar */}
          <div className="w-full md:w-1/3 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-outline-variant bg-white focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all shadow-sm outline-none" 
              placeholder="Search countries..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleDestinations.map((dest, index) => (
            <DestinationCard key={dest.id} {...dest} index={index} />
          ))}
        </div>
        
        {/* View All Destinations Toggle Button */}
        {filteredDestinations.length > 3 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-4 rounded-xl border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              {showAll ? 'Show Less' : 'View All Destinations'}
            </button>
          </div>
        )}
        
        {filteredDestinations.length === 0 && (
           <div className="text-center py-12 text-on-surface-variant">
             No destinations found matching your search.
           </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;

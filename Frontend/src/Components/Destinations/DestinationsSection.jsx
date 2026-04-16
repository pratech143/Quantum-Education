import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../../api';
import DestinationCard from './DestinationCard';

const DestinationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getDestinations({ limit: '50' })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const apiDestinations = res.data.map((country, idx) => ({
            id: idx + 1,
            name: country.name.toUpperCase(),
            title: country.name,
            slug: country.slug,
            description: country.description,
            image: country.heroImage || '',
            labels: []
          }));
          setDestinations(apiDestinations);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filteredDestinations = destinations.filter(dest =>
    dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-72 rounded-xl bg-surface-container animate-pulse" />
            ))
          ) : (
            visibleDestinations.map((dest, index) => (
              <DestinationCard key={dest.id} {...dest} index={index} />
            ))
          )}
        </div>

        {!loading && filteredDestinations.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-4 rounded-xl border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              {showAll ? 'Show Less' : 'View All Destinations'}
            </button>
          </div>
        )}

        {!loading && filteredDestinations.length === 0 && (
           <div className="text-center py-12 text-on-surface-variant flex flex-col items-center">
             <span className="material-symbols-outlined text-5xl opacity-40 mb-4">cloud_off</span>
             <p>{searchQuery ? 'No destinations found matching your search.' : 'Unable to load destinations. Please check your connection.'}</p>
           </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;

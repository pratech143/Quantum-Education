import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

const destinationsData = [
  {
    id: 1,
    name: "USA",
    title: "United States",
    slug: "unitedstates",
    description: "The global hub for innovation, research, and high-impact career opportunities in STEM.",
    image: "/assets/images/destinations/usa.jpg",
    labels: ["Top Universities", "STEM OPT"]
  },
  {
    id: 2,
    name: "UK",
    title: "United Kingdom",
    slug: "unitedkingdom",
    description: "Centuries of academic excellence paired with a fast-tracked 2-year post-study work visa.",
    image: "/assets/images/destinations/uk.jpg",
    labels: ["Academic Heritage", "Graduate Route"]
  },
  {
    id: 3,
    name: "AUSTRALIA",
    title: "Australia",
    slug: "australia",
    description: "Dynamic cities, high quality of life, and exceptional work rights for international students.",
    image: "/assets/images/destinations/australia.jpg",
    labels: ["Lifestyle", "Post-Study Work"]
  },
  {
    id: 4,
    name: "CANADA",
    title: "Canada",
    slug: "canada",
    description: "Welcoming communities with clear pathways to permanent residency after graduation and excellent academic standards.",
    image: "/assets/images/destinations/canada.jpg",
    labels: ["Immigration Friendly", "High Standard"]
  },
  {
    id: 5,
    name: "NEW ZEALAND",
    title: "New Zealand",
    slug: "newzealand",
    description: "Stunning landscapes, safe environments, and world-class educational institutions prioritizing student well-being.",
    image: "/assets/images/destinations/newzealand.jpg",
    labels: ["Safe", "Scenic"]
  },
  {
    id: 6,
    name: "EUROPE",
    title: "Europe (Schengen)",
    slug: "germany",
    description: "Access to top schools across the EU, offering affordable tuition and rich cultural experiences across borders.",
    image: "/assets/images/destinations/europe.jpg",
    labels: ["Culture", "Affordable"]
  }
];

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

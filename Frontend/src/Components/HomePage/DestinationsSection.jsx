import React from 'react';
import { Link } from 'react-router-dom';
import { destinationsData } from '../../data/destinationsData';
import DestinationCard from '../Destinations/DestinationCard';
import Reveal from '../UX/Reveal';

const DestinationsSection = () => {
  const destinations = destinationsData.slice(0, 4);

  return (
    <section className="py-16 lg:py-24" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <Reveal>
              <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Popular Destinations</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-on-surface-variant max-w-lg text-lg">
                Choose from the world's leading educational hubs, each offering unique opportunities and global career prospects.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link 
              to="/destinations"
              className="text-primary font-bold flex items-center gap-2 hover:underline transition-all group"
            >
              View All Countries <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} {...dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
   
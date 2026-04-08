import React from 'react';
import { Link } from 'react-router-dom';
import usaImg from '../../assets/homepage/dest-usa.webp';
import ukImg from '../../assets/homepage/dest-uk.webp';
import ausImg from '../../assets/homepage/dest-australia.webp';
import canImg from '../../assets/homepage/dest-canada.webp';

const DestinationsSection = () => {
  const destinations = [
    {
      name: 'USA',
      description: 'Home to world-renowned Ivy League institutions and innovation hubs.',
      image: usaImg,
    },
    {
      name: 'UK',
      description: 'Excellence in education with a rich cultural heritage and shorter degree durations.',
      image: ukImg,
    },
    {
      name: 'Australia',
      description: 'Exceptional lifestyle combined with top-tier research universities and work rights.',
      image: ausImg,
    },
    {
      name: 'Canada',
      description: 'Diverse, welcoming, and high-quality education with excellent post-grad pathways.',
      image: canImg,
    },
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">Popular Destinations</h2>
            <p className="text-on-surface-variant max-w-lg text-lg">
              Choose from the world's leading educational hubs, each offering unique opportunities and global career prospects.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline transition-all group">
            View All Countries <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-surface-container-lowest h-[450px] transition-all duration-500 hover:-translate-y-2 shadow-sm"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={dest.image} 
                alt={`${dest.name} skyline or landscape`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full">
                <h3 className="font-headline text-3xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {dest.description}
                </p>
                <a className="inline-flex items-center gap-2 text-white font-bold text-sm hover:underline" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

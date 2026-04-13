import React from 'react';
import { Link } from 'react-router-dom';

const UniversitySpotlight = ({ universities, onViewAll }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Premium Partners</span>
          <h2 className="text-4xl font-extrabold font-headline">University Spotlight</h2>
        </div>
        <button onClick={onViewAll} className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-cyan-700 transition">
          View All <span className="material-symbols-outlined">trending_flat</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni, index) => (
          <Link to={`/universities/${uni.id}`} key={index}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={uni.name} 
                src={uni.image || '/assets/images/country/university-fallback.jpg'} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 w-full p-6 bg-tertiary-container/80 backdrop-blur-md transition-colors group-hover:bg-primary-container/90">
                <h4 className="text-white font-headline font-bold text-xl">{uni.name}</h4>
                <p className="text-white/80 text-sm">{uni.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UniversitySpotlight;

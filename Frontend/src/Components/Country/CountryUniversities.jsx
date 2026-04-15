import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CountryUniversities = ({ countryName, universities }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-12 pb-32 px-6 max-w-7xl mx-auto">
      {/* Editorial Header Section */}
      <section className="mb-12">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tight mb-4 leading-tight">
          Elite Higher Education <br/>
          <span className="text-on-primary-container">in {countryName || 'Australia'}</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Discover world-class research institutions and globally recognized degrees across {countryName || 'Australia'}'s most prestigious academic landscapes.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <div className="bg-surface-container-low p-4 rounded-xl mb-12 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-1">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface outline-none" 
            placeholder="Search by name or state..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-lowest text-on-surface-variant font-semibold rounded-xl hover:bg-white transition-colors border border-outline-variant/10">Filter</button>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni, idx) => (
            <article key={idx} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={uni.name} src={uni.img} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  {uni.location}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">{uni.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                  {uni.desc}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">QS Rank: {uni.qs}</span>
                  <Link to={`/universities/${uni.id}`} className="px-5 py-2.5 bg-surface-container text-primary text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-on-surface-variant flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-5xl opacity-40 mb-4">search_off</span>
            <h3 className="text-xl font-bold font-headline">No universities found</h3>
            <p className="text-sm mt-2">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryUniversities;

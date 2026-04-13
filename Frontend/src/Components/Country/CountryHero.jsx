import React from 'react';

const CountryHero = ({ hero }) => {
  return (
    <header className="relative w-full h-[618px] flex items-center overflow-hidden">

      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        alt={hero.title} 
        src={hero.image || '/assets/images/country/hero-fallback.jpg'} 
      />
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-tight mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            {hero.title}
          </h1>
          <p className="text-[#f0f8ff] text-xl md:text-2xl font-bold mb-8 max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {hero.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {hero.stats.map((stat, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl">
                <span className="block text-[#d0e8ff] text-sm font-label font-bold uppercase tracking-widest mb-1 drop-shadow-md">{stat.label}</span>
                <span className="text-white text-3xl font-extrabold font-headline drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CountryHero;

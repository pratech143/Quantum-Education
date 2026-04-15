import React from 'react';

const CountryHero = ({ hero }) => {
  return (
    <header className="relative w-full h-[618px] flex items-center overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt={hero.title}
        src={hero.image || '/assets/images/country/hero-fallback.jpg'}
      />
      {/* Lighter brand-tinted overlay — lets the image breathe */}
      <div className="absolute inset-0 bg-on-primary-fixed/55 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary-fixed leading-tight mb-4 drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-on-primary-container text-xl md:text-2xl font-bold mb-8 max-w-xl">
            {hero.subtitle}
          </p>

          {hero.stats?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {hero.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-primary-fixed/10 backdrop-blur-sm border border-primary-fixed/20 p-6 rounded-2xl
                    transition-all duration-300 ease-out hover:bg-primary-fixed/20 hover:border-primary-fixed/40 hover:scale-[1.03] hover:shadow-lg"
                >
                  <span className="block text-on-primary-container text-sm font-label font-bold uppercase tracking-widest mb-1">{stat.label}</span>
                  <span className="text-primary-fixed text-3xl font-extrabold font-headline">{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default CountryHero;

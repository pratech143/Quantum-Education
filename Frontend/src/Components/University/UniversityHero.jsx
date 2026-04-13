import React from 'react';

const UniversityHero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative h-[751px] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        {data.image && (
          <img
            alt={data.title}
            className="w-full h-full object-cover"
            src={data.image}
          />
        )}
        {/* Dark fade at bottom so text stays readable — no colour tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-extrabold text-on-primary tracking-tighter mb-6 leading-tight font-headline">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-fixed font-body leading-relaxed mb-10 opacity-90">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">
              {data.primaryCta || "Explore Our Programs"}
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
              {data.secondaryCta || "Virtual Tour"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityHero;

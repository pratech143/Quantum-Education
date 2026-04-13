import React from 'react';
import { Link } from 'react-router-dom';

const AlumniHero = ({ data }) => {
  if (!data) return null;

  return (
    <header className="relative w-full h-[620px] flex items-end overflow-hidden">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Alumni campus"
        src={data.image}
      />

      {/* Gradient overlay — dark top-to-bottom + no tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/85" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">
          {data.badge}
        </span>

        {/* Headline */}
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-tight mb-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]">
          {data.title}
        </h1>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {data.description}
        </p>

        {/* CTA */}
        <Link
          to={data.ctaLink}
          className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          {data.ctaText}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </header>
  );
};

export default AlumniHero;

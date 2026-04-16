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
      <div className="absolute inset-0 bg-on-primary-fixed/55"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/10 backdrop-blur-md border border-primary-fixed/20 text-primary-fixed text-xs font-bold uppercase tracking-wider mb-5">
          {data.badge}
        </span>

        {/* Headline */}
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary-fixed leading-tight mb-5 drop-shadow-lg">
          {data.title}
        </h1>

        {/* Description */}
        <p className="text-on-primary-container text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          {data.description}
        </p>

        {/* CTA */}
        <Link
          to={data.ctaLink}
          className="group relative inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wide
            overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(5,114,255,0.4)] hover:scale-105 active:scale-[0.98] transition-all duration-300"
        >
          <span className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative flex items-center gap-3">
            {data.ctaText}
            <span className="material-symbols-outlined">arrow_forward</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default AlumniHero;

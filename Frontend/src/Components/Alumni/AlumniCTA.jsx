import React from 'react';
import { Link } from 'react-router-dom';

const AlumniCTA = ({ data }) => {
  if (!data) return null;
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-2xl overflow-hidden relative p-12 md:p-24 text-center">
          {data.backgroundImage && (
            <div className="absolute inset-0 opacity-10">
              <img
                alt="Students on campus"
                className="w-full h-full object-cover"
                src={data.backgroundImage}
              />
            </div>
          )}
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-on-primary mb-6">
              {data.title}
            </h2>
            <p className="text-on-primary-container text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={data.primaryLink}
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl text-md font-bold uppercase tracking-wide hover:scale-105 transition-transform active:scale-95 shadow-lg"
              >
                {data.primaryText}
              </Link>
              <Link
                to={data.secondaryLink}
                className="border border-on-primary text-on-primary px-8 py-4 rounded-xl text-md font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                {data.secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniCTA;

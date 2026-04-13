import React from 'react';
import { Link } from 'react-router-dom';
import { alumniData } from '../../data/alumniData';
import Reveal from '../UX/Reveal';

const TestimonialsSection = () => {
  // Show only first 3 alumni on homepage
  const featuredAlumni = alumniData.alumni.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 font-body" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <Reveal>
              <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Our Global Network</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-on-surface-variant max-w-lg text-lg">
                Explore the journeys of our scholars who are now making an impact across the globe.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/alumni"
              className="border border-outline-variant text-primary px-6 py-3 rounded-xl font-bold hover:bg-surface-container-high transition-colors uppercase text-sm tracking-widest"
            >
              View All Stories
            </Link>
          </Reveal>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAlumni.map((alumni, index) => (
            <Reveal key={alumni.name + alumni.country} delay={index * 0.1}>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={alumni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={alumni.img}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="material-symbols-outlined text-3xl text-primary/30 mb-2 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    format_quote
                  </span>
                  <p className="text-on-surface-variant text-sm italic leading-relaxed mb-5 flex-1">
                    "{alumni.quote}"
                  </p>
                  <div className="border-t border-outline-variant/30 pt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-headline font-bold text-base text-primary">{alumni.name}</h3>
                      <p className="text-xs text-on-surface-variant mt-0.5">{alumni.university}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-secondary-container/40 px-3 py-1 rounded-full shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm">explore</span>
                      {alumni.degree}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

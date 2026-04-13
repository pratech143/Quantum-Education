import React, { useState } from 'react';

const AlumniGrid = ({ alumni = [], filters = [] }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = activeFilter === 'all'
    ? alumni
    : alumni.filter(a => a.country === activeFilter);

  return (
    <section className="py-24 px-6 bg-surface-container-low" id="alumni-network">
      <div className="max-w-7xl mx-auto">
        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline font-bold text-3xl text-primary mb-4">Our Global Network</h2>
            <p className="text-on-surface-variant">
              Explore the journeys of our scholars who are now making an impact across the globe.
            </p>
          </div>

          {/* Filter chips */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex gap-3 pb-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border whitespace-nowrap ${
                    activeFilter === f.value
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-lowest text-on-surface-variant border-outline hover:border-primary hover:text-primary'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((alumni) => (
            <div
              key={alumni.name + alumni.country}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
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
          ))}

          {visible.length === 0 && (
            <div className="col-span-full text-center py-16 text-on-surface-variant">
              No alumni found for this region yet.
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="border border-outline-variant text-primary px-8 py-3 rounded-xl font-bold hover:bg-surface-container-high transition-colors uppercase text-sm tracking-widest">
            Load More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniGrid;

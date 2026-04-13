import React from 'react';

const FeaturedStories = ({ stats }) => {
  if (!stats?.length) return null;
  return (
    <section className="py-16 px-6 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-primary">{s.value}</div>
              <div className="text-on-surface-variant font-medium tracking-wide uppercase text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;

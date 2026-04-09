import React from 'react';
import Reveal from '../UX/Reveal';

const TrustSection = () => {
  const stats = [
    { value: '5000+', label: 'Students Placed' },
    { value: '500+', label: 'Partner Universities' },
    { value: '95%', label: 'Visa Success Rate' },
    { value: '12+', label: 'Years Experience' },
  ];

  const partners = ['HARVARD', 'OXFORD', 'TORONTO', 'MELBOURNE', 'STANFORD'];

  return (
    <section className="py-16" style={{ background: '#F7F6F3' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform tracking-tight">
                  {stat.value}
                </div>
                <div className="text-on-surface-variant font-medium">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <div key={partner} className="h-12 w-32 flex items-center justify-center font-headline font-black text-2xl text-on-surface-variant">
                {partner}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustSection;

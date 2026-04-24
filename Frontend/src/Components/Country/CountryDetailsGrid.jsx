import React from 'react';

const CountryDetailsGrid = ({ details }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {details.map((detail, index) => (
        <div key={index} className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-transparent hover:border-primary-container transition-all">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">{detail.icon || 'info'}</span>
          <h3 className="text-xl font-bold font-headline mb-2">{detail.title}</h3>
          <p className="text-on-surface-variant text-sm">{detail.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CountryDetailsGrid;

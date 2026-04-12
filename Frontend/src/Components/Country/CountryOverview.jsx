import React from 'react';

const CountryOverview = ({ data }) => {
  return (
    <section>
      <h2 className="text-3xl font-extrabold font-headline text-primary mb-6">{data.title}</h2>
      <div className="prose prose-lg text-on-surface-variant leading-relaxed">
        {data.description.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "mt-4" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default CountryOverview;

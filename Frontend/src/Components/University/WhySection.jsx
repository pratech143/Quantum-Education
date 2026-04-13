import React from 'react';

const WhySection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16 relative">
        <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight font-headline">
          {data.title}
        </h2>
        {/* Custom academic underline based on HTML logic */}
        <div className="w-12 h-0.5 bg-primary mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {data.reasons?.map((reason, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined font-bold">{reason.icon}</span>
              <h3 className="text-xl font-bold uppercase tracking-wider font-headline">
                {reason.title}
              </h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              {reason.description}
            </p>
            {reason.link && (
              <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all mt-2" href={reason.link}>
                {reason.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;

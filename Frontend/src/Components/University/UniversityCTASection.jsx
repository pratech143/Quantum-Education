import React from 'react';

const UniversityCTASection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto primary-gradient p-12 md:p-20 rounded-2xl text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight font-headline">
          {data.title}
        </h2>
        <p className="text-xl text-on-primary-container mb-12 max-w-2xl mx-auto font-body">
          {data.description}
        </p>
        
        {data.link && (
          <a href={data.link} className="inline-block bg-white text-primary px-10 py-5 rounded-lg font-extrabold text-xl hover:shadow-lg transition-all" target="_blank" rel="noreferrer">
            {data.buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default UniversityCTASection;

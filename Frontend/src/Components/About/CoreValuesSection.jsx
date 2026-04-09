import React from 'react';

const CoreValuesSection = () => {
  const values = [
    {
      icon: 'verified',
      title: 'Integrity',
      description: 'Honest advice, always. We value transparency in every step of the visa and admission process.',
    },
    {
      icon: 'workspace_premium',
      title: 'Excellence',
      description: 'We strive for perfection in our counseling, test prep, and documentation services.',
    },
    {
      icon: 'person_pin',
      title: 'Student-First',
      description: 'Your goals are our blueprint. Every student receives a custom roadmap for their unique journey.',
    },
    {
      icon: 'public',
      title: 'Global Perspective',
      description: 'We maintain international standards and insights to give you a competitive edge.',
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-16">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl font-headline font-extrabold text-primary">Our Core Values</h2>
          <p className="text-on-surface-variant font-body">The pillars that define every interaction and recommendation we make.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl space-y-6 text-left group hover:bg-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                  {value.icon}
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary group-hover:text-white transition-colors">
                {value.title}
              </h4>
              <p className="text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;

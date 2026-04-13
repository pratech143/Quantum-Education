import React from 'react';

const AdmissionSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Entry Requirements */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10">
          <h2 className="text-3xl font-bold text-primary mb-2 font-headline">
            {data.requirementsTitle}
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8"></div>
          
          <ul className="space-y-6 mt-12">
            {data.requirements?.map((req, index) => (
              <li key={index} className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface font-headline">{req.title}</h4>
                  <p className="text-on-surface-variant text-sm">{req.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* How to Apply */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2 font-headline">
            {data.howToApplyTitle}
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8"></div>
          
          <div className="space-y-4 mt-12">
            {data.howToApply?.map((step, index) => (
              <div key={index} className="flex items-center gap-6 p-4 rounded-lg hover:bg-surface-container transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-colors flex items-center justify-center font-bold text-lg shrink-0">
                  {index + 1}
                </div>
                <p className="font-semibold text-on-surface">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;

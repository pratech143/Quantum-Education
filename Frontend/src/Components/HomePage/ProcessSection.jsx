import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      icon: 'chat',
      title: '1. Consultation',
      description: 'Discuss your goals and assess eligibility.',
    },
    {
      icon: 'menu_book',
      title: '2. Test Prep',
      description: 'Ace your language proficiency tests.',
    },
    {
      icon: 'domain',
      title: '3. University Apply',
      description: 'Submit winning applications.',
    },
    {
      icon: 'verified_user',
      title: '4. Visa Approval',
      description: 'Guided interview prep & documentation.',
    },
    {
      icon: 'flight',
      title: '5. Departure',
      description: 'Start your new life abroad with confidence.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 overflow-hidden font-body" style={{ background: '#F7F6F3' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">Your Journey to Success</h2>
          <p className="text-on-surface-variant text-lg">Five simple steps to secure your international future.</p>
        </div>
        <div className="relative">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-0.5 bg-outline-variant/30"></div>
          
          {/* Progress Line (Mobile) */}
          <div className="lg:hidden absolute left-[48px] top-12 bottom-12 w-0.5 bg-outline-variant/30"></div>
          
          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-0 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-black/5 ring-4 ring-transparent group-hover:ring-primary/10 relative z-20">
                  <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                </div>
                <div className="pt-2 md:pt-0">
                  <h4 className="font-bold text-primary text-xl mb-2">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-[200px] md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

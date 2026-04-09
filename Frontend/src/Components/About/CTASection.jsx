import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto cta-gradient rounded-xl overflow-hidden relative p-12 md:p-20 text-center shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10 select-none pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">
            public
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-tight tracking-tighter">
            Ready to write your <br /> global story?
          </h2>
          <p className="text-on-primary-container text-xl font-body">
            The world's best classrooms are waiting. Start your application today with the experts who care.
          </p>
          <div className="pt-4">
            <button className="bg-white text-primary px-10 py-5 rounded-xl font-headline font-extrabold text-lg uppercase tracking-wider hover:bg-surface-container-low transition-all shadow-2xl hover:scale-105 active:scale-95">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

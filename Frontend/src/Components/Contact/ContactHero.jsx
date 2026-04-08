import React from 'react';

const ContactHero = () => {
  return (
    <section className="py-24 px-12 bg-surface">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase mb-6">
          GET IN TOUCH
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-headline tracking-tighter leading-tight mb-6">
          Let’s Start Your <br className="hidden md:block" />
          <span className="text-[#1a5aac]">Global Journey</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
          Our expert consultants are ready to help you navigate the complexities of international education. 
          Reach out today for a personalized session.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;

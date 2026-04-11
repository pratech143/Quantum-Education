import React from 'react';
import Reveal from '../UX/Reveal';

const ContactHero = () => {
  return (
    <section className="pt-12 pb-16 px-12 bg-surface hover:bg-surface-container-low transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal delay={0.1}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            GET IN TOUCH
          </span>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-headline tracking-tighter leading-tight mb-4">
            Let’s Start Your <br className="hidden md:block" />
            <span className="text-[#1a5aac]">Global Journey</span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Our expert consultants are ready to help you navigate the complexities of international education. 
            Reach out today for a personalized session.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactHero;

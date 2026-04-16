import React from 'react';
import Reveal from '../UX/Reveal';
import aboutHeroImg from '../../assets/about-hero.png';

const ContactHero = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="University campus"
          className="w-full h-full object-cover"
          src={aboutHeroImg}
        />
        <div className="absolute inset-0 bg-on-primary-fixed/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-20 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/10 backdrop-blur-sm text-primary-fixed text-xs font-bold tracking-widest uppercase mb-4 border border-primary-fixed/20">
              GET IN TOUCH
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-fixed font-headline tracking-tighter leading-tight mb-4 drop-shadow-lg">
              Let's Start Your <br className="hidden md:block" />
              <span className="text-on-primary-container">Global Journey</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-on-primary-container font-bold text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Our expert consultants are ready to help you navigate the complexities of international education.
              Reach out today for a personalized session.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

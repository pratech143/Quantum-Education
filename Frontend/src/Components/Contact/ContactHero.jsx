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

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-20 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-[#f0f8ff] text-xs font-bold tracking-widest uppercase mb-4 shadow-md border border-white/10">
              GET IN TOUCH
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-headline tracking-tighter leading-tight mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Let's Start Your <br className="hidden md:block" />
              <span className="text-[#e2f0ff]">Global Journey</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[#f0f8ff] font-bold text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
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

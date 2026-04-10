import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../UX/Reveal';

const FinalCTASection = () => {
  return (
    <section className="w-full pt-16 pb-16 lg:pt-24 lg:pb-24 font-body" style={{ background: '#F7F6F3' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-[2rem] overflow-hidden hero-gradient p-12 md:p-16 lg:p-24 text-center shadow-2xl shadow-primary/20">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-8">
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Ready to Begin Your Global Academic Journey?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-secondary-fixed text-lg md:text-xl leading-relaxed opacity-90">
                Schedule your free session with our expert counselors today and take the first step toward your dream university.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full sm:w-auto pt-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="bg-white text-primary-container px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-headline font-bold text-lg sm:text-xl hover:scale-[1.05] transition-transform shadow-2xl shadow-black/10 active:scale-95 w-full">
                    Start Free Application
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="border-2 border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-headline font-bold text-lg sm:text-xl hover:bg-white/10 transition-colors active:scale-95 w-full">
                    Contact Our Team
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
          {/* Abstract Graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full filter blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full filter blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

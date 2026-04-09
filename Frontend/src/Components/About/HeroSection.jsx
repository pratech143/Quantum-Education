import React from 'react';
import aboutHeroImg from '../../assets/about-hero.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[751px] flex items-center pt-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs uppercase tracking-widest">
            Global Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
            Empowering <br />
            <span className="text-primary/80">Global Ambitions</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-body">
            We bridge the gap between local potential and the world's most prestigious campuses. Your journey to international excellence starts with a single, guided step.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="cta-gradient text-white px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-lg active:scale-95">
              Start Your Journey
            </button>
            <button className="bg-surface-container-highest text-on-surface font-headline font-bold px-8 py-4 rounded-xl hover:bg-outline-variant transition-colors">
              Our Success Stories
            </button>
          </div>
        </div>
        <div className="relative">
          {/* Decorative Blur Circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary-container/10 rounded-full blur-3xl"></div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
            <img 
              alt="University campus hallway" 
              className="w-full h-[500px] object-cover" 
              src={aboutHeroImg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          
          {/* Stats Floating Card */}
          <div className="absolute bottom-8 -left-8 glass-card p-6 rounded-xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary font-headline">5000+</p>
                <p className="text-xs text-on-surface-variant font-medium font-body uppercase tracking-tight">
                  Students Placed Globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

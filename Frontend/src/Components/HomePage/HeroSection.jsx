import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/homepage/hero-scholar.webp';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[870px] flex items-center overflow-hidden" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-12 lg:col-span-7 py-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
            ESTABLISHED EXCELLENCE
          </span>
          <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-6">
            Your Pathway to Study Abroad <span className="text-on-secondary-container">Starts Here</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed">
            Join thousands of Nepali students achieving their dreams in the world's most prestigious universities. Expert guidance for a brighter global future.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="hero-gradient px-8 py-4 rounded-xl text-white font-headline font-bold text-lg hover:scale-[1.02] transition-transform duration-200 shadow-xl shadow-primary/20">
              Book Free Counseling
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-outline-variant text-primary font-headline font-bold text-lg hover:bg-surface-container-low transition-colors duration-200">
              Explore Destinations
            </button>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img 
              className="w-full h-full object-cover" 
              src={heroImage} 
              alt="Diverse group of international students walking through a sunlit historic university courtyard"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Next Intake</p>
                  <p className="text-lg font-bold text-primary">September 2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

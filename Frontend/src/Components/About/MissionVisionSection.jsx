import React from 'react';
import Reveal from '../UX/Reveal';

const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">
        <Reveal direction="up" distance={40}>
          <div className="bg-surface-container-lowest h-full p-12 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-secondary-container flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                track_changes
              </span>
            </div>
            <h3 className="text-3xl font-headline font-extrabold text-primary">Our Mission</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              To provide transparent, expert, and personalized guidance for every student. We believe in high-integrity advisory services that put the student's long-term success above all else.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2} direction="up" distance={40}>
          <div className="bg-primary h-full p-12 rounded-xl space-y-4 shadow-xl group">
            <div className="w-14 h-14 bg-primary-container flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary text-3xl">
                visibility
              </span>
            </div>
            <h3 className="text-3xl font-headline font-extrabold text-on-primary">Our Vision</h3>
            <p className="text-primary-fixed-dim text-lg leading-relaxed font-body">
              To become the most trusted educational bridge for Nepali students, recognized globally for excellence in matching world-class talent with world-class education.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MissionVisionSection;

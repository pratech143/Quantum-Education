import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/About/HeroSection';
import StorySection from '../Components/About/StorySection';
import MissionVisionSection from '../Components/About/MissionVisionSection';
import CoreValuesSection from '../Components/About/CoreValuesSection';
import TeamSection from '../Components/About/TeamSection';
import CTASection from '../Components/About/CTASection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const About = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Reveal content after a micro-task to ensure mount is stable
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-surface relative min-h-screen">
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <HeroSection />
        <StorySection />
        <MissionVisionSection />
        <CoreValuesSection />
        <TeamSection />
        <CTASection />
      </div>
    </main>
  );
};

export default About;

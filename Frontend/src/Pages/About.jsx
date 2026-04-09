import React from 'react';
import HeroSection from '../Components/About/HeroSection';
import StorySection from '../Components/About/StorySection';
import MissionVisionSection from '../Components/About/MissionVisionSection';
import CoreValuesSection from '../Components/About/CoreValuesSection';
import TeamSection from '../Components/About/TeamSection';
import CTASection from '../Components/About/CTASection';

const About = () => {
  return (
    <main className="bg-surface">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/Destinations/HeroSection';
import GlobalMapSection from '../Components/Destinations/GlobalMapSection';
import DestinationsGrid from '../Components/Destinations/DestinationsGrid';
import DestinationHighlight from '../Components/Destinations/DestinationHighlight';
import BenefitsSection from '../Components/Destinations/BenefitsSection';
import ProcessTimeline from '../Components/Destinations/ProcessTimeline';
import StatsSection from '../Components/Destinations/StatsSection';
import CTASection from '../Components/Destinations/CTASection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const Destinations = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-surface selection:bg-primary-container selection:text-white relative pt-0">
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <HeroSection />
        <DestinationsGrid />
        <DestinationHighlight />
        <GlobalMapSection />
        <BenefitsSection />
        <ProcessTimeline />
        <StatsSection />
        <CTASection />
      </div>
    </main>
  );
};

export default Destinations;

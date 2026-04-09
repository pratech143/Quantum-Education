import React, { useEffect } from 'react';
import HeroSection from '../Components/Destinations/HeroSection';
import GlobalMapSection from '../Components/Destinations/GlobalMapSection';
import DestinationsGrid from '../Components/Destinations/DestinationsGrid';
import DestinationHighlight from '../Components/Destinations/DestinationHighlight';
import BenefitsSection from '../Components/Destinations/BenefitsSection';
import ProcessTimeline from '../Components/Destinations/ProcessTimeline';
import StatsSection from '../Components/Destinations/StatsSection';
import CTASection from '../Components/Destinations/CTASection';

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-surface selection:bg-primary-container selection:text-white pt-20">
      <HeroSection />
      <GlobalMapSection />
      <DestinationsGrid />
      <DestinationHighlight />
      <BenefitsSection />
      <ProcessTimeline />
      <StatsSection />
      <CTASection />
    </main>
  );
};

export default Destinations;

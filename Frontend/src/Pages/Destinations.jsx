import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/Destinations/HeroSection';
import GlobalMapSection from '../Components/Destinations/GlobalMapSection';
import DestinationsSection from '../Components/Destinations/DestinationsSection';
import WhyAbroad from '../Components/Destinations/WhyAbroad';
import JourneySection from '../Components/Destinations/JourneySection';
import OutcomesSection from '../Components/Destinations/OutcomesSection';
import CTASection from '../Components/Destinations/CTASection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const Destinations = () => {
  const [isReady, setIsReady] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

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
        <WhyAbroad />
        <DestinationsSection />

        {/* Map — fires setMapLoaded when its image is ready */}
        <GlobalMapSection onLoaded={() => setMapLoaded(true)} />

        {/* Sections below the map fade in only after map has loaded */}
        <div
          className={`transition-opacity duration-700 ${
            mapLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <JourneySection />
          <OutcomesSection />
          <CTASection />
        </div>
      </div>
    </main>
  );
};

export default Destinations;

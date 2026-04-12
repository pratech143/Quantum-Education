import React, { useState } from 'react';
import HeroSection from '../Components/HomePage/HeroSection';
import TrustSection from '../Components/HomePage/TrustSection';
import DestinationsSection from '../Components/HomePage/DestinationsSection';
import ServicesSection from '../Components/HomePage/ServicesSection';
import TestPrepSection from '../Components/HomePage/TestPrepSection';
import ProcessSection from '../Components/HomePage/ProcessSection';
import TestimonialsSection from '../Components/HomePage/TestimonialsSection';
import FinalCTASection from '../Components/HomePage/FinalCTASection';

import HomeSkeleton from '../Components/UX/HomeSkeleton';

const Home = () => {
  const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Skeleton View */}
      {!isGlobeLoaded && <HomeSkeleton />}

      {/* Real Content - Hidden until globe is ready */}
      <div className={`flex flex-col w-full bg-background overflow-x-hidden transition-opacity duration-1000 pt-0 ${isGlobeLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
        <HeroSection onGlobeReady={() => setIsGlobeLoaded(true)} />
        <TrustSection />
        <DestinationsSection />
        <ServicesSection />
        <TestPrepSection />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Home;

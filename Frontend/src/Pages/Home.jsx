import React from 'react';
import HeroSection from '../Components/HomePage/HeroSection';
import TrustSection from '../Components/HomePage/TrustSection';
import DestinationsSection from '../Components/HomePage/DestinationsSection';
import ServicesSection from '../Components/HomePage/ServicesSection';
import TestPrepSection from '../Components/HomePage/TestPrepSection';
import ProcessSection from '../Components/HomePage/ProcessSection';
import TestimonialsSection from '../Components/HomePage/TestimonialsSection';
import FinalCTASection from '../Components/HomePage/FinalCTASection';

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-background overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <DestinationsSection />
      <ServicesSection />
      <TestPrepSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;

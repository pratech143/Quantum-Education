import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import countryData from '../data/countryData.json';
import CountryPage from '../Components/Country/CountryPage';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';
import CTASection from '../Components/Destinations/CTASection';

const Country = () => {
  const { countryName } = useParams();
  
  // Try to find the data by the exact key or matching a slug
  const normalizedKey = countryName?.toLowerCase().replace(/[^a-z]/g, '');
  const data = countryData[normalizedKey] || countryData['australia']; // Fallback for safety/dev if it doesn't exist
  
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(false);
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, [countryName]);

  if (!countryData[normalizedKey]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-32 bg-background">
        <span className="material-symbols-outlined text-9xl text-primary/20 mb-6">
          explore_off
        </span>
        <h1 className="text-4xl font-black text-primary mb-4">Country Not Found</h1>
        <p className="text-on-surface-variant max-w-md mb-8 text-lg">
          We are currently expanding our reach. The destination you're looking for might be added soon!
        </p>
        <Link
          to="/countries"
          className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl inline-block"
        >
          View All Destinations
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen relative pt-0">
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        
        {/* New dynamic layout */}
        <CountryPage data={data} />

        <div className="pb-20">
           <CTASection />
        </div>
      </div>
    </main>
  );
};

export default Country;

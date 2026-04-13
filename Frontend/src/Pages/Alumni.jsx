import React, { useState, useEffect } from 'react';
import { alumniData } from '../data/alumniData';
import AlumniHero from '../Components/Alumni/AlumniHero';
import FeaturedStories from '../Components/Alumni/FeaturedStories';
import AlumniGrid from '../Components/Alumni/AlumniGrid';
import AlumniCTA from '../Components/Alumni/AlumniCTA';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

/**
 * To connect to a backend, replace the alumniData import with an API call:
 *
 *   const [data, setData] = useState(null);
 *   useEffect(() => {
 *     fetch('/api/alumni').then(r => r.json()).then(setData);
 *   }, []);
 */

const Alumni = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen relative pt-0">
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <AlumniHero data={alumniData.hero} />
        <FeaturedStories stats={alumniData.stats} />
        <AlumniGrid alumni={alumniData.alumni} filters={alumniData.filters} />
        <AlumniCTA data={alumniData.cta} />
      </div>
    </main>
  );
};

export default Alumni;
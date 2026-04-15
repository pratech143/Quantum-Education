import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { alumniData as staticAlumniData } from '../data/alumniData';
import AlumniHero from '../Components/Alumni/AlumniHero';
import FeaturedStories from '../Components/Alumni/FeaturedStories';
import AlumniGrid from '../Components/Alumni/AlumniGrid';
import AlumniCTA from '../Components/Alumni/AlumniCTA';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const Alumni = () => {
  const [isReady, setIsReady] = useState(false);
  const [alumniData, setAlumniData] = useState(staticAlumniData);

  useEffect(() => {
    window.scrollTo(0, 0);

    api.getAlumni({ limit: '50' })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          // Map API alumni into the format expected by AlumniGrid
          const apiAlumni = res.data.map((a) => ({
            name: a.name,
            university: a.university,
            degree: a.degree,
            country: a.country,
            quote: a.quote,
            img: a.image || '/assets/alumni/default.jpg'
          }));

          // Build unique filters from API data
          const countries = [...new Set(apiAlumni.map((a) => a.country))];
          const filters = [
            { label: 'All', value: 'all' },
            ...countries.map((c) => ({
              label: c.charAt(0).toUpperCase() + c.slice(1),
              value: c.toLowerCase()
            }))
          ];

          setAlumniData((prev) => ({
            ...prev,
            alumni: apiAlumni,
            filters
          }));
        }
      })
      .catch(() => {
        // Keep static data on failure
      })
      .finally(() => setIsReady(true));
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

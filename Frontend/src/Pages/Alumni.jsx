import React, { useState, useEffect } from 'react';
import { api } from '../api';
import AlumniHero from '../Components/Alumni/AlumniHero';
import FeaturedStories from '../Components/Alumni/FeaturedStories';
import AlumniGrid from '../Components/Alumni/AlumniGrid';
import AlumniCTA from '../Components/Alumni/AlumniCTA';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

// Static content — always shown regardless of backend
const staticHero = {
  title: 'Our Global Alumni Network',
  subtitle: 'Discover the journeys of our scholars making an impact across the globe.',
  badge: 'Success Stories',
  description: 'From Nepal to the world — our alumni are thriving across top universities in Australia, USA, UK, Canada, and beyond. Their journeys inspire the next generation of global scholars.',
  image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2670&auto=format&fit=crop',
  ctaText: 'Explore Destinations',
  ctaLink: '/destinations'
};

const staticStats = [];

const staticCta = {
  title: 'Ready to Write Your Own Story?',
  description: 'Join thousands of students who have transformed their careers through international education. Let us guide you to the perfect university and country.',
  primaryText: 'Start Your Journey',
  primaryLink: '/contact'
};

const Alumni = () => {
  const [isReady, setIsReady] = useState(false);
  const [alumni, setAlumni] = useState([]);
  const [filters, setFilters] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    api.getAlumni({ limit: '50' })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const apiAlumni = res.data.map((a) => ({
            name: a.name,
            university: a.university,
            degree: a.degree,
            country: a.country,
            quote: a.quote,
            img: a.image || ''
          }));

          const countries = [...new Set(apiAlumni.map((a) => a.country))];
          setFilters([
            { label: 'All', value: 'all' },
            ...countries.map((c) => ({
              label: c.charAt(0).toUpperCase() + c.slice(1),
              value: c.toLowerCase()
            }))
          ]);
          setAlumni(apiAlumni);
        }
      })
      .catch(() => {
        setApiError(true);
      })
      .finally(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return (
      <main className="bg-background min-h-screen relative pt-0">
        <GenericPageSkeleton />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen relative pt-0">
      <div className="opacity-100 transition-opacity duration-500">
        <AlumniHero data={staticHero} />
        <FeaturedStories stats={staticStats} />

        {/* Dynamic section — gracefully degrades when backend is unavailable */}
        {apiError ? (
          <section className="py-24 px-6 bg-surface-container-low">
            <div className="max-w-7xl mx-auto text-center">
              <span className="material-symbols-outlined text-6xl text-primary/20 mb-6 block">cloud_off</span>
              <h2 className="font-headline font-bold text-2xl text-primary mb-4">Alumni Stories Unavailable</h2>
              <p className="text-on-surface-variant max-w-md mx-auto">
                We're unable to load alumni stories right now. Please check back later.
              </p>
            </div>
          </section>
        ) : (
          <AlumniGrid alumni={alumni} filters={filters} />
        )}

        <AlumniCTA data={staticCta} />
      </div>
    </main>
  );
};

export default Alumni;

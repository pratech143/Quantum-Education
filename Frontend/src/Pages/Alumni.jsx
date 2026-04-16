import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import AlumniHero from '../Components/Alumni/AlumniHero';
import FeaturedStories from '../Components/Alumni/FeaturedStories';
import AlumniGrid from '../Components/Alumni/AlumniGrid';
import AlumniCTA from '../Components/Alumni/AlumniCTA';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const Alumni = () => {
  const [isReady, setIsReady] = useState(false);
  const [alumniData, setAlumniData] = useState(null);
  const [error, setError] = useState(false);

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
          const filters = [
            { label: 'All', value: 'all' },
            ...countries.map((c) => ({
              label: c.charAt(0).toUpperCase() + c.slice(1),
              value: c.toLowerCase()
            }))
          ];

          setAlumniData({
            hero: {
              title: 'Our Global Alumni Network',
              subtitle: 'Discover the journeys of our scholars making an impact across the globe.'
            },
            stats: [],
            alumni: apiAlumni,
            filters,
            cta: {
              title: 'Ready to Write Your Own Story?',
              description: 'Join thousands of students who have transformed their careers through international education.',
              buttonText: 'Start Your Journey',
              link: '/contact'
            }
          });
        }
      })
      .catch(() => {
        setError(true);
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

  if (error || !alumniData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-32 bg-background">
        <span className="material-symbols-outlined text-9xl text-primary/20 mb-6">cloud_off</span>
        <h1 className="text-4xl font-black text-primary mb-4 font-headline">Unable to Load Alumni</h1>
        <p className="text-on-surface-variant max-w-md mb-8 text-lg font-body">
          We couldn't load the alumni data. Please check your connection and try again.
        </p>
        <Link
          to="/"
          className="bg-primary text-on-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen relative pt-0">
      <div className="opacity-100 transition-opacity duration-500">
        <AlumniHero data={alumniData.hero} />
        <FeaturedStories stats={alumniData.stats} />
        <AlumniGrid alumni={alumniData.alumni} filters={alumniData.filters} />
        <AlumniCTA data={alumniData.cta} />
      </div>
    </main>
  );
};

export default Alumni;

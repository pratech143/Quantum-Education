import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';
import CountryPage from '../Components/Country/CountryPage';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';
import CTASection from '../Components/Destinations/CTASection';

const mapApiToCountryData = (apiData) => {
  const country = apiData;
  const universities = (country.universities || []).filter(u => u.type === 'UNIVERSITY');
  const colleges = (country.universities || []).filter(u => u.type === 'COLLEGE');

  return {
    hero: {
      title: `Study in ${country.name}`,
      subtitle: country.heroSubtitle || country.description,
      image: country.heroImage || '',
      stats: country.heroStats || []
    },
    overview: country.overview || {
      title: 'Country Overview',
      description: [country.description]
    },
    details: country.details || [],
    courses: country.popularCourses || [],
    admission: country.admissionRequirements || [],
    intakes: country.intakes || [],
    scholarships: country.scholarships || {},
    universities: universities.map(u => ({
      name: u.name,
      id: u.slug,
      location: u.location || '',
      desc: u.description,
      qs: u.qsRanking || `#${u.ranking}`,
      img: u.image || '',
      image: u.image || '',
      tagline: u.tagline || ''
    })),
    colleges: colleges.map(c => ({
      name: c.name,
      id: c.slug,
      location: c.location || '',
      desc: c.description,
      img: c.image || ''
    }))
  };
};

const Country = () => {
  const { countryName } = useParams();
  const normalizedKey = countryName?.toLowerCase().replace(/[^a-z]/g, '');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setNotFound(false);

    api.getDestinationBySlug(normalizedKey)
      .then((res) => {
        setData(mapApiToCountryData(res.data));
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [countryName, normalizedKey]);

  if (loading) {
    return (
      <main className="bg-background min-h-screen relative pt-0">
        <GenericPageSkeleton />
      </main>
    );
  }

  if (notFound) {
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
      <CountryPage data={data} />
      <div className="pb-20">
        <CTASection />
      </div>
    </main>
  );
};

export default Country;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';
import { universitiesData } from '../data/universitiesData';

import UniversityHero from '../Components/University/UniversityHero';
import WhySection from '../Components/University/WhySection';
import CoursesSection from '../Components/University/CoursesSection';
import AdmissionSection from '../Components/University/AdmissionSection';
import UniversityCTASection from '../Components/University/UniversityCTASection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const UniversityDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);

    // Try fetching from API first, fall back to static data
    api.getUniversityBySlug(slug)
      .then((res) => {
        const uni = res.data;
        // Map API response to component-expected format
        setData({
          hero: uni.heroData || {
            title: uni.name,
            subtitle: uni.description,
            image: uni.image,
          },
          website: uni.website || '',
          whyUniversity: uni.whySection || null,
          coursesSection: uni.coursesData || null,
          admission: uni.admissionData || null,
          ctaSection: uni.ctaData ? {
            ...uni.ctaData,
            buttonText: 'Visit Official Website',
            link: uni.website
          } : {
            title: `Ready to begin your journey?`,
            description: `Take the first step toward a global career with ${uni.name}.`,
            buttonText: 'Visit Official Website',
            link: uni.website
          }
        });
      })
      .catch(() => {
        // Fall back to local static data
        const staticData = universitiesData[slug];
        if (staticData) {
          setData(staticData);
        } else {
          setError('not_found');
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <GenericPageSkeleton />;
  }

  if (error === 'not_found' || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-32 bg-background">
        <span className="material-symbols-outlined text-9xl text-primary/20 mb-6 font-thin">
          account_balance_off
        </span>
        <h1 className="text-4xl font-black text-primary mb-4 font-headline">Institution Not Found</h1>
        <p className="text-on-surface-variant max-w-md mb-8 text-lg font-body">
          We couldn't find the institution you're looking for. Please check the URL or explore our top-tier partners.
        </p>
        <Link
          to="/destinations"
          className="bg-primary text-on-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
        >
          View All Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body">
      <UniversityHero data={data.hero} website={data.website} />
      {data.whyUniversity && <WhySection data={data.whyUniversity} />}
      {data.coursesSection && <CoursesSection data={data.coursesSection} />}
      {data.admission && <AdmissionSection data={data.admission} />}
      {data.ctaSection && <UniversityCTASection data={data.ctaSection} />}
    </div>
  );
};

export default UniversityDetails;

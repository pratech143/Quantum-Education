import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { universitiesData } from '../data/universitiesData';

import UniversityHero from '../Components/University/UniversityHero';
import WhySection from '../Components/University/WhySection';
import CoursesSection from '../Components/University/CoursesSection';
import AdmissionSection from '../Components/University/AdmissionSection';
import UniversityCTASection from '../Components/University/UniversityCTASection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const UniversityDetails = () => {
  const { slug } = useParams();
  const data = universitiesData[slug];
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(false);
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!data) {
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
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <UniversityHero data={data.hero} />
        <WhySection data={data.whyUniversity} />
        <CoursesSection data={data.coursesSection} />
        <AdmissionSection data={data.admission} />
        <UniversityCTASection data={data.ctaSection} />
      </div>
    </div>
  );
};

export default UniversityDetails;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { universitiesData } from '../data/universitiesData';
import UniversityHero from '../Components/University/UniversityHero';
import MissionSection from '../Components/University/MissionSection';
import WaysToStudyCards from '../Components/University/WaysToStudyCards';
import CoursesBentoGrid from '../Components/University/CoursesBentoGrid';
import UniversityInfoCards from '../Components/University/UniversityInfoCards';
import ScholarshipEditorial from '../Components/University/ScholarshipEditorial';
import MobileUniversityNav from '../Components/University/MobileUniversityNav';

const UniversityDetails = () => {
  const { slug } = useParams();
  const data = universitiesData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <main className="min-h-screen bg-background pt-0 pb-20 md:pb-0">
      <UniversityHero data={data.hero} />
      
      <MissionSection data={data.mission} />

      <WaysToStudyCards data={data.waysToStudy} />

      <CoursesBentoGrid data={data.courses} />

      <UniversityInfoCards data={data.admissions} />

      <ScholarshipEditorial data={data.scholarship} />

      {/* Mobile-only Persistent Navigation */}
      <MobileUniversityNav />
    </main>
  );
};

export default UniversityDetails;

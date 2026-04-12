import React, { useState } from 'react';
import CountryHero from './CountryHero';
import CountryTabs from './CountryTabs';
import CountryOverview from './CountryOverview';
import CountryDetailsGrid from './CountryDetailsGrid';
import PopularCourses from './PopularCourses';
import Sidebar from './Sidebar';
import UniversitySpotlight from './UniversitySpotlight';
import CountryColleges from './CountryColleges';
import CountryUniversities from './CountryUniversities';

const CountryPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-background w-full">
      <CountryHero hero={data.hero} />
      <CountryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'about' && (
        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Primary Info */}
          <div className="lg:col-span-8 space-y-16">
            <CountryOverview data={data.overview} />
            <CountryDetailsGrid details={data.details} />
            <PopularCourses courses={data.courses} />
          </div>
          
          {/* Right Column: Sidebar Sticky Details */}
          <Sidebar 
            admission={data.admission} 
            intakes={data.intakes} 
            scholarships={data.scholarships} 
          />
        </div>
      )}

      {activeTab === 'universities' && (
        <CountryUniversities 
          countryName={data.hero.title.replace('Study in ', '')} 
          universities={data.universities || []}
        />
      )}

      {activeTab === 'colleges' && (
        <CountryColleges colleges={data.colleges || []} />
      )}
      
      {activeTab === 'about' && (
        <UniversitySpotlight 
          universities={data.universities} 
          onViewAll={() => {
            setActiveTab('universities');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      )}
    </div>
  );
};

export default CountryPage;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countriesData } from '../data/countriesData';
import Breadcrumbs from '../Components/Country/Breadcrumbs';
import CountryHero from '../Components/Country/CountryHero';
import CountryOverview from '../Components/Country/CountryOverview';
import UniversitySection from '../Components/Country/UniversitySection';
import FinancialSection from '../Components/Country/FinancialSection';
import VisaAdmissionSection from '../Components/Country/VisaAdmissionSection';
import StudentLife from '../Components/Country/StudentLife';
import CountryFAQ from '../Components/Country/CountryFAQ';
import CTASection from '../Components/Destinations/CTASection';

const Country = () => {
  const { countryName } = useParams();
  const data = countriesData[countryName?.toLowerCase()];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryName]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-32">
        <span className="material-symbols-outlined text-9xl text-primary/20 mb-6">
          explore_off
        </span>
        <h1 className="text-4xl font-black text-primary mb-4">Country Not Found</h1>
        <p className="text-on-surface-variant max-w-md mb-8 text-lg">
          We are currently expanding our reach. The destination you're looking for might be added soon!
        </p>
        <Link 
          to="/countries" 
          className="primary-gradient text-on-primary px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
        >
          View All Destinations
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen relative pt-0">
      <Breadcrumbs countryName={data.hero.title.replace('Study in ', '')} />
      
      <CountryHero data={data.hero} />
      
      <div className="space-y-12">
        <CountryOverview data={data.overview} />
        
        <UniversitySection universities={data.universities} />
        
        <FinancialSection financials={data.financials} />
        
        <VisaAdmissionSection admission={data.admission} visa={data.visa} />
        
        <StudentLife items={data.studentLife} />
        
        <CountryFAQ faqs={data.faqs} />
        
        <div className="pb-20">
           <CTASection />
        </div>
      </div>
    </main>
  );
};

export default Country;

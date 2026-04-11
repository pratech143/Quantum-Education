import React, { useState, useEffect } from 'react';
import ContactHero from '../Components/Contact/ContactHero';
import ContactCards from '../Components/Contact/ContactCards';
import ContactFormSection from '../Components/Contact/ContactFormSection';
import MapSection from '../Components/Contact/MapSection';
import GenericPageSkeleton from '../Components/UX/GenericPageSkeleton';

const Contact = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      {!isReady && <GenericPageSkeleton />}
      <div className={isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <ContactHero />
        <ContactFormSection />
        <ContactCards />
        <MapSection />
      </div>
    </main>
  );
};

export default Contact;
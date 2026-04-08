import React from 'react';
import ContactHero from '../Components/Contact/ContactHero';
import ContactCards from '../Components/Contact/ContactCards';
import ContactFormSection from '../Components/Contact/ContactFormSection';
import MapSection from '../Components/Contact/MapSection';

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactFormSection />
      <MapSection />
    </>
  );
};

export default Contact;
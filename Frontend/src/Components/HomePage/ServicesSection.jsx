import React from 'react';
import Reveal from '../UX/Reveal';

const ServicesSection = () => {
  const services = [
    {
      icon: 'psychology',
      title: 'Career Counseling',
      description: 'Personalized sessions to align your academic choices with long-term professional aspirations.',
    },
    {
      icon: 'account_balance',
      title: 'University Selection',
      description: 'Finding the perfect fit based on your academic profile, budget, and location preferences.',
    },
    {
      icon: 'edit_document',
      title: 'Application Assistance',
      description: 'Meticulous guidance on SOPs, LORs, and documentation to ensure application success.',
    },
    {
      icon: 'assignment_turned_in',
      title: 'Visa Guidance',
      description: 'Expert navigation through complex visa processes with high success rates and mock interviews.',
    },
    {
      icon: 'featured_play_list',
      title: 'Scholarship Support',
      description: 'Identifying and applying for financial aid and merit-based grants to ease your journey.',
    },
    {
      icon: 'flight_takeoff',
      title: 'Pre-Departure Briefing',
      description: 'Comprehensive prep on culture, travel, and logistics before you embark on your global journey.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 font-body" style={{ background: '#F7F6F3' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 space-y-4">
          <Reveal>
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Our Premium Services</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Comprehensive support tailored for the ambitious student. We handle the complexities so you can focus on your future.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div 
                className="p-10 rounded-xl bg-white shadow-sm border border-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

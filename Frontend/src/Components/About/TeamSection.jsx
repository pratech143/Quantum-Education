import React from 'react';
import Reveal from '../UX/Reveal';

const TeamSection = () => {
  const team = [
    {
      name: 'Suman Thapa',
      role: 'Founder & Chief Consultant',
      description: 'With 15 years of experience, Suman has personally mentored over 2,000 students through the intricacies of international admissions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Priyanka Shrestha',
      role: 'Lead Visa Specialist',
      description: 'An expert in navigating complex visa protocols, ensuring a 98% success rate for our scholarship and student visa applicants.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Anil Gurung',
      role: 'Head of Test Prep',
      description: 'IELTS/TOEFL expert who has helped 1000+ students achieve their required band scores through innovative teaching methods.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <Reveal>
              <h2 className="text-4xl font-headline font-extrabold text-primary">The Minds Behind Your Future</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-on-surface-variant max-w-xl font-body">Meet the experts who have spent decades perfecting the art of international educational placement.</p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <button className="text-primary font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs">
              View All Experts 
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="space-y-6 group">
                <div className="rounded-xl overflow-hidden aspect-[3/4] relative shadow-lg">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={member.image} 
                  />
                  <div className="absolute bottom-4 left-4 right-4 tonal-shift-no-border p-4 rounded-xl shadow-lg">
                    <h4 className="text-lg font-bold text-primary font-headline">{member.name}</h4>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant px-2 font-body text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

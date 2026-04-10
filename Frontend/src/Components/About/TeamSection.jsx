import React from 'react';
import { motion } from 'framer-motion';
import sumanImg from '../../assets/about/team-suman.jpg';
import priyankaImg from '../../assets/about/team-priyanka.jpg';
import anilImg from '../../assets/about/team-anil.jpg';

const TeamSection = () => {
  const team = [
    {
      name: 'Suman Thapa',
      role: 'Founder & Chief Consultant',
      description: 'With 15 years of experience, Suman has personally mentored over 2,000 students through the intricacies of international admissions.',
      image: sumanImg,
    },
    {
      name: 'Priyanka Shrestha',
      role: 'Lead Visa Specialist',
      description: 'An expert in navigating complex visa protocols, ensuring a 98% success rate for our scholarship and student visa applicants.',
      image: priyankaImg,
    },
    {
      name: 'Anil Gurung',
      role: 'Head of Test Prep',
      description: 'IELTS/TOEFL expert who has helped 1000+ students achieve their required band scores through innovative teaching methods.',
      image: anilImg,
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-headline font-extrabold text-primary"
            >
              The Minds Behind Your Future
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant max-w-xl font-body"
            >
              Meet the experts who have spent decades perfecting the art of international educational placement.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs"
          >
            View All Experts 
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6 group"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4] relative shadow-lg">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={member.image} 
                />
                <div className="absolute bottom-4 left-4 right-4 glass-effect p-6 rounded-2xl shadow-xl border border-white/20">
                  <h4 className="text-xl font-bold text-primary font-headline">{member.name}</h4>
                  <p className="text-[10px] text-primary/60 font-black uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </div>
              <p className="text-on-surface-variant px-2 font-body text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

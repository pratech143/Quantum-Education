import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, GraduationCap, Award } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Exposure",
      description: "Build a global mindset and intercultural skills that employers value in today's interconnected market."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Gain work experience in international markets and top global firms with post-study work rights."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarships",
      description: "Access merit-based financial aid and grants to make elite international education affordable."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Quality Education",
      description: "Learn using world-class facilities, innovative teaching methods, and cutting-edge research technology."
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl font-extrabold text-primary tracking-tight"
          >
            The Global Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant max-w-xl mx-auto font-body text-lg"
          >
            Why studying abroad is the defining investment for your future career and personal growth.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="p-10 bg-surface border border-slate-100 rounded-2xl flex flex-col items-center text-center space-y-6 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                {benefit.icon}
              </div>
              <h4 className="font-headline text-xl font-bold text-primary">{benefit.title}</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

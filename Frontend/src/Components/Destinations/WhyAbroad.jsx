import React from 'react';
import { motion } from 'framer-motion';

const WhyAbroad = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto">

        {/* Single Unified Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-4">Why Abroad?</h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
            An international education is more than just an academic milestone; it's a transformative life experience that reshapes your perspective, expands your horizons, and serves as the defining investment for your future career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className="space-y-6">
            {[
              { icon: 'language', title: 'Global Exposure', desc: 'Immerse yourself in diverse cultures, build a global mindset, and create a truly international network of peers that employers value.' },
              { icon: 'trending_up', title: 'Exponential Career Growth', desc: 'Access world-class internships and high-impact career opportunities in the world\'s leading economies and top global firms.' },
              { icon: 'self_improvement', title: 'Personal Development', desc: 'Cultivate independence, resilience, and adaptability by navigating a new environment on your own terms.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 md:p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container text-4xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-xl">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-full pt-12">
              <img className="w-full h-full object-cover" alt="student networking in modern office" src="/assets/images/why-abroad/networking.jpg"/>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-full pb-12">
              <img className="w-full h-full object-cover" alt="student group discussions" src="/assets/images/why-abroad/group.jpg"/>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: 'school', title: 'Scholarships', desc: 'Access merit-based financial aid to make elite education affordable.' },
            { icon: 'workspace_premium', title: 'Quality Education', desc: 'Learn using world-class facilities and innovative teaching methods.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6">{item.icon}</span>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAbroad;

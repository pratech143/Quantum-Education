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
              <img className="w-full h-full object-cover" alt="student networking in modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1VlQidkgR9sSbp8ci1HweuxYhNEo3UmVpOCQ9NIk9zN4H1xMskjNPwu7N4uRfDdlKgwrXRYsnMKPTpOBE4qTKnTQvv8CQTmAkesVj7Jw7jThj_IgOqmV8Cru1pZnMyYqyPNpPChtpviReWgXe47KJpSiKHXEq1V7nBHvgzQKYo_DSlB1U5o-OEwVaNiwPJo_H_4CkQzOgP0-rpW2mAa6vRsKKrimw5mxMVah2FLoRlJ5Wn59RuaucThwKaUSOnCTZsCMFGYzIZQ"/>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-full pb-12">
              <img className="w-full h-full object-cover" alt="student group discussions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYeS6A81EJPhL8TvP89v-ehgb13M6sTARrnY3Cd1TO_0ia1zmAql2OUgS5MPC63PAyhKXoQjf1IFGhtSw8g4RIPnpbs8hX1XZid9VJW3DODykSgeAqgnQyN6kqmZR8HcgiO9qLlSkuhw3WFouxad_vmd8n2ZEjYxEw3RHwL8wEpkA68C6KaO6g71gdtouMhky_1xVkWD7snPJRWIS-Gzc1Jdr6r0EhJ7KONZP741XWagcv33MhBOxOHiM6P9GjC7MZXeOYiIj0Fz4"/>
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

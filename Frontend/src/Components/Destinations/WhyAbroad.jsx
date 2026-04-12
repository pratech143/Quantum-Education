import React from 'react';
import { motion } from 'framer-motion';

const WhyAbroad = () => {
  return (
    <section className="py-24 px-6 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto">
        
        {/* Single Unified Title */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-4">Why Abroad?</h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
            An international education is more than just an academic milestone; it's a transformative life experience that reshapes your perspective, expands your horizons, and serves as the defining investment for your future career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="p-6 md:p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container text-4xl shrink-0">language</span>
                <div>
                  <h4 className="font-headline font-bold text-primary text-xl">Global Exposure</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Immerse yourself in diverse cultures, build a global mindset, and create a truly international network of peers that employers value.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container text-4xl shrink-0">trending_up</span>
                <div>
                  <h4 className="font-headline font-bold text-primary text-xl">Exponential Career Growth</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Access world-class internships and high-impact career opportunities in the world's leading economies and top global firms.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container text-4xl shrink-0">self_improvement</span>
                <div>
                  <h4 className="font-headline font-bold text-primary text-xl">Personal Development</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Cultivate independence, resilience, and adaptability by navigating a new environment on your own terms.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="rounded-xl overflow-hidden shadow-lg h-full pt-12">
              <img className="w-full h-full object-cover" alt="student networking in modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1VlQidkgR9sSbp8ci1HweuxYhNEo3UmVpOCQ9NIk9zN4H1xMskjNPwu7N4uRfDdlKgwrXRYsnMKPTpOBE4qTKnTQvv8CQTmAkesVj7Jw7jThj_IgOqmV8Cru1pZnMyYqyPNpPChtpviReWgXe47KJpSiKHXEq1V7nBHvgzQKYo_DSlB1U5o-OEwVaNiwPJo_H_4CkQzOgP0-rpW2mAa6vRsKKrimw5mxMVah2FLoRlJ5Wn59RuaucThwKaUSOnCTZsCMFGYzIZQ"/>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-full pb-12">
              <img className="w-full h-full object-cover" alt="student group discussions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYeS6A81EJPhL8TvP89v-ehgb13M6sTARrnY3Cd1TO_0ia1zmAql2OUgS5MPC63PAyhKXoQjf1IFGhtSw8g4RIPnpbs8hX1XZid9VJW3DODykSgeAqgnQyN6kqmZR8HcgiO9qLlSkuhw3WFouxad_vmd8n2ZEjYxEw3RHwL8wEpkA68C6KaO6g71gdtouMhky_1xVkWD7snPJRWIS-Gzc1Jdr6r0EhJ7KONZP741XWagcv33MhBOxOHiM6P9GjC7MZXeOYiIj0Fz4"/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6">school</span>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">Scholarships</h4>
              <p className="text-on-surface-variant text-sm">Access merit-based financial aid to make elite education affordable.</p>
            </div>
            
            <div className="p-8 bg-surface border border-outline-variant/15 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6">workspace_premium</span>
              <h4 className="font-headline text-xl font-bold text-primary mb-3">Quality Education</h4>
              <p className="text-on-surface-variant text-sm">Learn using world-class facilities and innovative teaching methods.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAbroad;

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest h-full p-12 rounded-3xl shadow-sm space-y-6 hover:shadow-xl transition-all group border border-slate-100"
        >
          <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
            <Target className="text-primary w-8 h-8" />
          </div>
          <h3 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Our Mission</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed font-body">
            To provide transparent, expert, and personalized guidance for every student. We believe in high-integrity advisory services that put the student's long-term success above all else.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="primary-gradient h-full p-12 rounded-3xl space-y-6 shadow-2xl group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform relative z-10">
            <Eye className="text-white w-8 h-8" />
          </div>
          <h3 className="text-4xl font-headline font-extrabold text-white tracking-tight relative z-10">Our Vision</h3>
          <p className="text-white/80 text-lg leading-relaxed font-body relative z-10">
            To become the most trusted educational bridge for Nepali students, recognized globally for excellence in matching world-class talent with world-class education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

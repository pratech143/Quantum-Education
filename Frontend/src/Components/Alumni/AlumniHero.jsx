import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroCampus from '../../assets/Alumni/hero-campus.jpg';

const stats = [
  { value: '5000+', label: 'Students Placed' },
  { value: '500+', label: 'Partner Universities' },
  { value: '95%', label: 'Visa Success Rate' },
  { value: '12+', label: 'Years Experience' },
];

const AlumniHero = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="classic university campus facade"
          src={heroCampus}
        />
        <div className="absolute inset-0 bg-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-5"
            >
              Alumni Excellence
            </motion.span>

            <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 tracking-tighter">
              Celebrating <span className="text-white/70">Global Success</span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              With over 5,000+ placements in prestigious universities worldwide, our alumni are shaping the future across industries. Your international journey begins where theirs did.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-xl text-md font-bold uppercase tracking-wide transition-all shadow-lg flex items-center gap-3"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col group"
              >
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">
                  {stat.value}
                </div>
                <div className="h-1 w-8 bg-white/30 mb-2 rounded-full"></div>
                <div className="text-white/70 font-black tracking-widest uppercase text-[9px] md:text-[10px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniHero;

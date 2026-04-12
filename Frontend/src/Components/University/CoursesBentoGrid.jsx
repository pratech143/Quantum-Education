import React from 'react';
import { motion } from 'framer-motion';

const CoursesBentoGrid = ({ data }) => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">
              {data.title}
            </h2>
            <div className="w-24 h-1.5 bg-primary/20 rounded-full"></div>
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
            VISIT SITE
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.list.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className={`p-6 rounded-xl font-headline font-semibold text-primary shadow-sm hover:shadow-md transition-shadow
                ${course.includes('/') ? 'bg-surface-container-highest lg:col-span-2' : 'bg-surface-container hover:bg-surface-container-high'}`}
            >
              {course}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesBentoGrid;

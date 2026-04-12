import React from 'react';
import { motion } from 'framer-motion';

const AcademicGrid = ({ programs, popularCourses }) => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Program Types */}
          <div className="flex-1">
            <h3 className="text-primary text-3xl font-black font-headline mb-12">{programs.title}</h3>
            <div className="space-y-6">
              {programs.programs.map((program, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-xl bg-surface-container-low border border-transparent hover:border-outline-variant/30 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h5 className="text-primary font-headline font-bold text-lg">{program.name}</h5>
                    <p className="text-on-surface-variant text-sm">{program.details}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    {program.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div className="flex-1">
            <h3 className="text-primary text-3xl font-black font-headline mb-12">{popularCourses.title}</h3>
            <div className="divide-y divide-surface-container-highest">
              {popularCourses.courses.map((course, i) => (
                <div key={i} className="py-4 flex items-center justify-between group cursor-pointer">
                  <span className="text-on-surface font-medium group-hover:text-primary transition-colors">
                    {course.name}
                  </span>
                  <span className="text-xs font-headline font-bold text-outline-variant uppercase">
                    {course.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicGrid;

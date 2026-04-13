import React from 'react';
import { Link } from 'react-router-dom';

const UniversityNavbar = ({ data }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            school
          </span>
          <span className="text-xl font-extrabold tracking-tight text-primary font-headline">
            {data?.name || "Global Scholar"}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-primary font-semibold border-b-2 border-primary transition-colors">
            Programs
          </Link>
          <Link to="#" className="text-slate-600 hover:text-primary transition-colors">
            Admissions
          </Link>
          <Link to="#" className="text-slate-600 hover:text-primary transition-colors">
            Scholarships
          </Link>
          <Link to="#" className="text-slate-600 hover:text-primary transition-colors">
            Campus Life
          </Link>
        </nav>
        <button className="bg-primary hover:opacity-90 active:scale-95 transition-all duration-150 text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide">
          Apply Now
        </button>
      </div>
    </header>
  );
};

export default UniversityNavbar;

import React from 'react';

const MobileUniversityNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around p-3 md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_24px_rgba(0,53,68,0.06)] scale-100 group">
      <a className="flex flex-col items-center gap-1 text-primary bg-primary/10 rounded-xl px-4 py-2 scale-105 transition-all duration-200" href="#">
        <span className="material-symbols-outlined">info</span>
        <span className="text-[10px] font-inter uppercase tracking-widest font-bold">Overview</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 px-4 py-2 rounded-xl" href="#">
        <span className="material-symbols-outlined">menu_book</span>
        <span className="text-[10px] font-inter uppercase tracking-widest font-bold">Courses</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 px-4 py-2 rounded-xl" href="#">
        <span className="material-symbols-outlined">assignment_ind</span>
        <span className="text-[10px] font-inter uppercase tracking-widest font-bold">Admission</span>
      </a>
    </nav>
  );
};

export default MobileUniversityNav;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ admission, intakes, scholarships }) => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Admission Checklist */}
      <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold font-headline mb-6">Admission Criteria</h3>
        <ul className="space-y-4">
          {admission.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-fixed-dim">check_circle</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="block text-center w-full mt-8 bg-white text-primary py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
          Check Eligibility
        </Link>
      </div>

      {/* Intake Periods */}
      <div className="bg-surface-container-highest p-8 rounded-xl">
        <h3 className="text-xl font-bold font-headline text-primary mb-4">Major Intakes</h3>
        <div className="space-y-4">
          {intakes.map((intake, index) => (
            <div key={index} className={`flex justify-between items-center ${index !== intakes.length - 1 ? 'pb-3 border-b border-outline-variant/30' : ''}`}>
              <span className="font-bold">{intake.name}</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase">{intake.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarships */}
      <div className="p-8 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl border border-on-tertiary-fixed-variant/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
          <h3 className="text-xl font-bold font-headline">Scholarships</h3>
        </div>
        <p className="text-sm leading-relaxed mb-4">{scholarships.description}</p>
        <Link to="/contact" className="inline-flex items-center text-sm font-bold border-b-2 border-on-tertiary-fixed-variant pb-1 hover:text-primary transition-colors">
          Browse Scholarships
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

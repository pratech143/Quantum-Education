import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ countryName }) => {
  return (
    <nav className="px-6 py-4 flex items-center gap-2 text-sm font-medium text-on-surface-variant overflow-x-auto no-scrollbar whitespace-nowrap">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      <span className="material-symbols-outlined text-xs">chevron_right</span>
      <Link to="/countries" className="hover:text-primary transition-colors">Destinations</Link>
      <span className="material-symbols-outlined text-xs">chevron_right</span>
      <span className="text-primary font-semibold">{countryName}</span>
    </nav>
  );
};

export default Breadcrumbs;

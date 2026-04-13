import React from 'react';
import { Link } from 'react-router-dom';

const UniversityFooter = ({ data }) => {
  if (!data) return null;

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              school
            </span>
            <span className="font-headline font-bold text-primary dark:text-white text-xl">
              {data.name || "Global Scholar"}
            </span>
          </div>
          <p className="font-body text-sm text-slate-600 dark:text-slate-400">
            {data.brandDesc}
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Navigation</h4>
          <ul className="space-y-3 font-body text-sm text-slate-600">
            {data.navigationUrls?.map((nav, index) => (
              <li key={index}>
                <Link to={nav.link} className="hover:underline decoration-primary underline-offset-4 hover:text-primary transition-colors">
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-3 font-body text-sm text-slate-600">
            {data.resourcesUrls?.map((res, index) => (
              <li key={index}>
                <Link to={res.link} className="hover:underline decoration-primary underline-offset-4 hover:text-primary transition-colors">
                  {res.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Connect</h4>
          <div className="flex gap-4">
            {data.socials?.map((social, index) => (
              <a key={index} href={social.link} className="text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <p className="font-body text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
          {data.copyright}
        </p>
      </div>
    </footer>
  );
};

export default UniversityFooter;

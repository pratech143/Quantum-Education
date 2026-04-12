import React from 'react';

const CountryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className="sticky top-16 z-40 bg-white shadow-sm border-b border-surface-container-high">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center space-x-12 h-16">
          <button 
            onClick={() => setActiveTab('about')}
            className={`relative h-full px-2 font-bold font-headline transition-colors whitespace-nowrap ${activeTab === 'about' ? 'text-primary border-b-4 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('universities')}
            className={`relative h-full px-2 font-bold font-headline transition-colors whitespace-nowrap ${activeTab === 'universities' ? 'text-primary border-b-4 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Universities
          </button>
          <button 
            onClick={() => setActiveTab('colleges')}
            className={`relative h-full px-2 font-bold font-headline transition-colors whitespace-nowrap ${activeTab === 'colleges' ? 'text-primary border-b-4 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Colleges
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountryTabs;

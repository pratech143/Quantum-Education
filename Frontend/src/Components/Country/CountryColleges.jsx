import React from 'react';

const CountryColleges = ({ colleges }) => {
  return (
    <div className="pt-12 px-6 max-w-7xl mx-auto">
      {/* Hero Header Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Vocational Excellence</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Discover Australia's leading colleges and vocational institutions offering specialized training and pathways to global careers.
        </p>
      </section>

      {/* Colleges Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colleges.map((college, idx) => (
          <div key={idx} className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={college.name} src={college.img} />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{college.location}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">{college.name}</h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 flex-grow">{college.desc}</p>
              <button className="w-full mt-auto py-3 px-6 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-all active:scale-95">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section (Asymmetric Editorial Style) */}
      <section className="mt-20 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center bg-primary p-8 lg:p-16 rounded-[2.5rem] text-on-primary">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Why Choose Australian Vocational Education?</h2>
            <p className="text-on-primary-container text-lg mb-8 leading-relaxed">
              Australia's VET system is internationally recognized for its practical, skills-based approach. Gain hands-on experience and industry connections that put you ahead in the global job market.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-medium">Direct pathways to University</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-medium">Focus on employability &amp; practical skills</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-medium">Industry-standard training facilities</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img className="w-full h-full object-cover" alt="Students studying" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC55HMxsxvg7vFPWeEQwHWW5jrptIyOkwb0JrT8EesAn7L9qudLOgFvO0ZydTUiZKwJXs3O-laWkBznN7npRS7F84s_a8dSgfEkv0etalQbpEWmADMCTtyXdKiOU8R21Lb-o2aRB6tFAqz6HXnkybltTVaNRIX9_RWzQh7VZm1zKHk5unP-jauktIiElMPa8DitxKHTZf3CTsmL4TiRfnhzvfOMsWD_3cPkuvlRK6pwunZPj-vIdoFdTCznF9RClz2RbEpxU0Tzz0"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-tertiary-container text-white p-6 rounded-2xl shadow-xl -rotate-3 hidden md:block">
              <p className="text-2xl font-black">92%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Graduate Employment Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryColleges;

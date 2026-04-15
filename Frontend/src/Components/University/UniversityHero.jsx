import React from 'react';

const UniversityHero = ({ data, website }) => {
  if (!data) return null;

  const handleExploreCourses = () => {
    const coursesEl = document.getElementById('courses-section');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[751px] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        {data.image && (
          <img
            alt={data.title}
            className="w-full h-full object-cover"
            src={data.image}
          />
        )}
        {/* Lighter brand-tinted overlay — lets the image breathe */}
        <div className="absolute inset-0 bg-on-primary-fixed/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-transparent to-primary-container/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary-fixed tracking-tighter mb-6 leading-tight font-headline drop-shadow-lg">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container font-body leading-relaxed mb-10">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleExploreCourses}
              className="group relative bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg
                overflow-hidden transition-all duration-300 ease-out
                hover:shadow-[0_8px_30px_rgba(5,114,255,0.4)] hover:scale-105 active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative">Explore Courses</span>
            </button>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-fixed/10 backdrop-blur-md border border-primary-fixed/25 text-primary-fixed px-8 py-4 rounded-lg font-bold text-lg
                  transition-all duration-300 ease-out
                  hover:bg-primary-fixed/20 hover:border-primary-fixed/50 hover:shadow-[0_8px_30px_rgba(185,234,255,0.15)] hover:scale-105 active:scale-[0.98]"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityHero;

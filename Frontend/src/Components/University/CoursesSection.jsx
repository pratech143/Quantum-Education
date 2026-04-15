import React from 'react';

const CoursesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="courses-section" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight font-headline">
              {data.title}
            </h2>
            <div className="w-12 h-0.5 bg-primary mt-2"></div>
            <p className="text-on-surface-variant max-w-xl mt-6">{data.description}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-outline-variant/10">
          <div className="divide-y divide-outline-variant/20">
            {data.courses?.map((course, index) => (
              <div key={index} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface-container-lowest transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">{course.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary font-headline">{course.title}</h4>
                    <p className="text-on-surface-variant">{course.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {course.tag && (
                    <span className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-widest ${course.tagStyle || 'bg-secondary-container text-on-secondary-container'}`}>
                      {course.tag}
                    </span>
                  )}
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

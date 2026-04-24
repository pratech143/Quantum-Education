import React, { useState } from 'react';

const CoursesSection = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!data) return null;

  const toggle = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

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
            {data.courses?.map((course, index) => {
              const isExpanded = expandedIndex === index;
              const hasDetails = course.fees || course.duration || course.semesters || course.scope || course.details;

              return (
                <div key={index}>
                  {/* Course header row */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface-container-lowest transition-colors gap-4 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">{course.icon || 'school'}</span>
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
                      <span className={`material-symbols-outlined text-outline-variant transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </div>
                  </button>

                  {/* Expanded details */}
                  {isExpanded && hasDetails && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="ml-10 border-t border-outline-variant/30 pt-6">
                        {/* Quick info pills */}
                        {(course.fees || course.duration || course.semesters) && (
                          <div className="flex flex-wrap gap-3 mb-6">
                            {course.fees && (
                              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-lg">payments</span>
                                <div>
                                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Fees</p>
                                  <p className="text-sm font-bold text-on-surface">{course.fees}</p>
                                </div>
                              </div>
                            )}
                            {course.duration && (
                              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                <div>
                                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Duration</p>
                                  <p className="text-sm font-bold text-on-surface">{course.duration}</p>
                                </div>
                              </div>
                            )}
                            {course.semesters && (
                              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                                <div>
                                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Semesters</p>
                                  <p className="text-sm font-bold text-on-surface">{course.semesters}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Scope */}
                        {course.scope && (
                          <div className="mb-5">
                            <h5 className="text-sm font-bold text-primary font-headline mb-1.5">Scope in Country</h5>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{course.scope}</p>
                          </div>
                        )}

                        {/* Other Details */}
                        {course.details && (
                          <div>
                            <h5 className="text-sm font-bold text-primary font-headline mb-1.5">Additional Details</h5>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{course.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

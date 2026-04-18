import React from 'react';

const PopularCourses = ({ courses }) => {
  return (
    <section className="bg-surface-container-low rounded-xl p-10">
      <h2 className="text-3xl font-extrabold font-headline text-primary mb-8">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">{course.icon || 'school'}</span>
            </div>
            <h4 className="font-bold font-headline">{course.title}</h4>
            <p className="text-xs text-on-surface-variant mt-2">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;

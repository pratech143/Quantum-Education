import React from 'react';
import testPrepImg from '../../assets/homepage/test-prep-focus.webp';

const TestPrepSection = () => {
  const courses = [
    {
      id: '01',
      title: 'IELTS Preparation',
      description: 'Academic & General training with weekly mock tests.',
      borderColor: 'border-primary',
      numColor: 'text-primary/20',
    },
    {
      id: '02',
      title: 'TOEFL iBT',
      description: 'Comprehensive computer-based training sessions.',
      borderColor: 'border-secondary',
      numColor: 'text-secondary/20',
    },
    {
      id: '03',
      title: 'PTE Academic',
      description: 'Intensive coaching with AI-scored evaluation tools.',
      borderColor: 'border-tertiary-container',
      numColor: 'text-tertiary-container/20',
    },
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Two-column grid: stacks on mobile, side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
              Master Your Language Proficiency
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Our certified trainers use globally-recognized methodologies to help you achieve your target scores in the first attempt.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white transition-all hover:bg-gray-50 border-l-4 ${course.borderColor} shadow-sm group cursor-pointer hover:shadow-md`}
                >
                  {/* Course number — hidden on very small screens */}
                  <div className={`hidden xs:block shrink-0 text-2xl sm:text-3xl font-black ${course.numColor} transition-colors group-hover:text-primary/40 w-10 text-center`}>
                    {course.id}
                  </div>

                  {/* Course info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-primary text-base sm:text-xl mb-1 truncate">{course.title}</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-snug">{course.description}</p>
                  </div>

                  {/* Enroll button */}
                  <button className="shrink-0 bg-primary text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-md hover:scale-[1.05] active:scale-95 transition-all">
                    Enroll
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image — hides on mobile to keep layout clean, shows on lg+ */}
          <div className="hidden lg:block relative">
            <div className="relative mx-auto w-full max-w-[500px]">
              {/* Circular image */}
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-gray-200 shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src={testPrepImg}
                  alt="Focused student writing in a clean, modern classroom"
                />
              </div>

              {/* Floating social proof card */}
              <div className="absolute top-8 -right-4 xl:right-0 bg-white p-5 rounded-2xl shadow-xl max-w-[210px] border border-black/5">
                <div className="flex -space-x-2 mb-3">
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">AS</div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">RK</div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-[10px] font-bold text-sky-600">BT</div>
                </div>
                <p className="text-xs font-bold text-primary leading-snug">
                  Join 500+ active students training this month.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile-only: small social proof banner below courses */}
        <div className="mt-8 flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5 lg:hidden">
          <div className="flex -space-x-2 shrink-0">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">AS</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">RK</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-[10px] font-bold text-sky-600">BT</div>
          </div>
          <p className="text-xs sm:text-sm font-bold text-primary leading-snug">
            Join 500+ active students training this month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestPrepSection;

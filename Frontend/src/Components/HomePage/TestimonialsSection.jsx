import React from 'react';
import anjaliImg from '../../assets/homepage/testimonial-anjali.webp';
import sandeepImg from '../../assets/homepage/testimonial-sandeep.webp';
import rinaImg from '../../assets/homepage/testimonial-rina.webp';
import Reveal from '../UX/Reveal';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Anjali Sharma',
      location: 'University of Sydney, Australia',
      image: anjaliImg,
      text: '"The Global Scholar made a daunting process feel simple. Their visa guidance was impeccable, and I\'m now living my dream in Sydney!"',
    },
    {
      name: 'Sandeep Koirala',
      location: 'University of Toronto, Canada',
      image: sandeepImg,
      text: '"From IELTS prep to pre-departure, the team was with me every step. Their scholarship search helped me save $5,000 on tuition."',
    },
    {
      name: 'Rina Thapa',
      location: 'King\'s College London, UK',
      image: rinaImg,
      text: '"Their SOP review is what really made the difference for my UK application. I highly recommend them to all students in Nepal."',
    },
  ];

  return (
    <section className="py-16 lg:py-24 font-body overflow-hidden" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <Reveal>
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Student Success Stories</h2>
          </Reveal>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300 active:scale-90">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300 active:scale-90">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div 
                className="p-8 rounded-2xl bg-surface-container-low relative border border-black/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-white border-2 border-primary/10" 
                      src={testimonial.image} 
                      alt={`Portrait of ${testimonial.name}`}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[14px]">format_quote</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-lg leading-tight">{testimonial.name}</h5>
                    <p className="text-xs text-on-surface-variant mt-1 font-medium">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-on-surface italic leading-relaxed text-[15px] text-gray-700">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex text-tertiary-container gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined !text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React, { useState, useEffect } from 'react';
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
      text: '"Quantum Education made a daunting process feel simple. Their visa guidance was impeccable, and I\'m now living my dream in Sydney!"',
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
    {
      name: 'Bibek Gautam',
      location: 'Melbourne Institute of Technology, Australia',
      image: sandeepImg, // Using same image for mock, ideal to use different mock if available
      text: '"Got amazing guidance on selecting the right university based on my profile. Highly impressed by their professionalism and dedication."',
    },
    {
      name: 'Sushma Gurung',
      location: 'University of Westminster, UK',
      image: anjaliImg, // Using same image for mock
      text: '"The team helped me understand the differences between programs and locations. Now I am thriving in London thanks to them!"',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    // Initial setup
    handleResize();
    
    // Listener for subsequent resizes
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure current index doesn't go out of bounds if resizing window up
  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      // Loop back to the first set if we are at the end
      return prevIndex < maxIndex ? prevIndex + 1 : 0;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      // Loop to the last set if we are at the beginning
      return prevIndex > 0 ? prevIndex - 1 : maxIndex;
    });
  };

  return (
    <section className="py-16 lg:py-24 font-body overflow-hidden" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <Reveal>
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Student Success Stories</h2>
          </Reveal>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300 active:scale-90"
              aria-label="Previous Testimonial"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300 active:scale-90"
              aria-label="Next Testimonial"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden -mx-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <Reveal delay={(index % itemsPerView) * 0.1}>
                  <div className="h-full p-8 rounded-2xl bg-surface-container-low relative border border-black/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group flex flex-col justify-between">
                    <div>
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
                    </div>
                    <div className="mt-6 flex text-tertiary-container gap-0.5 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined !text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

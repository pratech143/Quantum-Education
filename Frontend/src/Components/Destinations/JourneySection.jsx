import React from 'react';
import StepCard from './StepCard';

const JourneySection = () => {
  const steps = [
    {
      id: 1,
      icon: "map",
      title: "Choose Destination",
      description: "Identify the best fit for your goals."
    },
    {
      id: 2,
      icon: "description",
      title: "Apply",
      description: "Professional documentation support."
    },
    {
      id: 3,
      icon: "assignment_turned_in",
      title: "Visa",
      description: "Expert visa guidance and processing."
    },
    {
      id: 4,
      icon: "flight_takeoff",
      title: "Fly Abroad",
      description: "Pre-departure briefing and departure."
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-16 text-center">
          Your Journey To <br/>Global Excellence
        </h2>
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-4 items-center lg:items-start justify-between">
          <StepCard {...steps[0]} />
          
          <div className="hidden lg:block absolute top-10 left-[15%] w-[15%] h-0.5 border-t-2 border-dashed border-outline-variant"></div>
          
          <StepCard {...steps[1]} />
          
          <div className="hidden lg:block absolute top-10 left-[40%] w-[15%] h-0.5 border-t-2 border-dashed border-outline-variant"></div>
          
          <StepCard {...steps[2]} />
          
          <div className="hidden lg:block absolute top-10 left-[65%] w-[15%] h-0.5 border-t-2 border-dashed border-outline-variant"></div>
          
          <StepCard {...steps[3]} />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

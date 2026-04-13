import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    icon: "map",
    title: "Choose Destination",
    description: "Identify the best country and university that fits your goals and career vision."
  },
  {
    id: 2,
    icon: "description",
    title: "Apply",
    description: "We handle professional documentation, SOPs, and applications end-to-end."
  },
  {
    id: 3,
    icon: "assignment_turned_in",
    title: "Visa",
    description: "Expert visa guidance, interview prep, and error-free processing."
  },
  {
    id: 4,
    icon: "flight_takeoff",
    title: "Fly Abroad",
    description: "Pre-departure briefing, accommodation support, and a confident departure."
  }
];

const JourneySection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            The Process
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary">
            Your Journey To <br className="hidden md:block" />Global Excellence
          </h2>
        </motion.div>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center flex-1 px-4"
              >
                {/* Number + Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform"
                  >
                    <span className="material-symbols-outlined text-3xl text-white">{step.icon}</span>
                  </motion.div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface border-2 border-primary text-primary text-xs font-black flex items-center justify-center">
                    {step.id}
                  </span>
                </div>
                <h5 className="font-headline font-bold text-lg text-primary mb-2">{step.title}</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector — only between cards, not after last */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-start pt-10 flex-shrink-0 w-12">
                  <div className="w-full flex items-center gap-1">
                    <div className="flex-1 border-t-2 border-dashed border-primary/30" />
                    <span className="material-symbols-outlined text-base text-primary/40">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
              )}

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <div className="h-8 border-l-2 border-dashed border-primary/30" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

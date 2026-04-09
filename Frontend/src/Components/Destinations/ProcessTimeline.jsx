import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, ClipboardCheck, PlaneTakeoff } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "Choose Destination",
      description: "Identify the best fit for your goals."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Apply",
      description: "Professional documentation support."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Visa",
      description: "Expert visa guidance and processing."
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8" />,
      title: "Fly Abroad",
      description: "Pre-departure briefing and departure."
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-extrabold text-primary mb-20 text-center tracking-tight"
        >
          Your Journey To Global Excellence
        </motion.h2>
        
        <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-4 items-center lg:items-start justify-between">
          {/* Dashed Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 pointer-events-none">
            <svg width="100%" height="2" className="overflow-visible">
              <motion.line 
                x1="0" y1="1" x2="100%" y2="1" 
                stroke="#0572ff" 
                strokeWidth="2" 
                strokeDasharray="8,8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center max-w-[240px] group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full primary-gradient flex items-center justify-center text-white mb-8 shadow-xl relative z-10"
              >
                {step.icon}
                {/* Step Number Badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-xs font-black shadow-md border-2 border-primary">
                  {index + 1}
                </div>
              </motion.div>
              
              <h5 className="font-bold text-primary text-xl mb-3 font-headline group-hover:text-primary transition-colors">
                {step.title}
              </h5>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

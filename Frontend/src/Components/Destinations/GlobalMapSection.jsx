import React from 'react';
import { motion } from 'framer-motion';

const GlobalMapSection = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-bold text-primary mb-6"
        >
          Our Global Footprint
        </motion.h2>
        
        <div className="flex justify-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl font-black text-primary mb-2">25+</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Countries</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-primary mb-2">5000+</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Students Placed</div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] min-h-[450px] flex items-center justify-center">
        {/* SVG World Map Placeholder/Stylized */}
        <svg 
          viewBox="0 0 1000 450" 
          className="w-full h-full opacity-20 text-primary pointer-events-none"
          fill="currentColor"
        >
          {/* Simple stylized world map paths (Simplified representation) */}
          <path d="M150,150 Q200,100 250,150 T350,150" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M600,100 Q650,50 700,100 T800,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
          {/* ... in a real app, we'd use a full GeoJSON SVG path ... */}
          {/* I will use a generic world map pattern or the downloaded image as a background if SVG is too complex to code manually here */}
        </svg>

        {/* Since manual SVG paths for a whole world map are huge, I'll use a clean background image with SVG overlays for points and lines */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-10 mix-blend-multiply grayscale"></div>
        </div>

        {/* Connection Arcs (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 450">
          {/* Nepal Point Core (Origin - Calibrated to circled region) */}
          <circle cx="695" cy="164" r="3" className="fill-primary/60" />
          <circle cx="695" cy="164" r="8" className="stroke-primary/20 fill-none animate-pulse" strokeWidth="1" />
          
          {/* Animated Arcs to destinations */}
          
          {/* Nepal to USA */}
          <motion.path 
            d="M 695 164 Q 462 20 230 157" 
            fill="none" 
            stroke="#0572ff" 
            strokeWidth="1.5" 
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Nepal to Canada */}
          <motion.path 
            d="M 695 164 Q 457 10 220 112" 
            fill="none" 
            stroke="#0572ff" 
            strokeWidth="1.5" 
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Nepal to UK */}
          <motion.path 
            d="M 695 164 Q 595 80 495 117" 
            fill="none" 
            stroke="#0572ff" 
            strokeWidth="1.5" 
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.1, ease: "easeInOut" }}
          />

          {/* Nepal to Denmark */}
          <motion.path 
            d="M 695 164 Q 610 70 525 99" 
            fill="none" 
            stroke="#0572ff" 
            strokeWidth="1.5" 
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Nepal to Australia */}
          <motion.path 
            d="M 695 164 Q 787 280 880 342" 
            fill="none" 
            stroke="#0572ff" 
            strokeWidth="1.5" 
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.7, ease: "easeInOut" }}
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-surface-container-low pointer-events-none"></div>
      </div>
    </section>
  );
};

export default GlobalMapSection;

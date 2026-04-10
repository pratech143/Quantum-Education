import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Users, Sun, Landmark, GraduationCap } from 'lucide-react';
import ukHighlightImg from '../../assets/destinations/uk-highlight.jpg';
import ausHighlightImg from '../../assets/destinations/australia-highlight.jpg';

import { Link } from 'react-router-dom';

const DestinationHighlight = () => {
  return (
    <section className="bg-primary text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Highlight UK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight">Focus On: The United Kingdom</h2>
            
            <ul className="space-y-8">
              <HighlightItem 
                icon={<Landmark className="text-primary-container w-6 h-6" />}
                title="World Ranking Institutions"
                description="Study at universities consistently ranked in the global top 100."
              />
              <HighlightItem 
                icon={<CreditCard className="text-primary-container w-6 h-6" />}
                title="Tuition Range"
                description="£12,000 – £35,000 per year (Scholarships available up to 50%)."
              />
              <HighlightItem 
                icon={<GraduationCap className="text-primary-container w-6 h-6" />}
                title="Post-Study Work Rights"
                description="2-year Graduate Route visa allowing you to work in any sector."
              />
            </ul>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-xl"
              >
                Explore Universities
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <img 
              className="w-full h-full object-cover" 
              alt="Iconic UK landmarks architecture" 
              src={ukHighlightImg} 
            />
          </motion.div>
        </div>

        {/* Highlight Australia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <img 
              className="w-full h-full object-cover" 
              alt="Sydney Opera House at sunset" 
              src={ausHighlightImg} 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight">Focus On: Australia</h2>
            
            <ul className="space-y-8">
              <HighlightItem 
                icon={<Sun className="text-primary-container w-6 h-6" />}
                title="Exceptional Quality of Life"
                description="Experience some of the world's most liveable cities and outdoor culture."
              />
              <HighlightItem 
                icon={<Landmark className="text-primary-container w-6 h-6" />}
                title="Tuition Range"
                description="A$25,000 – A$45,000 per year with extensive regional incentives."
              />
              <HighlightItem 
                icon={<Users className="text-primary-container w-6 h-6" />}
                title="Global Community"
                description="A vibrant melting pot of international students and professional networks."
              />
            </ul>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-xl"
              >
                Explore Universities
              </motion.button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const HighlightItem = ({ icon, title, description }) => (
  <motion.li 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-lg text-white">{title}</h4>
      <p className="text-white/60 text-sm font-body leading-relaxed">{description}</p>
    </div>
  </motion.li>
);

export default DestinationHighlight;

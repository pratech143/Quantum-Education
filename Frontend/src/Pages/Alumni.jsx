import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AlumniHero from '../Components/Alumni/AlumniHero';
import AlumniStats from '../Components/Alumni/AlumniStats';
import FeaturedStories from '../Components/Alumni/FeaturedStories';
import AlumniGrid from '../Components/Alumni/AlumniGrid';
import AlumniCTA from '../Components/Alumni/AlumniCTA';

const Alumni = () => {
  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen"
    >
      <AlumniHero />
      <AlumniStats />
      <FeaturedStories />
      <AlumniGrid />
      <AlumniCTA />
    </motion.main>
  );
};

export default Alumni;
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import storyAaryav from '../../assets/Alumni/story-aaryav.jpg';
import storyPriya from '../../assets/Alumni/story-priya.jpg';

const StoryCard = ({ image, quote, name, university, reversed = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center md:items-stretch`}
    >
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden group bg-surface-container-low shadow-sm">
        <img 
          className="w-full h-full object-cover aspect-[4/5] md:aspect-auto group-hover:scale-110 transition-transform duration-700 ease-out" 
          src={image} 
          alt={name} 
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
        <Quote className="text-secondary-container w-12 h-12 mb-4 opacity-50" />
        <p className="font-body italic text-lg text-on-surface-variant mb-6 leading-relaxed">
          "{quote}"
        </p>
        <h4 className="font-headline font-bold text-primary text-xl">{name}</h4>
        <p className="text-sm font-medium text-secondary">{university}</p>
      </div>
    </motion.div>
  );
};

const FeaturedStories = () => {
  const stories = [
    {
      name: "Aaryav M.",
      university: "University of Oxford, UK",
      quote: "The Global Scholar didn't just help with my visa; they helped me find a community. My time at Oxford has been transformative, both personally and professionally.",
      image: storyAaryav,
      reversed: false
    },
    {
      name: "Priya R.",
      university: "MIT, USA",
      quote: "From the first consultation to landing in Boston, the support was seamless. I am now pursuing my dream research in AI thanks to their expert guidance.",
      image: storyPriya,
      reversed: true
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline font-bold text-3xl md:text-5xl text-primary mb-20 text-center tracking-tight"
        >
          Voices of Success
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;

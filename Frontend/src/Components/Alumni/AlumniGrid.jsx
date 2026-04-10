import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import alumniAnjali from '../../assets/Alumni/alumni-anjali.jpg';
import alumniSandeep from '../../assets/Alumni/alumni-sandeep.jpg';
import alumniRitika from '../../assets/Alumni/alumni-ritika.jpg';
import alumniDeepak from '../../assets/Alumni/alumni-deepak.jpg';

const AlumniCard = ({ name, university, program, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
    >
      <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
          src={image} 
          alt={name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="font-headline font-bold text-xl text-primary mb-1">{name}</h3>
      <p className="text-sm text-on-surface-variant mb-4 font-medium">{university}</p>
      <div className="flex items-center gap-2 text-xs font-bold text-primary bg-secondary-container/40 px-3 py-2 rounded-full w-fit">
        <MapPin className="w-3 h-3" />
        {program}
      </div>
    </motion.div>
  );
};

const AlumniGrid = () => {
  const alumni = [
    {
      name: "Anjali S.",
      university: "University of Sydney, Australia",
      program: "Masters in Biotech",
      image: alumniAnjali
    },
    {
      name: "Sandeep K.",
      university: "University of Toronto, Canada",
      program: "MBA Finance",
      image: alumniSandeep
    },
    {
      name: "Ritika P.",
      university: "Monash University, Australia",
      program: "Nursing",
      image: alumniRitika
    },
    {
      name: "Deepak B.",
      university: "Technical University of Munich, Germany",
      program: "MEng Automotive",
      image: alumniDeepak
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-headline font-bold text-3xl md:text-4xl text-primary mb-4 tracking-tight"
            >
              Our Global Network
            </motion.h2>
            <p className="text-on-surface-variant text-lg">Explore the journeys of our scholars who are now making an impact across the globe.</p>
          </div>
          <motion.button 
            whileHover={{ x: 8 }}
            className="text-primary font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2 hover:text-secondary transition-colors"
          >
            Filter by Country <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((person, index) => (
            <AlumniCard key={person.name} {...person} index={index} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-outline-variant text-primary px-10 py-4 rounded-xl font-headline font-bold hover:bg-white hover:border-primary transition-all uppercase text-sm tracking-widest"
          >
            Load More Success Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AlumniGrid;

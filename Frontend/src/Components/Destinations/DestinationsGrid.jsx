import React from 'react';
import DestinationCard from './DestinationCard';
import usaImg from '../../assets/destinations/usa.jpg';
import ukImg from '../../assets/destinations/uk.jpg';
import ausImg from '../../assets/destinations/australia.jpg';
import canImg from '../../assets/destinations/canada.jpg';
import gerImg from '../../assets/destinations/germany.jpg';
import jpnImg from '../../assets/destinations/japan.jpg';

const DestinationsGrid = () => {
  const destinations = [
    {
      name: "United States",
      countryCode: "USA",
      description: "The global hub for innovation, research, and high-impact career opportunities in STEM.",
      image: usaImg,
      tags: ["Top Universities", "STEM OPT"]
    },
    {
      name: "United Kingdom",
      countryCode: "UK",
      description: "Centuries of academic excellence paired with a fast-tracked 2-year post-study work visa.",
      image: ukImg,
      tags: ["Academic Heritage", "Graduate Route"]
    },
    {
      name: "Australia",
      countryCode: "AUSTRALIA",
      description: "Dynamic cities, high quality of life, and exceptional work rights for international students.",
      image: ausImg,
      tags: ["Lifestyle", "Post-Study Work"]
    },
    {
      name: "Canada",
      countryCode: "CANADA",
      description: "Welcoming multiculturalism with some of the most accessible pathways to permanent residency.",
      image: canImg,
      tags: ["PR Pathways", "Safe Environment"]
    },
    {
      name: "Germany",
      countryCode: "GERMANY",
      description: "The pinnacle of engineering and technology with low-to-no tuition fees at public universities.",
      image: gerImg,
      tags: ["Low Tuition", "Engineering Excellence"]
    },
    {
      name: "Japan",
      countryCode: "JAPAN",
      description: "Merge tradition with cutting-edge technology and unique scholarship programs for Asian students.",
      image: jpnImg,
      tags: ["Advanced Tech", "Rich Culture"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl font-extrabold text-primary tracking-tight">
            Choose Your Path
          </h2>
          <p className="text-on-surface-variant max-w-md font-body text-lg">
            Discover the distinct advantages of each major international study hub tailored to your career goals.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((dest, index) => (
          <DestinationCard 
            key={dest.name}
            {...dest}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationsGrid;

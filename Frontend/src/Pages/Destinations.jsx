import React from 'react';
import Reveal from '../Components/UX/Reveal';

const Destinations = () => {
  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <Reveal>
        <h1 className='text-4xl font-bold text-gray-800 mb-4 font-headline'>Destinations</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className='text-xl text-gray-600 font-body'>Welcome to the Destinations page.</p>
      </Reveal>
    </div>
  );
};

export default Destinations;

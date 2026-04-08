import React from 'react';

const PagePlaceholder = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-xl text-gray-600">Information about {title} will be displayed here.</p>
    </div>
  );
};

export default PagePlaceholder;

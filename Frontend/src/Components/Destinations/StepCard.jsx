import React from 'react';

const StepCard = ({ icon, title, description }) => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-[200px] w-full">
      <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-white mb-6 shadow-lg transition-transform hover:scale-110">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h5 className="font-bold text-primary mb-2">{title}</h5>
      <p className="text-xs text-on-surface-variant">{description}</p>
    </div>
  );
};

export default StepCard;

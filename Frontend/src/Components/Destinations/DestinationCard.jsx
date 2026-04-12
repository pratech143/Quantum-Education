import React from 'react';

const DestinationCard = ({ id, name, title, description, image, labels }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 shadow-sm hover:shadow-xl border border-surface-container/50">
      <div className="relative aspect-video overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={`Study in ${title}`} 
          src={image} 
        />
        <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
          {name}
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-headline text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed hidden sm:block">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {labels.map((label, index) => (
            <span key={index} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-secondary-fixed-variant uppercase">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

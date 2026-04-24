import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedNewsCard = ({ news }) => {
    const navigate = useNavigate();

    if (!news) return null;

    return (
        <article 
            onClick={() => navigate(`/news/${news.id}`)}
            className="md:col-span-8 group cursor-pointer border border-[#E6EBED] rounded-xl overflow-hidden bg-white hover:border-[#CBD5E1] hover:shadow-[0px_4px_20px_rgba(0,53,68,0.04)] transition-all duration-300"
        >
            <div className="flex flex-col h-full">
                <div className="h-64 md:h-96 w-full overflow-hidden">
                    <img 
                        src={news.image} 
                        alt={news.headTitle} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="p-md md:p-lg flex flex-col flex-grow">
                    <span className="font-label-caps text-label-caps text-on-primary-container mb-xs uppercase font-inter">
                        {news.label}
                    </span>
                    <h3 className="font-h2 text-h2 text-primary group-hover:text-primary-container transition-colors mb-xs font-manrope">
                        {news.headTitle}
                    </h3>
                    <p className="text-on-secondary-fixed-variant font-body-md text-body-md mb-md italic font-inter">
                        {news.subtitle}
                    </p>
                    <p className="text-on-surface-variant font-body-md text-body-md line-clamp-3 mb-auto font-inter">
                        {news.description}
                    </p>
                    <div className="mt-lg pt-md border-t border-[#E6EBED] flex items-center justify-between">
                        <div className="flex items-center gap-xs">
                            <span className="material-symbols-outlined text-primary-container">
                                {news.icon || 'calendar_today'}
                            </span>
                            <span className="font-meta text-meta text-outline font-inter">
                                {news.date}
                            </span>
                        </div>
                        <span className="font-label-caps text-label-caps text-primary-container flex items-center gap-1 font-inter">
                            Read Analysis <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FeaturedNewsCard;

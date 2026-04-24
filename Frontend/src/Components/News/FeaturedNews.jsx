import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedNews = ({ news }) => {
    const navigate = useNavigate();
    if (!news) return null;

    return (
        <section className="mb-xl">
            <div 
                onClick={() => navigate(`/news/${news.id}`)}
                className="group cursor-pointer"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
                    <div className="lg:col-span-8 overflow-hidden">
                        <img 
                            src={news.image} 
                            alt={news.headTitle} 
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-center py-md lg:pl-sm border-l border-slate-100">
                        <span className="font-label-caps text-label-caps text-primary-container mb-xs uppercase">
                            {news.category === 'notice' ? 'Featured Notice' : 'Latest News'}
                        </span>
                        <h1 className="font-h1 text-h1 text-primary mb-sm group-hover:text-primary-container transition-colors">
                            {news.headTitle}
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
                            {news.description.substring(0, 160)}...
                        </p>
                        <div className="flex items-center gap-md">
                            <span className="font-meta text-meta text-outline">
                                {news.date}
                            </span>
                            <span className="h-px w-8 bg-outline-variant"></span>
                            <span className="font-meta text-meta text-primary-container font-bold">
                                Read Full Article
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedNews;

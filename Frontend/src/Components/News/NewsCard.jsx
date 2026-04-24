import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    if (!news) return null;

    return (
        <article className="group bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(0,53,68,0.06)]">
            <div className="aspect-[16/10] overflow-hidden">
                <img 
                    src={news.image} 
                    alt={news.headTitle} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
            </div>
            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 font-label-caps text-[10px] rounded-full uppercase tracking-tighter ${
                        news.label === 'news' ? 'bg-primary-container/10 text-primary-container' : 
                        'bg-secondary-container/30 text-secondary'
                    }`}>
                        {news.label}
                    </span>
                    <span className="font-meta text-meta text-outline">{news.readTime || '5 min read'}</span>
                </div>
                <h3 className="font-h2 text-h2 text-primary mb-3 group-hover:text-surface-tint transition-colors">
                    {news.headTitle}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary font-bold mb-4 uppercase tracking-tight">
                    {news.series || news.subtitle}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
                    {news.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="font-meta text-meta text-outline">{news.date}</span>
                    <Link 
                        to={`/news/${news.id}`}
                        className="flex items-center gap-2 text-primary-container font-label-caps text-label-caps hover:gap-3 transition-all"
                    >
                        Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;

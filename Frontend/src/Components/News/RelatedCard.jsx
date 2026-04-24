import React from 'react';
import { Link } from 'react-router-dom';

const RelatedCard = ({ id, tag, title, date }) => {
    return (
        <Link 
            to={`/news/${id}`}
            className="group flex items-center p-4 bg-white border border-slate-100 rounded-xl hover:border-slate-300 transition-colors shadow-[0_4px_20px_rgba(0,53,68,0.02)]"
        >
            <div className="flex-1">
                <span className="font-label-caps text-[10px] text-surface-tint uppercase mb-1 block">
                    {tag}
                </span>
                <h4 className="font-h3 text-[16px] text-primary leading-snug group-hover:text-surface-tint transition-colors">
                    {title}
                </h4>
                <p className="font-meta text-meta text-outline mt-2">
                    {date}
                </p>
            </div>
            <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
                chevron_right
            </span>
        </Link>
    );
};

export default RelatedCard;

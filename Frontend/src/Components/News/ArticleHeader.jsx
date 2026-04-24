import React from 'react';

const ArticleHeader = ({ news }) => {
    if (!news) return null;

    return (
        <header className="mb-12">
            <span className="inline-block bg-secondary-container text-primary-container px-3 py-1.5 font-label-caps text-label-caps uppercase mb-6 rounded-lg">
                {news.label}
            </span>
            <h1 className="font-h1 text-h1 text-primary mb-4 leading-tight">
                {news.headTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                {news.subtitle}
            </p>
            <div className="flex items-center gap-6 border-y border-slate-100 py-4">
                <div className="flex items-center gap-3">
                    <img 
                        src={news.authorImage} 
                        alt="Author" 
                        className="w-8 h-8 rounded-full border border-slate-200" 
                    />
                    <div>
                        <p className="font-meta text-meta text-primary font-bold">{news.author}</p>
                        <p className="font-meta text-meta text-outline">{news.authorRole}</p>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-100"></div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px]">calendar_today</span>
                    <span className="font-meta text-meta text-outline">{news.date}</span>
                </div>
            </div>
        </header>
    );
};

export default ArticleHeader;

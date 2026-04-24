import React from 'react';

const NoticeHeader = ({ news }) => {
    if (!news) return null;

    return (
        <div className="mb-md">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full mb-4">
                {news.subtitle}
            </span>
            <h1 className="font-h1 text-display-lg text-primary mb-4 leading-tight">
                {news.headTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-outline-variant">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">school</span>
                    </div>
                    <span className="font-meta text-meta text-on-surface">{news.author}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                <time className="font-meta text-meta text-on-surface-variant uppercase tracking-wider">
                    {news.date}
                </time>
                <div className="ml-auto flex gap-2">
                    <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">share</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoticeHeader;

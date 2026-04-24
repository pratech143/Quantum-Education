import React from 'react';
import Breadcrumb from './Breadcrumb';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import RelatedNotices from './RelatedNotices';

const ArticlePage = ({ news, relatedNotices }) => {
    if (!news) return null;

    return (
        <>
            <main className="max-w-[800px] mx-auto px-6 py-12 md:py-20">
                {/* Breadcrumb */}
                <Breadcrumb />

                {/* Article Header */}
                <ArticleHeader news={news} />

                {/* Hero Image & Body */}
                <ArticleBody news={news} />

                {/* Related News Section */}
                <RelatedNotices data={relatedNotices} />
            </main>

            {/* BottomNavBar (Mobile Only) */}
            <nav className="fixed bottom-0 w-full flex justify-around items-center px-4 py-3 md:hidden bg-white/90 backdrop-blur-md dark:bg-slate-950/90 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,53,68,0.04)] z-50">
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 scale-95 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-manrope text-[11px] font-semibold uppercase tracking-wider">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center text-cyan-950 dark:text-teal-400 bg-slate-50 dark:bg-slate-900 rounded-xl px-3 py-1 scale-95 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">newspaper</span>
                    <span className="font-manrope text-[11px] font-semibold uppercase tracking-wider">News</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 scale-95 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">campaign</span>
                    <span className="font-manrope text-[11px] font-semibold uppercase tracking-wider">Notices</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 scale-95 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="font-manrope text-[11px] font-semibold uppercase tracking-wider">Saved</span>
                </div>
            </nav>
        </>
    );
};

export default ArticlePage;

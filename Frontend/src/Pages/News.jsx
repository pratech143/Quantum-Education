import React, { useState, useEffect } from 'react';
import { api } from '../api';
import NewsCard from '../Components/News/NewsCard';

const News = () => {
    const [activeTab, setActiveTab] = useState('news');
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const load = async () => {
            setLoading(true);
            try {
                const res = await api.getNews();
                setNewsItems(res.data || []);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };
        load();
    }, []);

    // Filter data based on active tab
    const filteredNews = newsItems.filter(item => 
        activeTab === 'news' ? item.label === 'news' : item.label === 'notice'
    );

    return (
        <main className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 min-h-screen">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="font-display-lg text-display-lg text-primary mb-4">News & Notices</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    Stay informed with the latest academic insights, global scholarship updates, and institutional announcements from our global network of premier universities.
                </p>
            </div>

            {/* Semantic Tabs */}
            <div className="flex gap-12 mb-16 border-b border-outline-variant/30 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button 
                    onClick={() => setActiveTab('news')}
                    className={`pb-4 font-label-caps text-label-caps tracking-widest relative transition-colors ${
                        activeTab === 'news' ? 'text-primary-container' : 'text-outline hover:text-primary'
                    }`}
                >
                    NEWS
                    {activeTab === 'news' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container"></span>}
                </button>
                <button 
                    onClick={() => setActiveTab('notices')}
                    className={`pb-4 font-label-caps text-label-caps tracking-widest relative transition-colors ${
                        activeTab === 'notices' ? 'text-primary-container' : 'text-outline hover:text-primary'
                    }`}
                >
                    NOTICE
                    {activeTab === 'notices' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container"></span>}
                </button>
            </div>

            {/* Grid of Cards */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : filteredNews.length === 0 ? (
                <div className="text-center py-20 text-on-surface-variant font-body-lg">
                    No articles found for this category.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            )}

            {/* Pagination/Load More */}
            <div className="mt-24 flex justify-center">
                <button className="px-10 py-5 border-2 border-primary-container text-primary-container font-label-caps text-label-caps rounded-full hover:bg-primary-container hover:text-white transition-all duration-300 font-bold tracking-widest">
                    VIEW OLDER ARTICLES
                </button>
            </div>
        </main>
    );
};

export default News;

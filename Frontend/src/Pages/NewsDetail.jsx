import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import ArticlePage from '../Components/News/ArticlePage';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [relatedNotices, setRelatedNotices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const load = async () => {
            setIsLoading(true);
            try {
                const res = await api.getNewsById(id);
                const item = res.data;
                setNews(item);

                // Get related notices from the same category
                const allRes = await api.getNews();
                const allNews = allRes.data || [];
                const related = allNews
                    .filter(n => n.id !== id && item && n.label === item.label)
                    .slice(0, 2);
                setRelatedNotices(related);
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        };
        load();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!news) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
                <h2 className="text-3xl font-black text-primary mb-4">Article Not Found</h2>
                <p className="text-on-surface-variant mb-8 text-center text-lg">The requested academic article is currently unavailable.</p>
                <button 
                    onClick={() => window.history.back()}
                    className="bg-primary-container text-white px-8 py-3 font-bold"
                >
                    Back to News
                </button>
            </div>
        );
    }

    return (
        <ArticlePage news={news} relatedNotices={relatedNotices} />
    );
};

export default NewsDetail;

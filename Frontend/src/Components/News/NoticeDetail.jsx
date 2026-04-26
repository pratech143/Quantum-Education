import React from 'react';
import { Link } from 'react-router-dom';
import NoticeHeader from './NoticeHeader';
import NoticeContent from './NoticeContent';
import NoticeSidebar from './NoticeSidebar';
import RelatedNotices from './RelatedNotices';

const NoticeDetail = ({ news, relatedNotices }) => {
    if (!news) return null;

    return (
        <main className="pt-24 pb-32 max-w-[1280px] mx-auto px-6">
            <div className="max-w-[800px] mx-auto">
                {/* Breadcrumb / Back Navigation */}
                <nav className="mb-lg flex items-center gap-2">
                    <Link 
                        to="/news" 
                        className="font-meta text-meta text-on-primary-container hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        Back to Notices
                    </Link>
                </nav>

                <article>
                    {/* Top Section (Badge, Title, Metadata) */}
                    <NoticeHeader news={news} />

                    {/* Image + Full Content Section */}
                    <NoticeContent news={news} />

                    {/* "Need Clarification?" Section */}
                    <NoticeSidebar />

                    {/* Bottom Related Items Grid */}
                    <RelatedNotices data={relatedNotices} />
                </article>
            </div>
        </main>
    );
};

export default NoticeDetail;

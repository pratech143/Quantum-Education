import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <nav className="mb-12">
            <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-primary-container font-body-sm font-semibold hover:opacity-70 transition-opacity"
            >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span>Back to News</span>
            </Link>
        </nav>
    );
};

export default Breadcrumb;

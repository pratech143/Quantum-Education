import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {data.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </section>
    );
};

export default NewsList;

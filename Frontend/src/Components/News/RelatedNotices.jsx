import React from 'react';
import RelatedCard from './RelatedCard';

const RelatedNotices = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <section className="mt-20 pt-12 border-t border-slate-100">
            <h3 className="font-h2 text-h2 text-primary mb-8">Related Notices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((item) => (
                    <RelatedCard 
                        key={item.id}
                        id={item.id}
                        tag={item.category}
                        title={item.headTitle}
                        date={item.date}
                    />
                ))}
            </div>
        </section>
    );
};

export default RelatedNotices;

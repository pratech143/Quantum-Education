import React from 'react';

const ArticleBody = ({ news }) => {
    if (!news) return null;

    // Render structured content if available
    const renderContent = () => {
        if (!news.content || !Array.isArray(news.content)) return null;

        return news.content.map((block, idx) => {
            switch (block.type) {
                case 'heading':
                    return <h2 key={idx} className="font-h2 text-h2 text-primary pt-8 mb-4">{block.value}</h2>;
                case 'subheading':
                    return <h3 key={idx} className="font-h3 text-h3 text-primary pt-6 mb-3">{block.value}</h3>;
                case 'paragraph':
                    return <p key={idx} className="mb-6">{block.value}</p>;
                case 'list':
                    return (
                        <ul key={idx} className="list-disc pl-6 space-y-3 mb-8">
                            {Array.isArray(block.value) && block.value.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    );
                case 'quote':
                    return (
                        <blockquote key={idx} className="my-12 border-l-4 border-primary-container bg-surface-container-low p-8 rounded-r-xl">
                            <p className="font-h3 text-h3 text-primary-container italic mb-4">"{block.value}"</p>
                            {block.author && <cite className="font-meta text-meta text-primary not-italic font-bold">— {block.author}</cite>}
                        </blockquote>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <>
            {/* Hero Image */}
            <figure className="mb-16">
                <img 
                    src={news.image} 
                    alt="Hero" 
                    className="w-full h-auto rounded-xl shadow-sm border border-slate-200" 
                />
                <figcaption className="font-meta text-meta text-outline mt-3 italic text-center">
                    {news.caption}
                </figcaption>
            </figure>

            {/* Article Body */}
            <article className="prose prose-slate max-w-none">
                <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {/* Render dynamic content if it exists, otherwise fallback to description */}
                    {news.content && Array.isArray(news.content) && news.content.length > 0 ? (
                        renderContent()
                    ) : (
                        news.description.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-6">{paragraph}</p>
                        ))
                    )}
                </div>
            </article>
        </>
    );
};

export default ArticleBody;

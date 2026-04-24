import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="mt-xl bg-primary-container text-white p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-md">
            <div className="max-w-xl text-center md:text-left">
                <h2 className="font-h2 text-h2 mb-xs text-on-primary font-manrope">Stay Informed</h2>
                <p className="font-body-md text-body-md text-on-primary-container opacity-90">
                    Receive weekly curated bulletins on global education trends and urgent deadline notices directly in your inbox.
                </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-xs">
                <input 
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-md py-sm w-full md:w-72 focus:ring-1 focus:ring-white outline-none" 
                    placeholder="Email Address" 
                    type="email"
                />
                <button className="bg-white text-primary px-lg py-sm font-bold uppercase text-sm tracking-widest hover:bg-slate-100 transition-colors">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsletterSection;

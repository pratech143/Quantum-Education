import React from 'react';

const NoticeSidebar = () => {
    return (
        <aside className="p-lg bg-surface-container rounded-xl border border-outline-variant">
            <div className="flex items-center gap-4 mb-md">
                <span className="material-symbols-outlined text-primary text-3xl">info</span>
                <div>
                    <h4 className="font-h3 text-h3 text-primary">Need Clarification?</h4>
                    <p className="font-meta text-meta text-on-surface-variant">Department-specific town halls will be held next week.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-primary-container text-white font-manrope font-bold text-sm rounded transition-all active:scale-95 flex items-center justify-center gap-2">
                    Download Full PDF
                    <span className="material-symbols-outlined text-base">download</span>
                </button>
                <button className="px-6 py-3 border border-primary-container text-primary-container font-manrope font-bold text-sm rounded hover:bg-surface-container-high transition-all active:scale-95">
                    Contact Academic Affairs
                </button>
            </div>
        </aside>
    );
};

export default NoticeSidebar;

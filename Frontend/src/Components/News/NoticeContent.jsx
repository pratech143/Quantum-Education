import React from 'react';

const NoticeContent = ({ news }) => {
    if (!news) return null;

    return (
        <div className="mb-xl">
            <figure className="w-full h-[450px] bg-surface-container rounded-xl overflow-hidden mb-8">
                <img 
                    src={news.image} 
                    alt={news.headTitle} 
                    className="w-full h-full object-cover grayscale-[0.2] contrast-125"
                />
                <figcaption className="p-4 bg-surface-container-low font-meta text-meta text-on-surface-variant italic">
                    {news.caption || "The new framework will be implemented across all Tier 1 research facilities."}
                </figcaption>
            </figure>
            
            <div className="prose max-w-none space-y-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                    Following an extensive two-year review process involving faculty chairs, student representatives, and external accreditation bodies, the University Senate has formally ratified the <strong>2024-25 Assessment Framework</strong>. This document outlines the fundamental shifts in how qualitative research outcomes will be measured across post-graduate disciplines.
                </p>
                
                <h2 className="font-h2 text-h2 text-primary pt-sm">Key Strategic Objectives</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                    The primary objective of this revision is to transition from traditional rigid examination structures to a more holistic, portfolio-based approach. This shift acknowledges the diverse nature of modern research and provides candidates with more flexible avenues to demonstrate mastery of their subject area.
                </p>
                
                <div className="p-md bg-surface-container-low border-l-4 border-primary-container rounded-r-lg my-lg">
                    <p className="font-body-md text-body-md text-primary italic">
                        "The move toward a diversified assessment model ensures that our graduates are not just technically proficient, but possess the critical agility required in the global research economy."
                        <span className="block mt-2 font-meta text-meta not-italic text-on-surface-variant">— Dr. Elena Vance, Provost</span>
                    </p>
                </div>
                
                <h3 className="font-h3 text-h3 text-primary">Core Implementation Details</h3>
                <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-1">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant"><strong>Enhanced Peer Review:</strong> Integration of double-blind peer reviews as a standard 15% component of module assessments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-1">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant"><strong>Interdisciplinary Credits:</strong> Recognition of research activities conducted across departments within the framework of a single module.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-1">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant"><strong>Digital Portfolio:</strong> Mandatory maintenance of a live research log documenting methodology evolution.</span>
                    </li>
                </ul>
                
                <h2 className="font-h2 text-h2 text-primary pt-sm">Timeline for Transition</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                    Effective from the Spring 2025 semester, all Level 7 and Level 8 modules will migrate to this framework. Students currently in the middle of their research cycle will have the option to opt-in or remain under the legacy assessment guidelines for the duration of the current academic year.
                </p>
            </div>
        </div>
    );
};

export default NoticeContent;

import React from 'react';
import { motion } from 'framer-motion';

const VisaAdmissionSection = ({ admission, visa }) => {
  return (
    <section className="px-6 mb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Admission Criteria */}
        <div className="space-y-8">
          <h3 className="text-3xl font-black text-primary font-headline tracking-tight">
            Admission Criteria
          </h3>
          
          <div className="space-y-6">
            <div className="p-8 bg-surface-container-high rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary p-3 bg-white rounded-2xl shadow-sm">description</span>
                <h4 className="font-black text-primary text-xl">Document Checklist</h4>
              </div>
              <ul className="grid grid-cols-1 gap-4 text-on-surface-variant font-bold">
                {admission.checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface-container-high rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary p-3 bg-white rounded-2xl shadow-sm">translate</span>
                <h4 className="font-black text-primary text-xl">Language Proficiency</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl text-center shadow-sm">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase mb-2 tracking-widest">IELTS</p>
                  <p className="text-2xl font-black text-primary tracking-tighter">{admission.language.ielts}</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl text-center shadow-sm">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase mb-2 tracking-widest">TOEFL iBT</p>
                  <p className="text-2xl font-black text-primary tracking-tighter">{admission.language.toefl}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visa & Work Rights */}
        <div className="space-y-8">
          <h3 className="text-3xl font-black text-primary font-headline tracking-tight">
            Visa & Work Rights
          </h3>
          
          <div className="bg-surface-container rounded-3xl overflow-hidden shadow-sm border border-black/5 flex flex-col h-full">
            <div className="p-10 flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary text-white rounded-2xl">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <h4 className="text-xl font-black text-primary">{visa.title}</h4>
              </div>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed font-body">
                {visa.description}
              </p>
              
              <div className="space-y-8">
                {visa.workRights.map((right, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-primary text-3xl">{right.icon}</span>
                    </div>
                    <div>
                      <p className="font-black text-primary text-lg leading-tight mb-1">{right.title}</p>
                      <p className="text-sm text-on-surface-variant font-medium">{right.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaAdmissionSection;

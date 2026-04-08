import React from 'react';

const MapSection = () => {
  return (
    <section className="py-24 px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
          <iframe
            title="Office Location"
            allowFullScreen=""
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.374255156298!2d85.32056570989143!3d27.70572872546566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19001c694c57%3A0xf5a3d2b2aa0b17!2sQuantum%20education%20and%20career%20counselling!5e0!3m2!1sen!2snp!4v1775672830535!5m2!1sen!2snp"
          ></iframe>
          <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white p-6 rounded-2xl shadow-xl max-w-xs">
            <h4 className="font-bold text-primary font-headline mb-1">Quantum Education HQ</h4>
            <p className="text-xs text-on-surface-variant font-body mb-3">
              Putalisadak Chwok(Dillibazar Sadak), Kathmandu
            </p>
            <a
              className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
              href="https://maps.google.com?q=Quantum+education+and+career+counselling"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions{' '}
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

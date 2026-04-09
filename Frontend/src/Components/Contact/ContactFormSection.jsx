import React from 'react';
import Reveal from '../UX/Reveal';

const ContactFormSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center justify-center w-full">
        
        {/* LEFT: Form card */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal direction="right">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl shadow-black/5">
              <h2 className="text-3xl font-bold text-primary font-headline mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all"
                      placeholder="Pratik Chapagain"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Email Address
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all"
                      placeholder="pratik@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all"
                      placeholder="+977 98..."
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Preferred Destination
                    </label>
                    <select className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all appearance-none">
                      <option>Select Destination</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>New Zealand</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all resize-none"
                    placeholder="How can we help you?"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  className="w-full cta-gradient text-white py-5 rounded-xl font-bold text-lg font-manrope shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Info panel */}
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Reveal>
                <h2 className="text-3xl font-extrabold text-primary font-headline tracking-tight">
                  Connect with Experts
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  We believe in a student-first approach. Whether you are curious about universities,
                  scholarships, or visa procedures, we are here to provide clarity.
                </p>
              </Reveal>
            </div>
            
            <div className="space-y-8">
              <Reveal delay={0.2} direction="left">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    map
                  </span>
                  <div>
                    <h4 className="font-bold text-primary font-headline">Main Corporate Office</h4>
                    <p className="text-on-surface-variant text-sm font-body">
                      Quantum Education Building, Level 2<br />
                      Bagbazar, Kathmandu, NP
                    </p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.3} direction="left">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-bold text-primary font-headline">Office Hours</h4>
                    <p className="text-on-surface-variant text-sm font-body">
                      Sunday — Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.4} distance={20}>
            <div className="p-8 rounded-2xl bg-on-primary-container/10 border border-primary-fixed">
              <h4 className="text-xl font-bold text-primary font-headline mb-4">Instant Support</h4>
              <p className="text-on-surface-variant text-sm font-body mb-6">
                Need a quick answer? Our support team is available on WhatsApp during office hours.
              </p>
              <a
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold font-manrope hover:bg-[#128C7E] transition-colors shadow-md"
                href="https://wa.me/+9779860185949"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">chat</span> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
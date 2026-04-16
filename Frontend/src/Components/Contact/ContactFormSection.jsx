import React, { useState, useEffect } from 'react';
import Reveal from '../UX/Reveal';
import toast from 'react-hot-toast';
import { api } from '../../api';

const ContactFormSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredDestination: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    api.getDestinations({ limit: '50' })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setDestinations(res.data.map(c => c.name));
        }
      })
      .catch(() => {
        setDestinations(['Australia', 'USA', 'United Kingdom', 'Canada', 'New Zealand']);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`/api/v1/contact-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setForm({
        fullName: '',
        email: '',
        phoneNumber: '',
        preferredDestination: '',
        message: ''
      });
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center justify-center w-full">

        {/* LEFT: Form card */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal direction="right">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl shadow-black/5">
              <h2 className="text-3xl font-bold text-primary font-headline mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all"
                      placeholder="Pratik Chapagain"
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
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
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
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
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-secondary-fixed-variant uppercase tracking-wider block ml-1">
                      Preferred Destination
                    </label>
                    <select
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-container text-on-surface font-body transition-all appearance-none"
                      name="preferredDestination"
                      value={form.preferredDestination}
                      onChange={handleChange}
                    >
                      <option value="">Select Destination</option>
                      {destinations.map(name => (
                        <option key={name} value={name}>{name}</option>
                      ))}
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
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={2000}
                  ></textarea>
                </div>
                <button
                  className="w-full primary-gradient text-white py-5 rounded-xl font-bold text-lg font-headline shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
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
                      Putalisadak, Kathmandu, NP
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
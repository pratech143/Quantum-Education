import React from 'react';
import Reveal from '../UX/Reveal';

const ContactCards = () => {
  const cards = [
    {
      icon: 'location_on',
      title: 'Visit Us',
      description: 'Drop by our main office for a face-to-face consultation.',
      info: 'Putalisadak, Kathmandu, Nepal',
      link: 'https://maps.google.com/?q=Putalisadak,Kathmandu,Nepal',
      colors: {
        bg: 'bg-secondary-container',
        text: 'text-on-secondary-container',
      },
    },
    {
      icon: 'call',
      title: 'Call Us',
      description: 'Speak directly with our expert education advisors.',
      info: '+977-9860185949',
      link: 'tel:+9779860185949',
      colors: {
        bg: 'bg-primary-container',
        text: 'text-on-primary-container',
      },
    },
    {
      icon: 'mail',
      title: 'Email Us',
      description: "Send us your queries anytime, and we'll reply within 24 hours.",
      info: 'info@quantumeducation.com',
      link: 'mailto:info@quantumeducation.com',
      colors: {
        bg: 'bg-tertiary-fixed',
        text: 'text-on-tertiary-fixed-variant',
      },
    },
  ];

  return (
    <section className="py-24 px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div
              className="bg-surface-container-lowest p-10 rounded-2xl transition-transform duration-300 hover:-translate-y-2 group shadow-xl shadow-black/5 text-center h-full"
            >
              <div className={`w-14 h-14 ${card.colors.bg} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform mx-auto`}>
                <span className={`material-symbols-outlined ${card.colors.text} text-3xl`}>
                  {card.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-headline mb-4">{card.title}</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                {card.description}
              </p>
              <a 
                href={card.link}
                className="text-primary font-bold font-body hover:underline decoration-2 underline-offset-4"
                target={card.title === 'Visit Us' ? '_blank' : undefined}
                rel={card.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
              >
                {card.info}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;

import React from 'react';
import Reveal from '../UX/Reveal';
import storyFounder from '../../assets/about/story-founder.jpg';

const StorySection = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <Reveal direction="right" distance={40}>
              <img
                alt="Founder talking to student"
                className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                src={storyFounder}
              />
            </Reveal>
            <Reveal delay={0.4} direction="up" distance={20} className="absolute -bottom-6 -right-6">
              <div className="bg-white p-4 rounded-xl shadow-md font-headline font-bold text-primary italic">
                "Education is the strongest bridge."
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Reveal>
              <h2 className="text-4xl font-headline font-extrabold text-primary">Our Story</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="w-20 h-1.5 bg-primary-container rounded-full"></div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                It began with a simple observation. In the heart of Kathmandu, our founder witnessed incredible local potential struggling to navigate the opaque and often overwhelming barriers of international education.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                Quantum Education was born from a desire to democratize opportunity. We didn't just want to be consultants; we wanted to be architects of dreams. From a small office with two desks to a global network, our passion remains unchanged: ensuring no student’s ambition is limited by geography.
              </p>
            </Reveal>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <Reveal delay={0.4} direction="up">
                <div>
                  <h4 className="text-3xl font-bold text-primary font-headline">15+</h4>
                  <p className="text-sm text-on-surface-variant font-body">Years of Heritage</p>
                </div>
              </Reveal>
              <Reveal delay={0.5} direction="up">
                <div>
                  <h4 className="text-3xl font-bold text-primary font-headline">50+</h4>
                  <p className="text-sm text-on-surface-variant font-body">Partner Universities</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

import HeroGlobe from './HeroGlobe'

const HeroSection = () => {
  return (
    <section className="relative min-h-[560px] lg:min-h-[760px] flex items-center overflow-hidden" style={{ background: '#F9F9F9' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-12 lg:col-span-6 py-8 lg:py-6">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
            ESTABLISHED EXCELLENCE
          </span>
          <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-6">
            Your Pathway to Study Abroad <span className="text-on-secondary-container">Starts Here</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed">
            Join thousands of Nepali students achieving their dreams in the world's most prestigious universities. Expert guidance for a brighter global future.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="hero-gradient px-8 py-4 rounded-xl text-white font-headline font-bold text-lg hover:scale-[1.02] transition-transform duration-200 shadow-xl shadow-primary/20">
              Book Free Counseling
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-outline-variant text-primary font-headline font-bold text-lg hover:bg-surface-container-low transition-colors duration-200">
              Explore Destinations
            </button>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
          <div className="aspect-square w-full max-w-[430px] translate-x-3 sm:max-w-[600px] lg:max-w-[700px]">
            <HeroGlobe />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

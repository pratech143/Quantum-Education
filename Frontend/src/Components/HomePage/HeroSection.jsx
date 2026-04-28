import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import globeSkin from '../../assets/homepage/globe-skin.jpg'

const HeroGlobe = lazy(() => import('./HeroGlobe'))

const HeroSection = () => {
  const [isReady, setIsReady] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = globeSkin;
    document.head.appendChild(link);

    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    const handle = idle(() => setShouldMount(true));

    return () => {
      document.head.removeChild(link);
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
    };
  }, []);

  return (
    <section className="relative min-h-[560px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-12 lg:col-span-6 py-4 lg:py-2">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-3">
            ESTABLISHED EXCELLENCE
          </span>
          <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-4">
            Your Pathway to Study Abroad <span className="text-on-secondary-container">Starts Here</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl mb-7 leading-relaxed">
            Join thousands of Nepali students achieving their dreams in the world's most prestigious universities. Expert guidance for a brighter global future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="hero-gradient px-8 py-4 rounded-xl text-white font-headline font-bold text-lg hover:scale-[1.02] transition-transform duration-200 shadow-xl shadow-primary/20">
                Book Free Counseling
              </button>
            </Link>
            <Link to="/destinations">
              <button className="px-8 py-4 rounded-xl border-2 border-outline-variant text-primary font-headline font-bold text-lg hover:bg-surface-container-low transition-colors duration-200">
                Explore Destinations
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative min-h-[400px]">
          <div
            className="aspect-square w-full max-w-[500px] translate-x-3 sm:max-w-[680px] lg:max-w-[850px]"
            style={{ visibility: isReady ? 'visible' : 'hidden' }}
          >
            {shouldMount && (
              <Suspense fallback={null}>
                <HeroGlobe onReady={() => setIsReady(true)} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

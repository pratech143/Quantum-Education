import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import HeroGlobe from './HeroGlobe'

const HeroSection = ({ onGlobeReady }) => {
  const [isReady, setIsReady] = useState(false);

  const handleGlobeReady = () => {
    setIsReady(true);
    if (onGlobeReady) onGlobeReady();
  };

  return (
    <section className="relative min-h-[560px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-12 lg:col-span-6 py-4 lg:py-2">
          
          <AnimatePresence mode="wait">
            {!isReady ? (
              <motion.div 
                key="skeleton-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="h-6 w-48 bg-slate-200 rounded-full animate-pulse mb-4"></div>
                <div className="space-y-3">
                  <div className="h-16 w-full bg-slate-200 rounded-2xl animate-pulse"></div>
                  <div className="h-16 w-3/4 bg-slate-200 rounded-2xl animate-pulse"></div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                </div>
                <div className="flex gap-4 pt-6">
                  <div className="h-14 w-44 bg-slate-200 rounded-xl animate-pulse"></div>
                  <div className="h-14 w-44 bg-slate-100 rounded-xl animate-pulse"></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="real-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative min-h-[400px]">
          {/* Skeleton Globe */}
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
               <div className="aspect-square w-full max-w-[400px] lg:max-w-[500px] rounded-full bg-slate-100 animate-pulse border-4 border-slate-50 shadow-inner"></div>
            </div>
          )}
          
          <div className={`aspect-square w-full max-w-[500px] translate-x-3 sm:max-w-[680px] lg:max-w-[850px] transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <HeroGlobe onReady={handleGlobeReady} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

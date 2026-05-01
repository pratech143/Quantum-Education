import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Globe2 } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#000A1A] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Globe2 size={120} className="text-primary/20 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black text-white tracking-tighter">404</span>
            </div>
          </div>
        </div>
        
        <p className="text-base font-bold uppercase tracking-[0.3em] text-primary mb-4">
          Destination Not Found
        </p>
        
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl font-headline leading-tight">
          Lost in Space?
        </h1>
        
        <p className="mt-6 text-lg leading-7 text-gray-400 max-w-lg mx-auto font-body">
          The page you're looking for doesn't exist or has been moved to a new coordinate. Let's get you back on track to your dream destination.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(238,182,73,0.3)] transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-full bg-white/5 px-8 py-4 text-sm font-bold text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 active:scale-95"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto pt-16 border-t border-white/5">
          <div>
            <h3 className="text-white font-bold mb-2">Check Destinations</h3>
            <p className="text-sm text-gray-500">Explore our top study locations worldwide.</p>
            <Link to="/destinations" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">View All</Link>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Interview Prep</h3>
            <p className="text-sm text-gray-500">Get ready for your visa interview with us.</p>
            <Link to="/interview-preparation" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">Start Now</Link>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-500">Contact our experts for immediate support.</p>
            <Link to="/contact" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

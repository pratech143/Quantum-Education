import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Animated Logo / Brand Element */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-xl rotate-45 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-headline font-black text-primary tracking-tighter mb-2">
              Quantum Education
            </h2>
            <p className="text-on-surface-variant font-body text-sm font-medium tracking-widest uppercase opacity-60">
              Initializing Experience...
            </p>
          </motion.div>

          {/* Progress Bar Mockup */}
          <div className="mt-12 w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

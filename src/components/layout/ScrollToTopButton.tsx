
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ScrollToTopButton = () => {
  const controls = useAnimation();
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-tranzkit-blue/80 text-white flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-tranzkit-blue transition-all duration-300"
      aria-label={t('back.top')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;

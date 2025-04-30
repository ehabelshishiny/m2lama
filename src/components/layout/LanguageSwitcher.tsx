
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2 rtl:space-x-reverse"
    >
      <button
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 rounded text-sm ${
          language === 'ar' 
            ? 'bg-tranzkit-blue/20 text-white font-bold' 
            : 'text-muted-foreground hover:text-white'
        }`}
      >
        {t('lang.ar')}
      </button>
      <div className="text-muted-foreground">|</div>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded text-sm ${
          language === 'en' 
            ? 'bg-tranzkit-blue/20 text-white font-bold' 
            : 'text-muted-foreground hover:text-white'
        }`}
      >
        {t('lang.en')}
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;

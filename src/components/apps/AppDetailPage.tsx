
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import AppDetailContent from './AppDetailContent';
import AppNotFound from './AppNotFound';
import { appsData } from '@/data/appsData';

const AppDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && appsData[id]) {
      document.title = `Tranzkit - ${appsData[id].title}`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', appsData[id].description);
      }
    }
  }, [id]);

  if (!id || !appsData[id]) {
    return <AppNotFound />;
  }

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Navbar />
      <AppDetailContent appId={id} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AppDetailPage;

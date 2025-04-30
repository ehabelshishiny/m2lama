
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import AppDetailContent from '@/components/apps/AppDetailContent';

const CaptainAppPage = () => {
  const { language } = useLanguage();
  const appId = 'captain';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>تطبيق الكابتن | Tranzkit</title>
        <meta name="description" content="تطبيق خاص للسائقين يمكن من خلاله تتبع الرحلات وإدارة المهام بسهولة وتحسين الأداء" />
        <link rel="canonical" href="https://tranzkit.com/app-captain" />
        <meta property="og:title" content="تطبيق الكابتن | Tranzkit" />
        <meta property="og:description" content="تطبيق خاص للسائقين يمكن من خلاله تتبع الرحلات وإدارة المهام بسهولة وتحسين الأداء" />
        <meta property="og:url" content="https://tranzkit.com/app-captain" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "تطبيق الكابتن",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Android, iOS",
            "description": "تطبيق خاص للسائقين يمكن من خلاله تتبع الرحلات وإدارة المهام بسهولة وتحسين الأداء",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <AppDetailContent appId={appId} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default CaptainAppPage;


import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import AppDetailContent from '@/components/apps/AppDetailContent';

const RiderAppPage = () => {
  const { language } = useLanguage();
  const appId = 'rider';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>تطبيق الراكب | Tranzkit</title>
        <meta name="description" content="تطبيق سهل الاستخدام للركاب لحجز وتتبع الرحلات في الوقت الفعلي ومتابعة الحركة بسهولة" />
        <link rel="canonical" href="https://tranzkit.com/app-rider" />
        <meta property="og:title" content="تطبيق الراكب | Tranzkit" />
        <meta property="og:description" content="تطبيق سهل الاستخدام للركاب لحجز وتتبع الرحلات في الوقت الفعلي ومتابعة الحركة بسهولة" />
        <meta property="og:url" content="https://tranzkit.com/app-rider" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "تطبيق الراكب",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Android, iOS",
            "description": "تطبيق سهل الاستخدام للركاب لحجز وتتبع الرحلات في الوقت الفعلي ومتابعة الحركة بسهولة",
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

export default RiderAppPage;

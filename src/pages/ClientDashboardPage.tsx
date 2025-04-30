
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import AppDetailContent from '@/components/apps/AppDetailContent';

const ClientDashboardPage = () => {
  const { language } = useLanguage();
  const appId = 'client-dashboard';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>لوحة تحكم العملاء | Tranzkit</title>
        <meta name="description" content="منصة تتيح للعملاء متابعة الرحلات وإدارة الحسابات ومشاهدة التقارير بطريقة سهلة وفعالة" />
        <link rel="canonical" href="https://tranzkit.com/app-client-dashboard" />
        <meta property="og:title" content="لوحة تحكم العملاء | Tranzkit" />
        <meta property="og:description" content="منصة تتيح للعملاء متابعة الرحلات وإدارة الحسابات ومشاهدة التقارير بطريقة سهلة وفعالة" />
        <meta property="og:url" content="https://tranzkit.com/app-client-dashboard" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "لوحة تحكم العملاء",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "منصة تتيح للعملاء متابعة الرحلات وإدارة الحسابات ومشاهدة التقارير بطريقة سهلة وفعالة",
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

export default ClientDashboardPage;

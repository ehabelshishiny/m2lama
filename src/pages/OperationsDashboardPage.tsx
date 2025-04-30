
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import AppDetailContent from '@/components/apps/AppDetailContent';

const OperationsDashboardPage = () => {
  const { language } = useLanguage();
  const appId = 'operations-dashboard';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>لوحة تحكم العمليات | Tranzkit</title>
        <meta name="description" content="منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات بكفاءة عالية" />
        <link rel="canonical" href="https://tranzkit.com/app-operations-dashboard" />
        <meta property="og:title" content="لوحة تحكم العمليات | Tranzkit" />
        <meta property="og:description" content="منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات بكفاءة عالية" />
        <meta property="og:url" content="https://tranzkit.com/app-operations-dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tranzkit.com/app-operations-dashboard" />
        <meta property="twitter:title" content="لوحة تحكم العمليات | Tranzkit" />
        <meta property="twitter:description" content="منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات بكفاءة عالية" />
        <meta property="twitter:image" content="https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "لوحة تحكم العمليات",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات بكفاءة عالية",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "screenshot": "https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg"
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

export default OperationsDashboardPage;

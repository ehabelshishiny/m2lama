
import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';

// Lazy-loaded components
const AppDetailContent = lazy(() => import('@/components/apps/AppDetailContent'));
const Footer = lazy(() => import('@/components/layout/Footer'));

// Add type declaration for the clarity property on Window
declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void;
  }
}

// Loading placeholder for lazy-loaded components
const LoadingPlaceholder = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-tranzkit-blue rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const SupervisorAppPage = () => {
  const { language } = useLanguage();
  const appId = 'supervisor';
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Preload other app pages for better navigation experience
    const preloadPages = () => {
      const otherPages = [
        () => import('@/pages/CaptainAppPage'),
        () => import('@/pages/RiderAppPage'),
        () => import('@/pages/ClientDashboardPage'),
        () => import('@/pages/OperationsDashboardPage')
      ];
      
      // Preload after a short delay to prioritize current page rendering
      setTimeout(() => {
        otherPages.forEach(importPage => {
          importPage();
        });
      }, 3000);
    };
    
    // Only preload in production to avoid development overhead
    if (process.env.NODE_ENV === 'production') {
      preloadPages();
    }
    
    // Register page in analytics
    try {
      if (window.clarity) {
        window.clarity("set", "page_type", "app_detail");
        window.clarity("set", "app_id", appId);
      }
    } catch (error) {
      console.error("Analytics error:", error);
    }
  }, [appId]);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet prioritizeSeoTags>
        <html lang={language === 'en' ? 'en' : 'ar'} dir={language === 'en' ? 'ltr' : 'rtl'} />
        <title>تطبيق المشرفين | Tranzkit</title>
        <meta name="description" content="تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان بأعلى كفاءة" />
        <link rel="canonical" href="https://tranzkit.com/app-supervisor" />
        <meta property="og:title" content="تطبيق المشرفين | Tranzkit" />
        <meta property="og:description" content="تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان بأعلى كفاءة" />
        <meta property="og:url" content="https://tranzkit.com/app-supervisor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ar_AR'} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tranzkit.com/app-supervisor" />
        <meta property="twitter:title" content="تطبيق المشرفين | Tranzkit" />
        <meta property="twitter:description" content="تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان بأعلى كفاءة" />
        <meta property="twitter:image" content="https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg" />
        <meta name="application-name" content="Tranzkit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="تطبيق المشرفين | Tranzkit" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "تطبيق المشرفين",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Android, iOS",
            "description": "تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان بأعلى كفاءة",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "screenshot": "https://i.ibb.co/k6WwtSyd/FB-IMG-1742266337216.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main>
        <Suspense fallback={<LoadingPlaceholder />}>
          <AppDetailContent appId={appId} />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Footer />
      </Suspense>
      
      <ScrollToTopButton />
    </div>
  );
};

export default SupervisorAppPage;


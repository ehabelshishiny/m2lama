
import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ScrollToTopButton from '../components/layout/ScrollToTopButton';
import { Helmet } from 'react-helmet-async';

// Lazy load sections to improve initial page load
const Footer = lazy(() => import('../components/layout/Footer'));
const HowItWorksSection = lazy(() => import('../components/sections/HowItWorksSection'));
const WhyChooseUsSection = lazy(() => import('../components/sections/WhyChooseUsSection'));
const ForEveryoneSection = lazy(() => import('../components/sections/ForEveryoneSection'));
const CaseStudySection = lazy(() => import('../components/sections/CaseStudySection'));
const PricingSection = lazy(() => import('../components/sections/PricingSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));
const AppsSection = lazy(() => import('../components/sections/AppsSection'));

// Loading placeholder for lazy-loaded components
const SectionLoading = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-tranzkit-blue rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const Index = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.8;
          
          if (isVisible) {
            element.classList.add('is-visible');
          }
        });
      });
    };

    handleScrollAnimations();
    
    // Optimize scroll listener with throttling to avoid performance issues
    let scrollTimeout: number;
    const throttledScrollHandler = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          scrollTimeout = 0;
          handleScrollAnimations();
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        });
      }
    } else {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, [location]);

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet prioritizeSeoTags>
        <html lang={language === 'en' ? 'en' : 'ar'} dir={language === 'en' ? 'ltr' : 'rtl'} />
        <title>Tranzkit - نظام إدارة النقل الجماعي الذكي</title>
        <meta name="description" content="منصة متكاملة مصممة لتبسيط عمليات النقل، وتحسين التخطيط، وتعزيز الرقابة المالية للشركات التي تعمل في مجال خدمات النقل الجماعي والتنقل الذكي" />
        <link rel="canonical" href="https://tranzkit.com/" />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero section is not lazy loaded for fast initial render */}
        <HeroSection />
        
        <Suspense fallback={<SectionLoading />}>
          <ForEveryoneSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <AppsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <WhyChooseUsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <CaseStudySection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <HowItWorksSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
      
      <ScrollToTopButton />
    </div>
  );
};

export default Index;

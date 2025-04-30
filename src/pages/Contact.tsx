
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Tranzkit";
  }, []);

  return (
    <div className={`bg-background min-h-screen text-foreground ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Navbar />
      
      <main className="py-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">تواصل معنا</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          نحن هنا للإجابة على جميع استفساراتك. املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.
        </p>
        
        <div className="max-w-xl mx-auto">
          <ContactForm className="card-glass p-8" />
        </div>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;

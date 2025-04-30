
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { appsData } from '@/data/appsData';
import ContactFormContainer from '@/components/contact/ContactFormContainer';
import AppBreadcrumb from './AppBreadcrumb';
import AppNotFound from './AppNotFound';

interface AppDetailContentProps {
  appId: string;
}

const AppDetailContent: React.FC<AppDetailContentProps> = ({ appId }) => {
  const { language } = useLanguage();
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  if (!appId || !appsData[appId]) {
    return <AppNotFound />;
  }

  const app = appsData[appId];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default navigation
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className={`absolute top-20 right-[10%] w-96 h-96 ${app.color} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-20 left-[10%] w-96 h-96 ${app.color} rounded-full blur-3xl`}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AppBreadcrumb appId={appId} />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-full md:w-1/2 md:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={app.imageLarge || app.image} 
                alt={app.title} 
                className="w-full h-auto max-w-xl mx-auto rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 md:order-1"
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{app.title}</h1>
              <h2 className={`text-xl md:text-2xl ${app.primaryColor} mb-6 font-medium`}>{app.subtitle}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{app.description}</p>
              
              {app.ctaText && (
                <Button 
                  size="lg" 
                  className={`${app.color} hover:opacity-90 ${app.primaryColor} group transition-all duration-300 transform hover:translate-y-[-2px] hover:text-white`}
                  onClick={handleContactClick}
                >
                  {app.ctaText}
                  <ExternalLink className="ms-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8"
          >
            {app.featureSections.map((section, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="overflow-hidden"
              >
                <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-r-4 ${app.color}`}>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${app.primaryColor}`}>{section.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">{section.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.items.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group"
                        >
                          <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${app.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                            <div className={`w-2 h-2 rounded-full ${app.primaryColor.replace('text-', 'bg-')}`}></div>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 p-10 rounded-2xl glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">هل تريد معرفة المزيد عن {app.title}؟</h3>
              <p className="text-muted-foreground mb-8 text-lg">تواصل معنا اليوم للحصول على عرض توضيحي مخصص أو لمعرفة المزيد من التفاصيل</p>
              
              <Button 
                size="lg" 
                className={`${app.color} hover:opacity-90 ${app.primaryColor} group transition-all duration-300 transform hover:translate-y-[-2px] hover:text-white`}
                onClick={handleContactClick}
              >
                تواصل معنا
                <ExternalLink className="ms-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={contactFormRef} 
        id="app-contact-form" 
        className="py-16 bg-background/50 border-t border-border/10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك. املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <ContactFormContainer className={`card-glass p-8 ${app.color.replace('bg-', 'border-').replace('/10', '/30')} border`} />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AppDetailContent;

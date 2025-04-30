
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import MobileApps from '../apps/MobileApps';
import DesktopApps from '../apps/DesktopApps';

const AppsSection = () => {
  const { language } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="apps" className="py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            {language === 'ar' ? 'تطبيقات وحلول ترانزكيت المتكاملة' : 'Tranzkit Integrated Apps & Solutions'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {language === 'ar' 
              ? 'مجموعة متكاملة من التطبيقات ولوحات التحكم لإدارة أسطول النقل بكفاءة عالية' 
              : 'A comprehensive suite of apps and dashboards for efficient fleet management'}
          </motion.p>
        </div>

        {/* Desktop Apps Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <DesktopApps />
        </motion.div>

        {/* Mobile Apps Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-4"
        >
          <MobileApps />
        </motion.div>
      </div>
    </section>
  );
};

export default AppsSection;

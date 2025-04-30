
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../contact/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-40 right-20 w-72 h-72 bg-tranzkit-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Contact Form Component */}
        <ContactForm className="card-glass p-8" />
      </div>
    </section>
  );
};

export default ContactSection;

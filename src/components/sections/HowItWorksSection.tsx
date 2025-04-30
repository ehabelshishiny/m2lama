
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, PenLine, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorksSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      title: t('how.step1.title'),
      icon: <PenLine className="w-8 h-8 text-tranzkit-green" />,
      color: 'bg-tranzkit-green/20',
      description: t('how.step1.desc')
    },
    {
      title: t('how.step2.title'),
      icon: <FileCheck className="w-8 h-8 text-tranzkit-orange" />,
      color: 'bg-tranzkit-orange/20',
      description: t('how.step2.desc')
    },
    {
      title: t('how.step3.title'),
      icon: <Rocket className="w-8 h-8 text-tranzkit-yellow" />,
      color: 'bg-tranzkit-yellow/20',
      description: t('how.step3.desc')
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background/95 to-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-40 right-10 w-80 h-80 bg-tranzkit-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-tranzkit-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            {t('how.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {t('how.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 text-center relative overflow-hidden border border-white/10"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

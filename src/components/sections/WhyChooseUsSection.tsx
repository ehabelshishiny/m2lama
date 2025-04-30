
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui-custom/GlassCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const WhyChooseUsSection = () => {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const stats = [
    {
      percentage: 70,
      title: t('why.stat1')
    },
    {
      percentage: 120,
      title: t('why.stat2')
    },
    {
      percentage: 90,
      title: t('why.stat3')
    },
    {
      percentage: 100,
      title: t('why.stat4')
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-background/95 relative"
    >
      {/* Background Elements - Only render when section is visible */}
      {isVisible && (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-tranzkit-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            {t('why.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {t('why.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg glass-card">
              <AspectRatio ratio={1 / 1} className="w-full">
                {/* Use lazy loading for video iframe with loading animation */}
                {isVisible ? (
                  <iframe 
                    src="https://streamable.com/jvvwvx"
                    className="h-full w-full object-cover"
                    allowFullScreen={true}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    title="Tranzkit Promo Video"
                  ></iframe>
                ) : (
                  <div className="flex justify-center items-center h-full bg-card/20">
                    <div className="w-12 h-12 border-4 border-tranzkit-blue rounded-full border-t-transparent animate-spin"></div>
                  </div>
                )}
              </AspectRatio>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <GlassCard
                  key={index}
                  percentage={stat.percentage}
                  title={stat.title}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

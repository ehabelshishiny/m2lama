
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const { t } = useLanguage();
  
  const pricingTiers = [
    {
      name: t('pricing.tier1.name'),
      title: t('pricing.tier1.title'),
      price: t('pricing.tier1.price'),
      features: [
        t('feature.dashboard'),
        t('feature.driver.app'),
        t('feature.drivers.20'),
        t('feature.vehicles.20'),
        t('feature.email.support'),
      ],
      buttonText: t('pricing.tier1.button'),
      featured: false,
      bgColor: 'bg-tranzkit-blue/10 hover:bg-tranzkit-blue/20',
      borderColor: 'border-tranzkit-blue/30',
      paymentLink: '/payment/basic'
    },
    {
      name: t('pricing.tier2.name'),
      title: t('pricing.tier2.title'),
      price: t('pricing.tier2.price'),
      features: [
        t('feature.pro.dashboard'),
        t('feature.pro.apps'),
        t('feature.client.dashboard'),
        t('feature.drivers.100'),
      ],
      buttonText: t('pricing.tier2.button'),
      featured: true,
      bgColor: 'bg-gradient-to-br from-tranzkit-blue/20 to-tranzkit-purple/20 hover:from-tranzkit-blue/30 hover:to-tranzkit-purple/30',
      borderColor: 'border-tranzkit-purple/30',
      paymentLink: '/payment/pro'
    },
    {
      name: t('pricing.tier3.name'),
      title: t('pricing.tier3.title'),
      price: t('pricing.tier3.price'),
      features: [
        t('feature.all.pro'),
        t('feature.unlimited.drivers'),
        t('feature.unlimited.vehicles'),
        t('feature.custom'),
        t('feature.api'),
        t('feature.account.manager'),
      ],
      buttonText: t('pricing.tier3.button'),
      featured: false,
      bgColor: 'bg-tranzkit-green/10 hover:bg-tranzkit-green/20',
      borderColor: 'border-tranzkit-green/30',
      paymentLink: '/payment/enterprise'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background/95 to-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-tranzkit-green/10 rounded-full blur-3xl"></div>
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
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              className={`glass-card ${tier.bgColor} transition-all duration-300 hover:scale-105 ${
                tier.featured ? 'border-2 border-tranzkit-purple/30 shadow-lg' : 'border border-white/5'
              } relative overflow-hidden`}
            >
              {tier.featured && (
                <div className="absolute top-5 left-5 bg-tranzkit-purple/90 text-white text-xs py-1 px-3 rounded-full">
                  {t('pricing.tier2.popular')}
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <h4 className="text-2xl font-bold mb-2 text-white">{tier.title}</h4>
                <p className="text-xl font-bold mb-6 text-white/90">{tier.price}</p>
                
                <div className="space-y-4 mb-8 min-h-[300px]">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-tranzkit-green mt-0.5 rtl:ml-2 ltr:mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 ${
                    tier.featured 
                      ? 'bg-gradient-to-r from-tranzkit-purple to-tranzkit-blue hover:from-tranzkit-purple/90 hover:to-tranzkit-blue/90' 
                      : 'bg-white/10 hover:bg-white/20'
                  } text-white font-bold rounded-xl transition-all duration-300`}
                  asChild
                >
                  <Link to={tier.paymentLink}>
                    {tier.buttonText}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

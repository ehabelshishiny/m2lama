
import React, { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

interface PaymentLayoutProps {
  children: ReactNode;
  title: string;
  planName: string;
  amount: number;
}

const PaymentLayout: React.FC<PaymentLayoutProps> = ({ 
  children, 
  title,
  planName,
  amount 
}) => {
  const { language, t } = useLanguage();

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>{title} | Tranzkit</title>
        <meta name="description" content={`Complete your payment for the ${planName} plan with Tranzkit.`} />
      </Helmet>

      <Navbar />

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('payment.complete')}</h1>
              <p className="text-xl mb-2">
                {planName} {t('payment.plan')}
              </p>
              <p className="text-2xl font-bold text-tranzkit-blue">
                {amount.toLocaleString(language === 'en' ? 'en-US' : 'ar-SA')} {t('currency')}
              </p>
            </div>

            {children}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentLayout;

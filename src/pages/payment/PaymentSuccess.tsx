
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface PaymentSuccessState {
  planName: string;
  amount: number;
  transactionId: string;
}

const PaymentSuccess = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as PaymentSuccessState;

  // Redirect to external site after a delay
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // For now, redirect to a dummy site
      window.location.href = 'https://example.com/confirmation';
    }, 5000); // 5 seconds delay

    return () => clearTimeout(redirectTimer);
  }, []);

  // Check if we have payment data
  if (!state || !state.planName) {
    // If someone navigates directly to this page without payment data
    // redirect them back to the homepage
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Helmet>
        <title>{t('payment.success')} | Tranzkit</title>
        <meta name="description" content={t('payment.success.description')} />
      </Helmet>

      <Navbar />

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center bg-card rounded-2xl shadow-xl p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <CheckCircle className="text-tranzkit-green w-24 h-24" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('payment.success')}</h1>
            
            <p className="text-xl mb-8">
              {t('payment.success.description')}
            </p>
            
            <div className="bg-card/30 rounded-lg p-6 mb-8">
              <div className="flex flex-col space-y-3 text-start">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('payment.plan')}:</span>
                  <span className="font-semibold">{state.planName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('payment.amount')}:</span>
                  <span className="font-semibold">{state.amount.toLocaleString(language === 'en' ? 'en-US' : 'ar-SA')} {t('currency')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('payment.transaction.id')}:</span>
                  <span className="font-semibold">{state.transactionId}</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              {t('payment.redirect.message')}
            </p>
            
            <Button
              className="bg-tranzkit-blue hover:bg-tranzkit-blue/90 text-white font-bold py-3 px-6 rounded-lg"
              onClick={() => navigate('/')}
            >
              {t('return.home')}
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;

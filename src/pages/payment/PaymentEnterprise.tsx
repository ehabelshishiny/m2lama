
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import PaymentLayout from '@/components/payment/PaymentLayout';
import SpaceRemitForm from '@/components/payment/SpaceRemitForm';
import { sendPaymentConfirmationEmail } from '@/utils/emailService';
import { toast } from '@/hooks/use-toast';

const PaymentEnterprise = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const planName = 'Enterprise';
  const amount = 1999;
  
  // Define your server callback URL for SpaceRemit to notify your backend
  // Replace with your actual backend server URL when deployed
  const callbackUrl = "https://your-api-server.com/api/payment-webhook/spaceremit";

  // State for customer information
  const [customerInfo] = useState({
    name: 'Tranzkit Customer',
    email: 'customer@example.com',
    phone: ''
  });

  const handlePaymentSuccess = (paymentData: any) => {
    try {
      // Create a response object with the SpaceRemit data and additional info
      const paymentResponse = {
        success: true,
        transaction_id: paymentData.code || 'tr_' + Math.random().toString(36).substr(2, 9),
        amount: amount,
        currency: 'SAR',
        payment_method: 'spaceremit',
        spaceremit_code: paymentData.code,
        customer_email: customerInfo.email,
        timestamp: new Date().toISOString()
      };

      // Send email with payment details
      sendPaymentConfirmationEmail({
        planName,
        amount,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        paymentResponse
      });

      // Show success toast
      toast({
        title: t('payment.success'),
        description: t('payment.success.description'),
      });

      // Navigate to success page
      navigate('/payment/success', { 
        state: { 
          planName, 
          amount, 
          transactionId: paymentResponse.transaction_id 
        } 
      });
    } catch (error) {
      console.error('Error processing payment success:', error);
      handlePaymentFailed();
    }
  };

  const handlePaymentFailed = () => {
    toast({
      title: t('payment.error'),
      description: t('payment.error.description'),
      variant: 'destructive',
    });
  };

  return (
    <PaymentLayout title={`${planName} Plan Payment`} planName={planName} amount={amount}>
      <SpaceRemitForm 
        amount={amount}
        planName={planName}
        callbackUrl={callbackUrl}
        customerName={customerInfo.name}
        customerEmail={customerInfo.email}
        customerPhone={customerInfo.phone}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentFailed={handlePaymentFailed}
      />
    </PaymentLayout>
  );
};

export default PaymentEnterprise;

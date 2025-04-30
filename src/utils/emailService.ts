
import emailjs from 'emailjs-com';
import { toast } from '@/hooks/use-toast';

// Constants for emailjs
const SERVICE_ID = 'default_service'; // Replace with your actual service ID
const TEMPLATE_ID = 'template_payment'; // Replace with your actual template ID
const USER_ID = 'YOUR_USER_ID'; // Replace with your actual user ID

// Constants for SpaceRemit API (these would be used on the server-side)
const SPACEREMIT_API_URL = 'https://spaceremit.com/api/v2/payment_info/';
const SPACEREMIT_SECRET_KEY = 'YOUR_SECRET_KEY'; // This should be secured on the backend only

export interface PaymentData {
  planName: string;
  amount: number;
  customerName?: string;
  customerEmail?: string;
  paymentResponse: any; // The JSON response from the payment API
}

// Note: This function represents what would happen on your backend server
// You would implement this in your Node.js/Express server, not in the frontend
/*
// Server-side verification code (for your Express backend)
async function verifyPaymentWithSpaceRemit(paymentId) {
  try {
    const response = await fetch('https://spaceremit.com/api/v2/payment_info/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        private_key: process.env.SPACEREMIT_SECRET_KEY, // Secured in environment variables
        payment_id: paymentId
      }),
    });
    
    const data = await response.json();
    
    if (data.response_status === 'success') {
      // Check status_tag - A, B, D, or E are acceptable status codes
      return ['A', 'B', 'D', 'E'].includes(data.data.status_tag);
    }
    return false;
  } catch (error) {
    console.error('Error verifying payment:', error);
    return false;
  }
}
*/

// Frontend function that would normally call the backend
// In a production environment, you would make a call to your own backend
// which would then verify with SpaceRemit
const verifyPaymentWithSpaceRemit = async (paymentId: string): Promise<boolean> => {
  console.log('Frontend would call backend to verify payment with SpaceRemit API:', paymentId);
  // In production, this would be an API call to your own backend:
  /*
  try {
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId }),
    });
    const data = await response.json();
    return data.verified;
  } catch (error) {
    console.error('Error calling payment verification API:', error);
    return false;
  }
  */
  
  // For demo purposes, assume verification is successful
  return true;
};

export const sendPaymentConfirmationEmail = async (data: PaymentData): Promise<boolean> => {
  try {
    // This would normally be verified on the server side
    const isVerified = await verifyPaymentWithSpaceRemit(data.paymentResponse.spaceremit_code);
    
    if (!isVerified) {
      console.error('Payment verification failed');
      toast({
        title: 'Payment Verification Failed',
        description: 'Could not verify payment with SpaceRemit.',
        variant: 'destructive',
      });
      return false;
    }
    
    // Format the payment response as a nicely formatted JSON string
    const formattedResponse = JSON.stringify(data.paymentResponse, null, 2);
    
    // Create the email parameters
    const emailParams = {
      to_email: 'ehab.elshishiny@gmail.com',
      subject: `Payment Confirmation - ${data.planName} Plan`,
      customer_name: data.customerName || 'Customer',
      plan_name: data.planName,
      amount: data.amount,
      customer_email: data.customerEmail || 'Not provided',
      payment_details: formattedResponse
    };

    // Send the email
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID);
    
    // Show success toast
    toast({
      title: 'Payment Notification Sent',
      description: 'The payment details have been emailed successfully.',
    });
    
    return true;
  } catch (error) {
    console.error('Error sending payment confirmation email:', error);
    
    // Show error toast
    toast({
      title: 'Email Notification Failed',
      description: 'Could not send payment details email. Please try again.',
      variant: 'destructive',
    });
    
    return false;
  }
};

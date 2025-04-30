
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SpaceRemitFormProps {
  amount: number;
  planName: string;
  currency?: string;
  callbackUrl?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  onPaymentSuccess: (data: any) => void;
  onPaymentFailed: () => void;
}

const SpaceRemitForm: React.FC<SpaceRemitFormProps> = ({
  amount,
  planName,
  currency = 'SAR',
  callbackUrl,
  customerName = 'Tranzkit Customer',
  customerEmail = 'customer@example.com',
  customerPhone = '',
  onPaymentSuccess,
  onPaymentFailed
}) => {
  const { t } = useLanguage();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const configScriptLoaded = useRef(false);

  // Setup event listeners for payment completion
  useEffect(() => {
    if (!window) return;
    
    // Define the callback functions that SpaceRemit will call
    window.SP_SUCCESSFUL_PAYMENT = (spaceremit_code) => {
      console.log("Payment successful with code:", spaceremit_code);
      onPaymentSuccess({ code: spaceremit_code, amount: amount, planName: planName });
    };
    
    window.SP_FAILD_PAYMENT = () => {
      console.log("Payment failed");
      onPaymentFailed();
    };
    
    window.SP_RECIVED_MESSAGE = (message) => {
      console.log("SpaceRemit message:", message);
      alert(message);
    };
    
    window.SP_NEED_AUTH = (target_auth_link) => {
      console.log("Auth needed at:", target_auth_link);
      window.location.href = target_auth_link;
    };
    
    return () => {
      // Cleanup callbacks
      window.SP_SUCCESSFUL_PAYMENT = null;
      window.SP_FAILD_PAYMENT = null;
      window.SP_RECIVED_MESSAGE = null;
      window.SP_NEED_AUTH = null;
    };
  }, [amount, planName, onPaymentSuccess, onPaymentFailed]);

  // Initialize the SpaceRemit form and script
  useEffect(() => {
    if (!formContainerRef.current || scriptLoaded.current || !window) return;
    
    // Create the payment form HTML
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = `
        <div class="border rounded-xl p-6 bg-card shadow-lg">
          <form id="spaceremit-form" class="space-y-4">
            <input type="hidden" name="amount" value="${amount}">
            <input type="hidden" name="currency" value="${currency}">
            <input type="hidden" name="fullname" value="${customerName}">
            <input type="hidden" name="email" value="${customerEmail}">
            <input type="hidden" name="phone" value="${customerPhone}">
            <input type="hidden" name="notes" value="${planName} Plan Purchase">
            ${callbackUrl ? `<input type="hidden" name="callback_url" value="${callbackUrl}">` : ''}
            
            <div class="sp-one-type-select space-y-3">
              <div class="flex items-center space-x-2">
                <input type="radio" name="sp-pay-type-radio" value="local-methods-pay" id="sp_local_methods_radio" checked 
                  class="h-4 w-4 text-tranzkit-blue">
                <label for="sp_local_methods_radio" class="text-sm font-medium">
                  <div>${t('payment.local.methods')}</div>
                </label>
              </div>
              <div id="spaceremit-local-methods-pay" class="mt-2 pl-6"></div>
            </div>
          
            <div class="sp-one-type-select space-y-3 mt-4">
              <div class="flex items-center space-x-2">
                <input type="radio" name="sp-pay-type-radio" value="card-pay" id="sp_card_radio" 
                  class="h-4 w-4 text-tranzkit-blue">
                <label for="sp_card_radio" class="text-sm font-medium">
                  <div>${t('payment.card')}</div>
                </label>
              </div>
              <div id="spaceremit-card-pay" class="mt-2 pl-6"></div>
            </div>
           
            <div class="mt-6">
              <button type="submit" class="w-full bg-tranzkit-blue hover:bg-tranzkit-blue/90 text-white font-bold py-3 px-4 rounded-lg">
                ${t('payment.pay.now')}
              </button>
            </div>
          </form>
        </div>
      `;
    }

    // Add the SpaceRemit configuration to the page
    // This must be added before loading the SpaceRemit script
    if (!configScriptLoaded.current) {
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        // SpaceRemit configuration variables
        const SP_PUBLIC_KEY = "test_pkKBL14Y6Z5YDUPGNIUDQPHVNSWSY99ZHADP9LU3LXPAFQBHL0UD"; // Replace with your actual test/public key
        const SP_FORM_ID = "#spaceremit-form";
        const SP_SELECT_RADIO_NAME = "sp-pay-type-radio";
        const LOCAL_METHODS_BOX_STATUS = true;
        const LOCAL_METHODS_PARENT_ID = "#spaceremit-local-methods-pay";
        const CARD_BOX_STATUS = true;
        const CARD_BOX_PARENT_ID = "#spaceremit-card-pay";
        let SP_FORM_AUTO_SUBMIT_WHEN_GET_CODE = true;
      `;
      document.head.appendChild(configScript);
      configScriptLoaded.current = true;
    }

    // Load the SpaceRemit script
    const script = document.createElement('script');
    script.src = 'https://spaceremit.com/api/v2/js_script/spaceremit.js';
    script.async = true;
    script.onload = () => {
      console.log('SpaceRemit script loaded successfully');
    };
    script.onerror = (error) => {
      console.error('Failed to load SpaceRemit script:', error);
      onPaymentFailed();
    };
    
    document.body.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      // Cleanup
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      
      const configScripts = document.querySelectorAll('script[data-spaceremit-config]');
      configScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [amount, currency, planName, callbackUrl, customerName, customerEmail, customerPhone, t, onPaymentFailed]);

  return (
    <div ref={formContainerRef} className="payment-form-container"></div>
  );
};

// Add type definitions for the SpaceRemit global functions
declare global {
  interface Window {
    SP_SUCCESSFUL_PAYMENT: ((spaceremit_code: string) => void) | null;
    SP_FAILD_PAYMENT: (() => void) | null;
    SP_RECIVED_MESSAGE: ((message: string) => void) | null;
    SP_NEED_AUTH: ((target_auth_link: string) => void) | null;
  }
}

export default SpaceRemitForm;

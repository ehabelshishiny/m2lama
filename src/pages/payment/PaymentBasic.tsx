
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import PaymentLayout from '@/components/payment/PaymentLayout';
import SpaceRemitForm from '@/components/payment/SpaceRemitForm';
import { sendPaymentConfirmationEmail } from '@/utils/emailService';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';


const PaymentBasic = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const planName = 'Basic';
  const amount = 1999;

  const SP_PUBLIC_KEY = "test_pkKBL14Y6Z5YDUPGNIUDQPHVNSWSY99ZHADP9LU3LXPAFQBHL0UD"; //Your website public key
  const SP_FORM_ID = "#spaceremit-form"; // Identifier for the form
  const SP_SELECT_RADIO_NAME = "sp-pay-type-radio"; // Name attribute of radio buttons

  const LOCAL_METHODS_BOX_STATUS = true; // Status of local payment methods box
  const LOCAL_METHODS_PARENT_ID = "#spaceremit-local-methods-pay"; // Identifier for the container of local payment methods

  const CARD_BOX_STATUS = true; // Status of card payment box
  const CARD_BOX_PARENT_ID = "#spaceremit-card-pay"; // Identifier for the container of card payment
  let SP_FORM_AUTO_SUBMIT_WHEN_GET_CODE = true; // Flag indicating whether the form should automatically submit when getting a code

  // Callback function for successful payment
  function SP_SUCCESSFUL_PAYMENT(spaceremit_code) {}
  // Callback function for failed payment
  function SP_FAILD_PAYMENT() {}
  // Callback function for receiving message
  function SP_RECIVED_MESSAGE(message) {alert(message);}
  // Callback function for needing authentication
  function SP_NEED_AUTH(target_auth_link) {}

  return(
          <html>
           <form id="spaceremit-form" style="width: 400px;padding: 10px;"> 
              <input type="hidden" name="amount"  value="1"/>
              <input type="hidden" name="currency" value="USD"/>
              
              
              <input type="hidden" name="fullname" value="<FULLNAME OF BUYER>"/>
              <input type="hidden" name="email"  value="<EMAIL OF BUYER>"/>
              <input type="hidden" name="phone"  value="<PHONE OF BUYER>"/>
              <input type="hidden" name="notes"  value="<CUSTOM FEILD YOU WANT TO ADD>"/>
              
            
              <div className="sp-one-type-select">
            
                  <input type="radio" name="sp-pay-type-radio" value="local-methods-pay" id="sp_local_methods_radio" checked/>
                  <label htmlFor="sp_local_methods_radio"><div>Local payment methods</div></label>
                  
                
                  <div id="spaceremit-local-methods-pay"></div>
              </div>
            

              <div className="sp-one-type-select">
            
                  <input type="radio" name="sp-pay-type-radio" value="card-pay" id="sp_card_radio" />
                  <label htmlFor="sp_card_radio"><div>Card payment</div></label>
                  

                  <div id="spaceremit-card-pay"></div>
              </div>
            

              <div><button type="submit">pay</button></div>
    
            </form> 
          </html>
        );
      };
      export default PaymentBasic;
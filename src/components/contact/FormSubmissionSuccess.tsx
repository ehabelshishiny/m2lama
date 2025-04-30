
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FormSubmissionSuccess = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{t('contact.form.success')}</h3>
      <p className="text-muted-foreground">{t('contact.form.success.desc')}</p>
    </div>
  );
};

export default FormSubmissionSuccess;

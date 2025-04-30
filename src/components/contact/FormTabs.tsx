
import React from 'react';
import { useLanguage } from '@/hooks/useLanguageContext';

interface FormTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FormTabs: React.FC<FormTabsProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex mb-8 border-b border-white/10">
      <button
        className={`py-3 px-6 text-lg font-medium ${
          activeTab === 'demo' ? 'border-b-2 border-tranzkit-blue text-white' : 'text-muted-foreground'
        }`}
        onClick={() => onTabChange('demo')}
      >
        {t('cta.demo')}
      </button>
      <button
        className={`py-3 px-6 text-lg font-medium ${
          activeTab === 'license' ? 'border-b-2 border-tranzkit-blue text-white' : 'text-muted-foreground'
        }`}
        onClick={() => onTabChange('license')}
      >
        اشترك في خدمة ترانزكيت
      </button>
    </div>
  );
};

export default FormTabs;

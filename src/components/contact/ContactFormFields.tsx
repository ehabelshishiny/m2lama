
import React from "react";
import { Send, Mail, Phone, Smartphone, Users, Building } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

interface FormDataType {
  name: string;
  company: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormDataType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
  error: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const ContactFormFields = ({
  formData,
  handleChange,
  isSubmitting,
  error,
  handleSubmit,
}: ContactFormFieldsProps) => {
  const { t } = useLanguage();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">{t('contact.form.name')} *</label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <Users size={18} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5 pr-10"
              placeholder={t('contact.form.name')}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-white mb-2">{t('contact.form.company')} *</label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <Building size={18} />
            </div>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5 pr-10"
              placeholder={t('contact.form.company')}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">{t('contact.form.email')} *</label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <Mail size={18} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5 pr-10"
              placeholder="example@company.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-white mb-2">{t('contact.form.phone')} *</label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <Smartphone size={18} />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5 pr-10"
              placeholder="+966 5x xxx xxxx"
              required
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="plan" className="block text-white mb-2">{t('contact.form.plan')} ({t('contact.form.optional')})</label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5"
        >
          <option value="">{t('contact.form.plan')}...</option>
          <option value="starter">{t('pricing.tier1.title')}</option>
          <option value="pro">{t('pricing.tier2.title')}</option>
          <option value="enterprise">{t('pricing.tier3.title')}</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white mb-2">{t('contact.form.message')} ({t('contact.form.optional')})</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-black/30 border border-white/10 text-white rounded-lg block w-full p-2.5"
          placeholder={t('contact.form.message')}
        ></textarea>
      </div>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            <span>{t('contact.form.submitting')}</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>{t('contact.form.submit')}</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactFormFields;

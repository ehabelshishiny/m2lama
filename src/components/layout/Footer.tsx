
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language } = useLanguage();
  const isIndexPage = location.pathname === '/';

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (sectionId: string) => {
    if (isIndexPage) {
      // If already on index page, just scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to index page with the section as hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/9f3ca58c-3509-4996-838f-19a7d4611a40.png" 
                alt="Tranzkit Logo" 
                className="w-[100px] h-auto logo-image"
              />
            </div>
            <p className="text-muted-foreground mb-8 max-w-md">
              {t('footer.desc')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/people/TranzKit/61573560685234/?rdid=i7oslaBJO0bozqdY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19LkfuB2Sf%2F" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5 text-white/80" />
              </a>
              <p></p>
              <a href="https://www.linkedin.com/company/tranzkit" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('apps');
                  }} 
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.features')}
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('how-it-works');
                  }} 
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.how-it-works')}
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('why-us');
                  }} 
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.why-us')}
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('pricing');
                  }} 
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }} 
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms-policy?tab=terms" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>{t('footer.terms')}</Link>
              </li>
              <li>
                <Link to="/terms-policy?tab=privacy" className="text-muted-foreground hover:text-white transition-colors" onClick={handleLinkClick}>{t('footer.privacy')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@tranzkit.com" className="text-muted-foreground hover:text-white transition-colors">info@tranzkit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tranzkit LLC. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language } = useLanguage();
  
  const isIndexPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (isIndexPage) {
      // If already on index page, just scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to index page with the section as hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }} 
              className="text-white cursor-pointer"
            >
              <img 
                src="/lovable-uploads/tranzkit-high-resolution-logo.png" 
                alt="Tranzkit Logo" 
                className="w-[100px] h-auto logo-image"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('apps');
              }} 
              className="text-foreground/80 hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.features')}
            </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('how-it-works');
              }} 
              className="text-foreground/80 hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.how-it-works')}
            </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('why-us');
              }} 
              className="text-foreground/80 hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.why-us')}
            </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('pricing');
              }} 
              className="text-foreground/80 hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.pricing')}
            </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }} 
              className="text-foreground/80 hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.contact')}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
           
            <Button
              className="btn-primary"
              onClick={() => {
                if (isIndexPage) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#contact');
                }
              }}
            >
              {t('cta.demo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
        
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-border/50 bg-card rounded-b-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('apps');
                }} 
                className="text-foreground/80 hover:text-white py-2 cursor-pointer"
              >
                {t('nav.features')}
              </a>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }} 
                className="text-foreground/80 hover:text-white py-2 cursor-pointer"
              >
                {t('nav.how-it-works')}
              </a>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('why-us');
                }} 
                className="text-foreground/80 hover:text-white py-2 cursor-pointer"
              >
                {t('nav.why-us')}
              </a>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('pricing');
                }} 
                className="text-foreground/80 hover:text-white py-2 cursor-pointer"
              >
                {t('nav.pricing')}
              </a>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }} 
                className="text-foreground/80 hover:text-white py-2 cursor-pointer"
              >
                {t('nav.contact')}
              </a>
              <Button
                className="btn-primary w-full"
                onClick={() => {
                  if (isIndexPage) {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('cta.demo')}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;

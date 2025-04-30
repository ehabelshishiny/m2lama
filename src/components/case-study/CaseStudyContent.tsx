
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SuccessStatsList from './SuccessStatsList';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudyContentProps {
  onRequestStudy: () => void;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ onRequestStudy }) => {
  const { t } = useLanguage();
  
  const successStats = [
    { id: 'stat1', text: t('case.stat1') },
    { id: 'stat2', text: t('case.stat2') },
    { id: 'stat3', text: t('case.stat3') },
    { id: 'stat4', text: t('case.stat4') }
  ];

  return (
    <div className="grid grid-cols-1 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="glass-card p-8 md:p-10 border border-white/20 relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-card/50 to-muted/30">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
          
          <Quote className="absolute top-6 right-6 text-tranzkit-blue w-8 h-8 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
              {t('case.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              {t('case.desc')}
            </p>
            
            <SuccessStatsList stats={successStats} />
            
            <div className="flex items-center justify-start mt-8">
              <Button 
                className="flex items-center space-x-2 rtl:space-x-reverse btn-primary group"
                onClick={onRequestStudy}
              >
                <span>{t('case.read.more')}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudyContent;

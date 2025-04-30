
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Route, 
  Smartphone, 
  Users, 
  FileSpreadsheet 
} from 'lucide-react';
import ModuleCard from '../ui-custom/ModuleCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '../ui/button';

const FeaturesSection = () => {
  const { t, language } = useLanguage();
  
  const modules = [
    {
      title: 'لوحة تحكم العمليات',
      description: 'تحكم كامل في كافة العمليات اللوجستية وإدارة الرحلات مع مؤشرات أداء فورية',
      icon: <LayoutDashboard className="w-8 h-8 text-tranzkit-blue" />,
      color: 'border-tranzkit-blue'
    },
    {
      title: 'تطبيق المشرفين',
      description: 'تطبيق خاص للمشرفين لمتابعة الرحلات ومراقبة الأداء وإدارة المخالفات',
      icon: <Users className="w-8 h-8 text-tranzkit-green" />,
      color: 'border-tranzkit-green'
    },
    {
      title: 'تطبيق الكابتن',
      description: 'واجهة سهلة للسائقين تمكنهم من تتبع الرحلات وإدارة المهام اليومية',
      icon: <Smartphone className="w-8 h-8 text-tranzkit-purple" />,
      color: 'border-tranzkit-purple'
    },
    {
      title: 'لوحة تحكم العميل',
      description: 'منصة مخصصة للعملاء لمتابعة الرحلات وإدارة الطلبات والاطلاع على التقارير',
      icon: <FileSpreadsheet className="w-8 h-8 text-tranzkit-yellow" />,
      color: 'border-tranzkit-yellow'
    },
    {
      title: 'تطبيق الراكب',
      description: 'تطبيق سهل الاستخدام للركاب لحجز الرحلات وتتبعها في الوقت الفعلي',
      icon: <Route className="w-8 h-8 text-tranzkit-orange" />,
      color: 'border-tranzkit-orange'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background/95 to-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute bottom-0 left-20 w-60 h-60 bg-tranzkit-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            {language === 'ar' ? 'مميزات تطبيق ترانزكيت للنقل الذكي' : 'Tranzkit Smart Transportation Features'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            {language === 'ar' 
              ? 'منظومة متكاملة من التطبيقات والحلول لإدارة أسطول النقل بكفاءة عالية' 
              : 'An integrated system of applications and solutions for efficient fleet management'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {modules.map((module, index) => (
            <ModuleCard 
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              color={module.color}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#apps">
            <Button variant="outline" className="border-primary/30 hover:border-primary">
              {language === 'ar' ? 'استكشف تطبيقاتنا بالتفصيل' : 'Explore Our Apps In Detail'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

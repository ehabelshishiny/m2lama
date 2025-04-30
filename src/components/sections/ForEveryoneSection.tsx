
import React from 'react';
import { motion } from 'framer-motion';
import { User, Car, Building, GraduationCap } from 'lucide-react';
import FeatureCard from '../ui-custom/FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';

const ForEveryoneSection = () => {
  const { t } = useLanguage();
  
  const userGroups = [
    {
      icon: <User className="w-6 h-6 text-tranzkit-blue" />,
      title: "الموظفون",
      description: "حجز رحلات سلسة وسهلة مع إمكانية التتبع المباشر",
      color: "bg-blue-100/30 text-tranzkit-blue",
      delay: 0.1
    },
    {
      icon: <Car className="w-6 h-6 text-tranzkit-green" />,
      title: "شركات النقل الجماعى",
      description: "إدارة فعالة للرحلات والمدفوعات بشكل ميسر",
      color: "bg-green-100/30 text-tranzkit-green",
      delay: 0.2
    },
    {
      icon: <Building className="w-6 h-6 text-tranzkit-purple" />,
      title: "المؤسسات والمصنع",
      description: "تحكم ذكي في الأعمال مع رؤى تحليلية متقدمة",
      color: "bg-purple-100/30 text-tranzkit-purple",
      delay: 0.3
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-tranzkit-blue" />,
      title: "المدارس",
      description: "تحسين تنقل الطلاب بأمان وكفاءة مع خدمات مخصصة للمؤسسات التعليمية",
      color: "bg-blue-100/30 text-tranzkit-blue",
      delay: 0.4
    }
  ];

  return (
    <section 
      id="for-everyone" 
      className="bg-gradient-to-b from-background/95 to-background relative py-[180px]"
      aria-labelledby="for-everyone-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tranzkit-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 my-0 py-[60px]">
          <motion.h2 
            id="for-everyone-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-heading"
          >
            مصمم للجميع في عالم التنقل
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="section-subheading"
          >
            حلول متكاملة تلبي احتياجات جميع الأطراف في منظومة النقل
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {userGroups.map((group, index) => (
            <FeatureCard 
              key={index} 
              icon={group.icon} 
              title={group.title} 
              description={group.description} 
              color={group.color} 
              delay={group.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForEveryoneSection;

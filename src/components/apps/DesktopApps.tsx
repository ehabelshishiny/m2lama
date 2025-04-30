
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

type DesktopAppProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
};

const DesktopApps = () => {
  const { language } = useLanguage();
  
  const desktopApps: DesktopAppProps[] = [
    {
      id: 'operations-dashboard',
      title: 'لوحة تحكم العمليات',
      description: 'منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات',
      icon: <LayoutDashboard className="w-12 h-12 text-tranzkit-blue" />,
      color: 'bg-tranzkit-blue/10',
      image: '/lovable-uploads/operation-dashbosrd-trans.PNG',
    },
    {
      id: 'client-dashboard',
      title: 'لوحة تحكم العملاء',
      description: 'منصة تتيح للعملاء متابعة الرحلات وإدارة الحسابات ومشاهدة التقارير',
      icon: <Monitor className="w-12 h-12 text-tranzkit-yellow" />,
      color: 'bg-tranzkit-yellow/10',
      image: '/lovable-uploads/client-trans.png',
    }
  ];

  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {desktopApps.map((app, index) => (
          <motion.div 
            key={index} 
            className="relative" 
            variants={itemVariants}
          >
            <Link to={`/app-${app.id}`} className="block h-full">
              <Card className="h-full glass-card shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-transparent to-background/10 rounded-full blur-xl"></div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className={`flex items-center justify-center p-4 rounded-2xl ${app.color}`}>
                      {app.icon}
                    </div>
                    
                    <div className="flex-1 text-center md:text-right">
                      <h4 className="text-xl font-bold mb-2">{app.title}</h4>
                      <p className="text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-transparent p-4 rounded-xl">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesktopApps;

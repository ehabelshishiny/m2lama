
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Users, Route } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

type MobileAppProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
};

const MobileApps = () => {
  const { language } = useLanguage();
  
  const mobileApps: MobileAppProps[] = [
    {
      id: 'captain',
      title: 'تطبيق الكابتن',
      description: 'تطبيق خاص للسائقين يمكن من خلاله تتبع الرحلات وإدارة المهام بسهولة',
      icon: <Smartphone className="w-12 h-12 text-tranzkit-purple" />,
      color: 'bg-tranzkit-purple/10',
      image: '/lovable-uploads/driver-app.png',
    },
    {
      id: 'supervisor',
      title: 'تطبيق المشرفين',
      description: 'تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان',
      icon: <Users className="w-12 h-12 text-tranzkit-green" />,
      color: 'bg-tranzkit-green/10',
      image: '/lovable-uploads/supervisor-app.png',
    },
    {
      id: 'rider',
      title: 'تطبيق الراكب',
      description: 'تطبيق سهل الاستخدام للركاب لحجز وتتبع الرحلات في الوقت الفعلي',
      icon: <Route className="w-12 h-12 text-tranzkit-orange" />,
      color: 'bg-tranzkit-orange/10',
      image: '/lovable-uploads/rider-app.png',
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
    <div>
      {/* Mobile view - stacked cards for small screens */}
      <div className="md:hidden">
        <div className="flex flex-col items-center gap-6 px-4">
          {mobileApps.map((app, index) => (
            <motion.div 
              key={index}
              className="w-full max-w-[280px]"
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Link to={`/app-${app.id}`} className="block">
                <Card className="bg-card h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`rounded-xl p-3 ${app.color}`}>
                        {app.icon}
                      </div>
                      <h4 className="text-xl font-bold">{app.title}</h4>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden mt-3 bg-transparent">
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="mt-3 text-sm text-center text-muted-foreground">
                      {app.description}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop view - horizontally arranged cards with overlapping effect */}
      <div className="hidden md:block relative h-[650px] max-w-6xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          {mobileApps.map((app, index) => {
            // Calculate position based on index
            let positionStyles = {};
            let rotationDeg = 0;
            
            if (index === 0) {
              positionStyles = { right: '50%', marginRight: '180px', top: '40%', marginTop: '-150px' };
              rotationDeg = -8;
            } else if (index === 1) {
              positionStyles = { left: '50%', marginLeft: '-140px', top: '40%', marginTop: '-200px' };
              rotationDeg = 0;
            } else {
              positionStyles = { left: '50%', marginLeft: '180px', top: '40%', marginTop: '-150px' };
              rotationDeg = 8;
            }
            
            return (
              <motion.div 
                key={index}
                className="absolute w-[280px]"
                style={{ 
                  ...positionStyles,
                  transform: `rotate(${rotationDeg}deg) translateY(-50%)`,
                  zIndex: index === 1 ? 20 : 10
                }}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={`/app-${app.id}`} className="block">
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`rounded-xl p-3 ${app.color}`}>
                          {app.icon}
                        </div>
                        <h4 className="text-xl font-bold">{app.title}</h4>
                      </div>
                      
                      <div className="rounded-xl overflow-hidden mt-3 bg-transparent">
                        <img 
                          src={app.image} 
                          alt={app.title} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="mt-3 text-sm text-center text-muted-foreground">
                        {app.description}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileApps;

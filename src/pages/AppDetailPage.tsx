
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureSection {
  title: string;
  description: string;
  items: string[];
}

interface AppDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageLarge?: string;
  color: string;
  primaryColor: string;
  featureSections: FeatureSection[];
  ctaText?: string;
  ctaLink?: string;
}

const appsData: Record<string, AppDetailProps> = {
  'captain': {
    id: 'captain',
    title: 'تطبيق الكابتن',
    subtitle: 'إدارة مهمات النقل وتتبع الماليات بكل سهولة',
    description: 'تطبيق خاص للسائقين يمكن من خلاله تتبع الرحلات وإدارة المهام بسهولة وتحسين الأداء',
    image: '/lovable-uploads/driver-app.png',
    imageLarge: '/lovable-uploads/driver-app.png',
    color: 'bg-tranzkit-purple/10',
    primaryColor: 'text-tranzkit-purple',
    featureSections: [
      {
        title: 'تطبيق السائق – زود السائقين بأدوات فعالة لتسهيل إدارة الرحلات وتتبعها بدقة.',
        description: 'حلول تتبع مرنة لكفاءة أعلى',
        items: [
          '•	الخيار ١: تتبع السائق بدون تفاعل مباشر.',
          '•	الخيار ٢: مسح رمز الراكب للتحقق من الركوب.',
          '•	الخيار ٣: التكامل مع أنظمة تتبع IMEI الحالية.'
        ]
      }
    ],
    ctaText: 'إحجز عرضًا توضيحيًا',
    ctaLink: '/contact'
  },
  'supervisor': {
    id: 'supervisor',
    title: 'تطبيق المشرفين',
    subtitle: 'إدارة ميدانية فعالة وتحكم شامل',
    description: 'تطبيق للمشرفين لإدارة ومراقبة أداء الأسطول والسائقين في الميدان بأعلى كفاءة',
    image: '/lovable-uploads/supervisor-app.png',
    imageLarge: '/lovable-uploads/supervisor-app.png',
    color: 'bg-tranzkit-green/10',
    primaryColor: 'text-tranzkit-green',
    featureSections: [
      {
        title: 'تطبيق المشرف – متابعة عمليات النقل على الأرض بفعالية',
        description: 'تأكد من سير العمليات بسلاسة من خلال مراقبة الرحلات وتتبع الامتثال وتسجيل الملاحظات المهمة',
        items: [
          'متابعة الرحلات اليومية والجدول الزمني لقائد السيارة',
          'التحقق من الركاب و السائقين والإلتزام بالجدول الزمني',
          'الاطلاع على أخر مكان لحظة بلحظة',
          'استلام وتنفيذ المهام اليومية الموكلة من الإدارة.',
          'تسجيل وتتبع الحوادث لحظة بحدوثها'
        ]
      }
    ],
    ctaText: 'إحجز عرضًا توضيحيًا',
    ctaLink: '/contact'
  },
  'rider': {
    id: 'rider',
    title: 'تطبيق الراكب',
    subtitle: 'تجربة تنقل سلسلة وسهولة متابعة',
    description: 'تطبيق سهل الاستخدام للركاب لحجز وتتبع الرحلات في الوقت الفعلي ومتابعة الحركة بسهولة',
    image: '/lovable-uploads/rider-app.png',
    imageLarge: '/lovable-uploads/rider-app.png',
    color: 'bg-tranzkit-orange/10',
    primaryColor: 'text-tranzkit-orange',
    featureSections: [
      {
        title: 'تطبيق الركاب – تجربة تنقل مريحة وسلسة',
        description: 'تطبيق الراكب هو حل متكامل لتجربة تنقل سهلة يوفر ميزات متعددة للمستخدمين، حيث يستطيع الراكب متابعة ومشاهدة وقت وصول وسائل النقل وتواريخها',
        items: [
          'التحقق من تاريخ الركوب والجدول الزمني',
          'متابعة مسار وحركة الحافلات لحظة بلحظة',
          'كشف الموظفين بشكل فوري وتحديد الهوية بسرعة',
          'طلب عروض الأسعار واستخراج الفواتير فوراً',
          'تسجيل وتتبع المخالفات لحظة حدوثها'
        ]
      }
    ],
    ctaText: 'إحجز عرضًا توضيحيًا',
    ctaLink: '/contact'
  },
  'client-dashboard': {
    id: 'client-dashboard',
    title: 'لوحة تحكم العملاء',
    subtitle: 'تحكم شامل وإدارة سهلة لحساب عملك',
    description: 'منصة تتيح للعملاء متابعة الرحلات وإدارة الحسابات ومشاهدة التقارير بطريقة سهلة وفعالة',
    image: '/lovable-uploads/client-trans.png',
    imageLarge: '/lovable-uploads/client-trans.png',
    color: 'bg-tranzkit-yellow/10',
    primaryColor: 'text-tranzkit-yellow',
    featureSections: [
      {
        title: 'لوحة التحكم الرئيسية',
        description: 'واجهة رئيسية تقدم نظرة شاملة على جميع العمليات والإحصائيات المهمة لحساب العميل',
        items: [
          'رؤية شاملة للرحلات النشطة والمكتملة',
          'إحصائيات مفصلة عن استخدام الخدمة',
          'متابعة الفواتير والمدفوعات',
          'تقارير أداء قابلة للتخصيص',
          'إدارة مستخدمي الحساب وصلاحياتهم'
        ]
      },
      {
        title: 'إدارة الرحلات والتقارير',
        description: 'حلول متكاملة لإدارة الرحلات والتقارير مع إمكانية تتبع كافة التفاصيل والإحصائيات',
        items: [
          'جدولة الرحلات وتعديلها بسهولة',
          'تحليلات متقدمة لأنماط الاستخدام',
          'تقارير مفصلة قابلة للتصدير',
          'متابعة التكاليف والميزانيات',
          'سجل كامل لتاريخ الخدمات المقدمة'
        ]
      }
    ],
    ctaText: 'إحجز عرضًا توضيحيًا',
    ctaLink: '/contact'
  },
  'operations-dashboard': {
    id: 'operations-dashboard',
    title: 'لوحة تحكم العمليات',
    subtitle: 'إدارة شاملة لعمليات النقل والأسطول',
    description: 'منصة إدارية متكاملة للتحكم في كافة العمليات اللوجستية وإدارة الرحلات بكفاءة عالية',
    image: '/lovable-uploads/operation-dashbosrd-trans.PNG',
    imageLarge: '/lovable-uploads/operation-dashbosrd-trans.PNG',
    color: 'bg-tranzkit-blue/10',
    primaryColor: 'text-tranzkit-blue',
    featureSections: [
      {
        title: 'إدارة العمليات المركزية',
        description: 'منصة مركزية توفر تحكمًا كاملاً في جميع جوانب العمليات اللوجستية وإدارة الأسطول',
        items: [
          'تخطيط وجدولة الرحلات بكفاءة عالية',
          'إدارة السائقين والمركبات بشكل مركزي',
          'توزيع المهام وتخصيص الموارد آليًا',
          'مراقبة حركة الأسطول في الوقت الفعلي',
          'تحليلات متقدمة لتحسين كفاءة التشغيل'
        ]
      },
      {
        title: 'التقارير والتحليلات',
        description: 'نظام متكامل للتقارير والتحليلات يوفر رؤى قيمة لتحسين الأداء التشغيلي',
        items: [
          'لوحات تحكم إحصائية قابلة للتخصيص',
          'تقارير أداء تفصيلية للسائقين والمركبات',
          'تحليل التكاليف وكفاءة استهلاك الوقود',
          'متابعة مؤشرات الأداء الرئيسية',
          'تقارير الصيانة والتحديثات الدورية'
        ]
      },
      {
        title: 'إدارة العملاء والفواتير',
        description: 'نظام متكامل لإدارة العملاء والفواتير مع إمكانية تتبع كافة المعاملات المالية',
        items: [
          'إدارة حسابات العملاء وبياناتهم',
          'إنشاء وإصدار الفواتير آليًا',
          'متابعة المدفوعات والمستحقات',
          'تقارير مالية شاملة ودقيقة',
          'إدارة العقود والاتفاقيات'
        ]
      },
      {
        title: 'إدارة الموردين والمدفوعات ',
        description: 'تقنيات متقدمة للإدارة المالية مع تنظيم دقيق للمدفوعات ',
        items: [
          'تتبع أرصدة الموردين وجدولة المدفوعات تلقائيًا',
          '"ACH"تجهيز ملفات الدفع تلقائيا ',
          'رؤية كاملة مع تحاليل التكاليف بوضوح تام'
        ]
      },
    ],
    ctaText: 'إحجز عرضًا توضيحيًا',
    ctaLink: '/contact'
  }
};

const AppDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && appsData[id]) {
      document.title = `${appsData[id].title} | ترانزكيت`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', appsData[id].description);
      }
    }
  }, [id]);

  if (!id || !appsData[id]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">التطبيق غير موجود</h1>
          <Link to="/">
            <Button>العودة للصفحة الرئيسية</Button>
          </Link>
        </div>
      </div>
    );
  }

  const app = appsData[id];
  
  // Add handler to navigate to contact page
  const handleContactClick = () => {
    navigate('/contact');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Navbar />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            <div className={`absolute top-20 right-[10%] w-96 h-96 ${app.color} rounded-full blur-3xl`}></div>
            <div className={`absolute bottom-20 left-[10%] w-96 h-96 ${app.color} rounded-full blur-3xl`}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <nav className="flex items-center text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  الرئيسية
                </Link>
                <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                <Link to="/#apps" className="text-muted-foreground hover:text-foreground transition-colors">
                  التطبيقات
                </Link>
                <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                <span className={`${app.primaryColor} font-medium`}>{app.title}</span>
              </nav>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="w-full md:w-1/2 md:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src={app.imageLarge || app.image} 
                  alt={app.title} 
                  className="w-full h-auto max-w-xl mx-auto rounded-2xl shadow-lg"
                />
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2 md:order-1"
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{app.title}</h1>
                <h2 className={`text-xl md:text-2xl ${app.primaryColor} mb-6 font-medium`}>{app.subtitle}</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{app.description}</p>
                
                {app.ctaText && (
                  <Button 
                    size="lg"
                    className={`${app.color} hover:opacity-90 ${app.primaryColor} group transition-all duration-300 transform hover:translate-y-[-2px] hover:text-white`}
                    onClick={handleContactClick}
                  >
                    {app.ctaText}
                    <ExternalLink className="ms-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-8"
            >
              {app.featureSections.map((section, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="overflow-hidden"
                >
                  <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-r-4 ${app.color}`}>
                    <CardContent className="p-8">
                      <h3 className={`text-2xl font-bold mb-4 ${app.primaryColor}`}>{section.title}</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">{section.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.items.map((item, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group"
                          >
                            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${app.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                              <div className={`w-2 h-2 rounded-full ${app.primaryColor.replace('text-', 'bg-')}`}></div>
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-20 p-10 rounded-2xl glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">هل تريد معرفة المزيد عن {app.title}؟</h3>
                <p className="text-muted-foreground mb-8 text-lg">تواصل معنا اليوم للحصول على عرض توضيحي مخصص أو لمعرفة المزيد من التفاصيل</p>
                
                <Button 
                  size="lg" 
                  className={`${app.color} hover:opacity-90 ${app.primaryColor} group transition-all duration-300 transform hover:translate-y-[-2px] hover:text-white`}
                  onClick={handleContactClick}
                >
                  تواصل معنا
                  <ExternalLink className="ms-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AppDetailPage;

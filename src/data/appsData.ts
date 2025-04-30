
export interface FeatureSection {
  title: string;
  description: string;
  items: string[];
}

export interface AppData {
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

export const appsData: Record<string, AppData> = {
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


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsAndPolicy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');
  
  // Set active tab based on the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab === 'privacy') {
      setActiveTab('privacy');
    } else {
      setActiveTab('terms');
    }
  }, [location.search]);

  // Change the tab and update URL
  const handleTabChange = (tab: 'terms' | 'privacy') => {
    setActiveTab(tab);
    navigate(`/terms-policy?tab=${tab}`);
  };

  return (
    <div className={`bg-background min-h-screen text-foreground overflow-x-hidden ${language === 'en' ? 'ltr' : 'rtl'}`}>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-tranzkit-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tranzkit-purple/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
            >
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
                <button 
                  onClick={() => handleTabChange('terms')}
                  className={`px-6 py-2 rounded-t-lg transition-colors ${
                    activeTab === 'terms' 
                      ? 'bg-tranzkit-blue/20 text-white font-bold' 
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {t('terms.title')}
                </button>
                <button 
                  onClick={() => handleTabChange('privacy')}
                  className={`px-6 py-2 rounded-t-lg transition-colors ${
                    activeTab === 'privacy' 
                      ? 'bg-tranzkit-blue/20 text-white font-bold' 
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {t('privacy.title')}
                </button>
              </div>
              
              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {activeTab === 'terms' ? (
                  <TermsContent language={language} />
                ) : (
                  <PrivacyContent language={language} />
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const TermsContent = ({ language }: { language: 'ar' | 'en' }) => {
  if (language === 'en') {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Tranzkit platform. By using our services, you agree to comply with these terms and conditions. Please read them carefully.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">2. Use of Services</h2>
        <p className="mb-4">
          Tranzkit provides an integrated platform for fleet management and smart mobility services. Our services must be used in accordance with applicable laws and regulations.
        </p>
        <p className="mb-4">
          You are not permitted to use our services for any illegal or unauthorized purpose. We reserve the right to suspend or terminate access to our services in case of violation of these terms.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">3. Accounts and Subscriptions</h2>
        <p className="mb-4">
          You may need to create an account to access certain features of our platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
        <p className="mb-4">
          Different subscription plans are available with various features. Fees and payments are subject to the terms specified in the chosen subscription plan.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property Rights</h2>
        <p className="mb-4">
          All intellectual property rights related to our services remain the property of Tranzkit or its licensors. Your use of our services does not grant you ownership of any intellectual property rights in our services or the content you access.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">5. Modifications to Terms</h2>
        <p className="mb-4">
          We may modify these terms from time to time. We will notify you of any material changes before they become effective.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">6. Warranties and Disclaimers</h2>
        <p className="mb-4">
          We provide our services with a reasonable level of skill and care, and we hope you enjoy using them. However, there are certain things we cannot promise regarding our services.
        </p>
        <p className="mb-4">
          Except as expressly provided in these terms or additional terms, Tranzkit makes no specific promises about the services.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">7. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by the applicable laws in the Kingdom of Saudi Arabia without regard to conflict of laws principles.
        </p>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Last updated: June 1, 2023
        </p>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">شروط الاستخدام</h1>
      
      <h2 className="text-xl font-bold mt-8 mb-4">1. مقدمة</h2>
      <p className="mb-4">
        مرحبًا بك في منصة Tranzkit. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">2. استخدام الخدمات</h2>
      <p className="mb-4">
        تقدم Tranzkit منصة متكاملة لإدارة أساطيل النقل وخدمات التنقل الذكي. يجب استخدام خدماتنا وفقًا للقوانين واللوائح المعمول بها.
      </p>
      <p className="mb-4">
        لا يُسمح باستخدام خدماتنا لأي غرض غير قانوني أو غير مصرح به. نحتفظ بالحق في تعليق أو إنهاء الوصول إلى خدماتنا في حالة انتهاك هذه الشروط.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">3. الحسابات والاشتراكات</h2>
      <p className="mb-4">
        قد تحتاج إلى إنشاء حساب للوصول إلى بعض ميزات منصتنا. أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث ضمن حسابك.
      </p>
      <p className="mb-4">
        تتوفر خطط اشتراك مختلفة بميزات متنوعة. تخضع الرسوم والمدفوعات للشروط المحددة في خطة الاشتراك المختارة.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">4. حقوق الملكية الفكرية</h2>
      <p className="mb-4">
        تظل جميع حقوق الملكية الفكرية المتعلقة بخدماتنا ملكًا لـ Tranzkit أو المرخصين لها. لا يمنحك استخدام خدماتنا ملكية أي حقوق ملكية فكرية في خدماتنا أو المحتوى الذي تصل إليه.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">5. التعديلات على الشروط</h2>
      <p className="mb-4">
        قد نقوم بتعديل هذه الشروط من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية قبل أن تصبح سارية المفعول.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">6. الضمانات وإخلاء المسؤولية</h2>
      <p className="mb-4">
        نقدم خدماتنا بمستوى معقول من المهارة والعناية، ونأمل أن تستمتع باستخدامها. ومع ذلك، هناك أمور معينة لا نستطيع التعهد بها فيما يتعلق بخدماتنا.
      </p>
      <p className="mb-4">
        باستثناء ما هو منصوص عليه صراحةً في هذه الشروط أو الشروط الإضافية، لا تقدم Tranzkit أي وعود محددة حول الخدمات.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">7. القانون الحاكم</h2>
      <p className="mb-4">
        تخضع هذه الشروط للقوانين السارية في المملكة العربية السعودية دون اعتبار لمبادئ تنازع القوانين.
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        تم التحديث في: 1 يونيو 2023
      </p>
    </div>
  );
};

const PrivacyContent = ({ language }: { language: 'ar' | 'en' }) => {
  if (language === 'en') {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Tranzkit respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect and use your personal data when you use our platform.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">2. Data We Collect</h2>
        <p className="mb-4">
          We may collect and process different types of personal data about you, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Contact information (such as name, email address, and phone number)</li>
          <li>Account information (such as username and password)</li>
          <li>Technical information (such as IP address, browser type, and operating system)</li>
          <li>Usage data (such as how you use our platform)</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
        <p className="mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>To provide, manage, and improve our services</li>
          <li>To create and manage your account</li>
          <li>To communicate with you about our services</li>
          <li>To provide customer support</li>
          <li>To comply with legal obligations</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. Data Sharing</h2>
        <p className="mb-4">
          We may share your personal data with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Service providers who perform services on our behalf</li>
          <li>Affiliates and business partners</li>
          <li>Legal authorities when required</li>
        </ul>
        <p className="mb-4">
          We will not sell or rent your personal data to third parties without your consent.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">5. Data Security</h2>
        <p className="mb-4">
          We take appropriate security measures to protect your personal data from loss, unauthorized access, alteration, or disclosure.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">6. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data as long as necessary for the purposes we collected it for, including for the purposes of satisfying any legal requirements.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">7. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Access to your personal data</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data</li>
          <li>Objection to processing of your data</li>
          <li>Data portability</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">8. Changes to the Privacy Policy</h2>
        <p className="mb-4">
          We may update the privacy policy from time to time. We will notify you of any material changes by email or a notice on our website.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have questions about our privacy policy, please contact us at info@tranzkit.com.
        </p>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Last updated: June 1, 2023
        </p>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">سياسة الخصوصية</h1>
      
      <h2 className="text-xl font-bold mt-8 mb-4">1. المقدمة</h2>
      <p className="mb-4">
        تحترم Tranzkit خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا لبياناتك الشخصية عند استخدام منصتنا.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">2. البيانات التي نجمعها</h2>
      <p className="mb-4">
        قد نجمع ونعالج أنواعًا مختلفة من البيانات الشخصية عنك، بما في ذلك:
      </p>
      <ul className="list-disc mr-6 mb-4 space-y-2">
        <li>معلومات الاتصال (مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف)</li>
        <li>معلومات الحساب (مثل اسم المستخدم وكلمة المرور)</li>
        <li>المعلومات الفنية (مثل عنوان IP ونوع المتصفح ونظام التشغيل)</li>
        <li>بيانات الاستخدام (مثل كيفية استخدامك لمنصتنا)</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">3. كيفية استخدام بياناتك</h2>
      <p className="mb-4">
        نستخدم بياناتك الشخصية للأغراض التالية:
      </p>
      <ul className="list-disc mr-6 mb-4 space-y-2">
        <li>توفير وإدارة وتحسين خدماتنا</li>
        <li>إنشاء وإدارة حسابك</li>
        <li>التواصل معك حول خدماتنا</li>
        <li>تقديم الدعم العملاء</li>
        <li>الالتزام بالالتزامات القانونية</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">4. مشاركة البيانات</h2>
      <p className="mb-4">
        قد نشارك بياناتك الشخصية مع:
      </p>
      <ul className="list-disc mr-6 mb-4 space-y-2">
        <li>مقدمي الخدمات الذين يعملون بالنيابة عنا</li>
        <li>الشركات التابعة وشركاء الأعمال</li>
        <li>السلطات القانونية عند الاقتضاء</li>
      </ul>
      <p className="mb-4">
        لن نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة دون موافقتك.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">5. أمان البيانات</h2>
      <p className="mb-4">
        نتخذ تدابير أمنية مناسبة لحماية بياناتك الشخصية من الضياع أو الوصول غير المصرح به أو التغيير أو الإفصاح.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">6. احتفاظك بالبيانات</h2>
      <p className="mb-4">
        نحتفظ ببياناتك الشخصية طالما كان ذلك ضروريًا للأغراض التي جمعناها من أجلها، بما في ذلك لأغراض الالتزام بالمتطلبات القانونية.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">7. حقوقك</h2>
      <p className="mb-4">
        اعتمادًا على موقعك، قد يكون لديك حقوق معينة فيما يتعلق ببياناتك الشخصية، بما في ذلك:
      </p>
      <ul className="list-disc mr-6 mb-4 space-y-2">
        <li>الوصول إلى بياناتك الشخصية</li>
        <li>تصحيح البيانات غير الدقيقة</li>
        <li>حذف بياناتك</li>
        <li>الاعتراض على معالجة بياناتك</li>
        <li>نقل بياناتك</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">8. التغييرات على سياسة الخصوصية</h2>
      <p className="mb-4">
        قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على موقعنا.
      </p>
      
      <h2 className="text-xl font-bold mt-8 mb-4">9. الاتصال بنا</h2>
      <p className="mb-4">
        إذا كانت لديك أسئلة حول سياسة الخصوصية الخاصة بنا، فيرجى الاتصال بنا على info@tranzkit.com.
      </p>
      
      <p className="mt-8 text-sm text-muted-foreground">
        تم التحديث في: 1 يونيو 2023
      </p>
    </div>
  );
};

export default TermsAndPolicy;

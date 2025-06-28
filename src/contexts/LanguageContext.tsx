import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.case-studies': 'Case Studies',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Digital Solutions for the Modern Middle East',
      'hero.subtitle': 'Empowering businesses with cutting-edge technology solutions that drive growth and innovation.',
      'hero.cta': 'Get Started',
      'hero.learn-more': 'Learn More',
      
      // About Section
      'about.badge': 'About Us',
      'about.title': 'Leading the Digital Revolution',
      'about.description': 'Founded in 2025, Oasis Solutions has been at the forefront of digital transformation in the Middle East, delivering innovative solutions that drive business success.',
      'about.mission.title': 'Our Mission',
      'about.mission.description': 'To empower Middle Eastern businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in the digital age.',
      'about.vision.title': 'Our Vision',
      'about.vision.description': 'To be the most trusted technology partner for businesses across the GCC and Levant regions, known for our innovation, quality, and commitment to client success.',
      'about.team.title': 'Leadership Team',
      'about.projects': 'Projects Delivered',
      
      // Services Section
      'services.badge': 'Our Services',
      'services.title': 'Comprehensive Digital Solutions',
      'services.subtitle': 'From concept to deployment, we provide end-to-end digital solutions that transform your business.',
      'services.consulting': 'IT Consulting',
      'services.consulting.desc': 'Expert advice to help you make the right technology decisions.',
      'services.development': 'Custom Software Development',
      'services.development.desc': 'Tailored software solutions to meet your unique business needs.',
      'services.cloud': 'Cloud Solutions',
      'services.cloud.desc': 'Scalable and secure cloud services for modern businesses.',
      'services.support': 'Ongoing Support',
      'services.support.desc': 'Reliable support and maintenance for your digital assets.',
      
      // Case Studies Section
      'case-studies.badge': 'Case Studies',
      'case-studies.title': 'Success Stories',
      'case-studies.subtitle': 'Discover how we\'ve helped businesses across the Middle East achieve their digital transformation goals with measurable results.',
      'case-studies.view-details': 'View Details',
      'case-studies.client': 'Client',
      'case-studies.industry': 'Industry',
      'case-studies.results': 'Results',
      'case-studies.technologies': 'Technologies',
      'case-studies.more': 'More Case Studies',
      
      // Contact Section
      'contact.badge': 'Get In Touch',
      'contact.title': 'Ready to Transform Your Business?',
      'contact.subtitle': 'Let\'s discuss how our digital solutions can help you achieve your goals.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.success': 'Your message has been sent successfully!',
      'contact.error': 'There was an error sending your message. Please try again.',
      'contact.required': 'This field is required.',
      'contact.invalidEmail': 'Please enter a valid email address.',
      
      // Footer
      'footer.copyright': '© 2025 Oasis Solutions. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.newsletter.title': 'Newsletter',
      'footer.newsletter.description': 'Subscribe to our newsletter for the latest industry insights and updates.',
      'footer.newsletter.placeholder': 'Enter your email',
      'footer.newsletter.subscribe': 'Subscribe',
      'footer.follow': 'Follow us:',
      'footer.phone': '+971 4 xxx xxxx',
      'footer.email': 'oasissolutions@gmail.com',
      
      // Why Choose Us Section
      'why-choose-us.badge': 'Why Choose Us',
      'why-choose-us.title': 'Your Trusted Technology Partner',
      'why-choose-us.subtitle': 'We combine global expertise with local insights to deliver exceptional results for businesses throughout the Middle East.',
      'why-choose-us.regional.title': 'Regional Expertise',
      'why-choose-us.regional.description': 'Deep understanding of Middle Eastern markets, regulations, and business culture across GCC and Levant regions.',
      'why-choose-us.regional.stats': '8+ Countries Served',
      'why-choose-us.multilingual.title': 'Multilingual Team',
      'why-choose-us.multilingual.description': 'Native Arabic and English speakers ensuring seamless communication and cultural alignment.',
      'why-choose-us.multilingual.stats': 'Arabic & English Native',
      'why-choose-us.rapid.title': 'Rapid Delivery',
      'why-choose-us.rapid.description': 'Agile methodologies and experienced teams enable faster time-to-market without compromising quality.',
      'why-choose-us.rapid.stats': '30% Faster Delivery',
      'why-choose-us.iso.title': 'ISO-Certified Processes',
      'why-choose-us.iso.description': 'Quality-assured development following international standards and best practices.',
      'why-choose-us.iso.stats': 'ISO 9001:2015 Certified',
      'why-choose-us.stats.projects': 'Successful Projects',
      'why-choose-us.stats.developers': 'Expert Developers',
      'why-choose-us.stats.satisfaction': 'Client Satisfaction',
      'why-choose-us.stats.support': 'Support Available',
      
      // Industries
      'industries.ecommerce': 'E-commerce',
      'industries.banking': 'Banking & Finance',
      'industries.healthcare': 'Healthcare',
      'industries.education': 'Education',
      'industries.government': 'Government',
      'industries.manufacturing': 'Manufacturing',
      
      // Header
      'header.company': 'Oasis Solutions',
      'header.get-quote': 'Get Quote',
      'header.talk-expert': 'Talk to Expert',
      
      // Team Members
      'team.adrian.name': 'Adrian Kowalski',
      'team.adrian.role': 'CEO & Founder',
      'team.adrian.experience': '15+ years in enterprise software',
      'team.weronika.name': 'Weronika Gałązka',
      'team.weronika.role': 'CTO',
      'team.weronika.experience': '12+ years in technology leadership',
      'team.omar.name': 'Omar Hassan',
      'team.omar.role': 'Lead Developer',
      'team.omar.experience': '10+ years in full-stack development',
      
      // Case Studies Data
      'case-studies.ecommerce.title': 'E-commerce Platform for Retail Chain',
      'case-studies.ecommerce.client': 'Major UAE Retailer',
      'case-studies.ecommerce.description': 'Complete digital transformation with multi-channel e-commerce platform serving 100K+ customers.',
      'case-studies.ecommerce.sales': '300% increase in online sales',
      'case-studies.ecommerce.customers': '50K+ new customers acquired',
      'case-studies.ecommerce.delivery': '6 months delivery time',
      
      'case-studies.banking.title': 'Banking Mobile Application',
      'case-studies.banking.client': 'Regional Bank - Saudi Arabia',
      'case-studies.banking.description': 'Secure mobile banking app with advanced features serving over 200K active users daily.',
      'case-studies.banking.users': '200K+ daily active users',
      'case-studies.banking.transactions': '40% increase in digital transactions',
      'case-studies.banking.development': '8 months development',
      
      'case-studies.healthcare.title': 'Healthcare Management System',
      'case-studies.healthcare.client': 'Medical Center Group - Qatar',
      'case-studies.healthcare.description': 'Comprehensive patient management system streamlining operations across 5 medical facilities.',
      'case-studies.healthcare.processing': '60% faster patient processing',
      'case-studies.healthcare.patients': '10K+ patients managed monthly',
      'case-studies.healthcare.implementation': '4 months implementation',
      
      // Industries for case studies
      'industries.retail': 'Retail',
      'industries.fintech': 'FinTech',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'خدماتنا',
      'nav.case-studies': 'دراسات الحالة',
      'nav.contact': 'اتصل بنا',
      
      // Hero Section
      'hero.title': 'حلول رقمية للشرق الأوسط الحديث',
      'hero.subtitle': 'تمكين الشركات بحلول تكنولوجية متطورة تدفع النمو والابتكار.',
      'hero.cta': 'ابدأ الآن',
      'hero.learn-more': 'اعرف المزيد',
      
      // About Section
      'about.badge': 'من نحن',
      'about.title': 'قيادة الثورة الرقمية',
      'about.description': 'تأسست حلول الواحة في عام 2025، وكانت في طليعة التحول الرقمي في الشرق الأوسط، وتقديم حلول مبتكرة تدفع نجاح الأعمال.',
      'about.mission.title': 'مهمتنا',
      'about.mission.description': 'تمكين الشركات في الشرق الأوسط بحلول تكنولوجية متطورة تدفع النمو والكفاءة والميزة التنافسية في العصر الرقمي.',
      'about.vision.title': 'رؤيتنا',
      'about.vision.description': 'أن نكون الشريك التكنولوجي الأكثر ثقة للشركات في جميع أنحاء دول مجلس التعاون الخليجي وبلاد الشام، معروفين بابتكارنا وجودتنا والتزامنا بنجاح العميل.',
      'about.team.title': 'فريق القيادة',
      'about.projects': 'مشروع تم تسليمه',
      
      // Services Section
      'services.badge': 'خدماتنا',
      'services.title': 'حلول رقمية شاملة',
      'services.subtitle': 'من المفهوم إلى النشر، نقدم حلول رقمية شاملة تحول عملك.',
      'services.consulting': 'استشارات تقنية المعلومات',
      'services.consulting.desc': 'نصائح خبراء لمساعدتك في اتخاذ قرارات تقنية صحيحة.',
      'services.development': 'تطوير البرمجيات المخصصة',
      'services.development.desc': 'حلول برمجية مصممة خصيصًا لتلبية احتياجات عملك.',
      'services.cloud': 'حلول السحابة',
      'services.cloud.desc': 'خدمات سحابية آمنة وقابلة للتوسع للأعمال الحديثة.',
      'services.support': 'الدعم المستمر',
      'services.support.desc': 'دعم وصيانة موثوقة لأصولك الرقمية.',
      
      // Case Studies Section
      'case-studies.badge': 'دراسات الحالة',
      'case-studies.title': 'قصص النجاح',
      'case-studies.subtitle': 'اكتشف كيف ساعدنا الشركات في جميع أنحاء الشرق الأوسط على تحقيق أهداف التحول الرقمي مع نتائج قابلة للقياس.',
      'case-studies.view-details': 'عرض التفاصيل',
      'case-studies.client': 'العميل',
      'case-studies.industry': 'الصناعة',
      'case-studies.results': 'النتائج',
      'case-studies.technologies': 'التقنيات',
      'case-studies.more': 'دراسات حالة أخرى',
      
      // Contact Section
      'contact.badge': 'تواصل معنا',
      'contact.title': 'مستعد لتحويل عملك؟',
      'contact.subtitle': 'دعنا نناقش كيف يمكن لحلولنا الرقمية مساعدتك في تحقيق أهدافك.',
      'contact.name': 'الاسم',
      'contact.email': 'البريد الإلكتروني',
      'contact.message': 'الرسالة',
      'contact.send': 'إرسال الرسالة',
      'contact.success': 'تم إرسال رسالتك بنجاح!',
      'contact.error': 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
      'contact.required': 'هذا الحقل مطلوب.',
      'contact.invalidEmail': 'يرجى إدخال بريد إلكتروني صالح.',
      
      // Footer
      'footer.copyright': '© 2025 حلول الواحة. جميع الحقوق محفوظة.',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الخدمة',
      'footer.newsletter.title': 'النشرة الإخبارية',
      'footer.newsletter.description': 'اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى والتحديثات في الصناعة.',
      'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
      'footer.newsletter.subscribe': 'اشتراك',
      'footer.follow': 'تابعنا:',
      'footer.phone': '+971 4 xxx xxxx',
      'footer.email': 'oasissolutions@gmail.com',
      
      // Why Choose Us Section
      'why-choose-us.badge': 'لماذا تختارنا',
      'why-choose-us.title': 'شريكك التكنولوجي الموثوق',
      'why-choose-us.subtitle': 'نجمع بين الخبرة العالمية والرؤى المحلية لتقديم نتائج استثنائية للشركات في جميع أنحاء الشرق الأوسط.',
      'why-choose-us.regional.title': 'الخبرة الإقليمية',
      'why-choose-us.regional.description': 'فهم عميق للأسواق الشرق أوسطية واللوائح وثقافة الأعمال في جميع أنحاء دول مجلس التعاون الخليجي وبلاد الشام.',
      'why-choose-us.regional.stats': '8+ دولة تم خدمتها',
      'why-choose-us.multilingual.title': 'فريق متعدد اللغات',
      'why-choose-us.multilingual.description': 'متحدثون أصليون بالعربية والإنجليزية يضمنون التواصل السلس والمحاذاة الثقافية.',
      'why-choose-us.multilingual.stats': 'عربي وإنجليزي أصلي',
      'why-choose-us.rapid.title': 'التسليم السريع',
      'why-choose-us.rapid.description': 'المنهجيات الرشيقة والفرق الخبيرة تمكن من تسريع الوصول للسوق دون المساس بالجودة.',
      'why-choose-us.rapid.stats': '30% تسليم أسرع',
      'why-choose-us.iso.title': 'العمليات المعتمدة من الأيزو',
      'why-choose-us.iso.description': 'تطوير مضمون الجودة يتبع المعايير الدولية وأفضل الممارسات.',
      'why-choose-us.iso.stats': 'معتمد من الأيزو 9001:2015',
      'why-choose-us.stats.projects': 'مشروع ناجح',
      'why-choose-us.stats.developers': 'مطور خبير',
      'why-choose-us.stats.satisfaction': 'رضا العملاء',
      'why-choose-us.stats.support': 'الدعم متاح',
      
      // Industries
      'industries.ecommerce': 'التجارة الإلكترونية',
      'industries.banking': 'البنوك والتمويل',
      'industries.healthcare': 'الرعاية الصحية',
      'industries.education': 'التعليم',
      'industries.government': 'الحكومة',
      'industries.manufacturing': 'التصنيع',
      
      // Header
      'header.company': 'حلول الواحة',
      'header.get-quote': 'احصل على عرض سعر',
      'header.talk-expert': 'تحدث مع خبير',
      
      // Team Members
      'team.adrian.name': 'أدريان كوالسكي',
      'team.adrian.role': 'الرئيس التنفيذي والمؤسس',
      'team.adrian.experience': '15+ سنة في برمجيات المؤسسات',
      'team.weronika.name': 'فيرونيكا جالازكا',
      'team.weronika.role': 'مدير التكنولوجيا',
      'team.weronika.experience': '12+ سنة في قيادة التكنولوجيا',
      'team.omar.name': 'عمر حسن',
      'team.omar.role': 'مطور رئيسي',
      'team.omar.experience': '10+ سنة في التطوير الشامل',
      
      // Case Studies Data
      'case-studies.ecommerce.title': 'منصة التجارة الإلكترونية لسلسلة التجزئة',
      'case-studies.ecommerce.client': 'تاجر إماراتي رئيسي',
      'case-studies.ecommerce.description': 'تحول رقمي كامل مع منصة تجارة إلكترونية متعددة القنوات تخدم أكثر من 100 ألف عميل.',
      'case-studies.ecommerce.sales': '300% زيادة في المبيعات عبر الإنترنت',
      'case-studies.ecommerce.customers': '50 ألف+ عميل جديد تم اكتسابهم',
      'case-studies.ecommerce.delivery': '6 أشهر وقت التسليم',
      
      'case-studies.banking.title': 'تطبيق البنوك المحمول',
      'case-studies.banking.client': 'بنك إقليمي - المملكة العربية السعودية',
      'case-studies.banking.description': 'تطبيق بنكي محمول آمن بميزات متقدمة يخدم أكثر من 200 ألف مستخدم نشط يومياً.',
      'case-studies.banking.users': '200 ألف+ مستخدم نشط يومياً',
      'case-studies.banking.transactions': '40% زيادة في المعاملات الرقمية',
      'case-studies.banking.development': '8 أشهر تطوير',
      
      'case-studies.healthcare.title': 'نظام إدارة الرعاية الصحية',
      'case-studies.healthcare.client': 'مجموعة المركز الطبي - قطر',
      'case-studies.healthcare.description': 'نظام شامل لإدارة المرضى يبسط العمليات عبر 5 مرافق طبية.',
      'case-studies.healthcare.processing': '60% معالجة أسرع للمرضى',
      'case-studies.healthcare.patients': '10 ألف+ مريض يتم إدارتهم شهرياً',
      'case-studies.healthcare.implementation': '4 أشهر تنفيذ',
      
      // Industries for case studies
      'industries.retail': 'التجزئة',
      'industries.fintech': 'التكنولوجيا المالية',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}; 
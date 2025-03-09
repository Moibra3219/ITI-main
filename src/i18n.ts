// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "About": "About",
      "Policy": "Policy",
      "Mission": "Mission",
      "Product": "Product",
      "Tell us everything": "Tell us everything",
      "Contact": "Contact",
      "Do you have any question? Feel free to reach out.": "Do you have any question? Feel free to reach out.",
      "Let's Chat": "Let's Chat",
      "Application Security": "Application Security",
      "Software Principles": "Software Principles",
      "Support Center": "Support Center",
      "Customer Support": "Customer Support",
      "Address": "Address",
      "Press": "Press",
      "Careers & Culture": "Careers & Culture",
      "Language": "Language",
      "Explore": "Explore",
      "Learn more": "Learn more",
      "Get started": "Get started",
      "Submit": "Submit",
      "Message": "Message",
      "Your Message": "Your Message",
      "Name": "Name",
      "Your Name": "Your Name",
      "Email": "Email",
      "Your Email": "Your Email"
    }
    
  },
  fr: {
    translation: {
      "About": "À propos",
      "Policy": "Politique",
      "Mission": "Mission",
      "Product": "Produit",
      "Tell us everything": "Dites-nous tout",
      "Contact": "Contact",
      "Do you have any question? Feel free to reach out.": "Vous avez des questions ? N'hésitez pas à nous contacter.",
      "Let's Chat": "Discutons",
      "Application Security": "Sécurité des Applications",
      "Software Principles": "Principes Logiciels",
      "Support Center": "Centre d'Assistance",
      "Customer Support": "Support Client",
      "Address": "Adresse",
      "Press": "Presse",
      "Careers & Culture": "Carrières & Culture",
      "Language": "Langue",
      "Explore": "Explorer",
      "Learn more": "En savoir plus",
      "Get started": "Commencer",
      "Submit": "Envoyer",
      "Message": "Message",
      "Your Message": "Votre Message",
      "Name": "Nom",
      "Your Name": "Votre Nom",
      "Email": "Email",
      "Your Email": "Votre Email"
    }
  },
  ar: {
    translation: {
      "About": "من نحن",
      "Policy": "السياسات",
      "Mission": "مهمتنا",
      "Product": "المنتجات",
      "Tell us everything": "أخبرنا كل شيء",
      "Contact": "اتصل بنا",
      "Do you have any question? Feel free to reach out.": "هل لديك أي سؤال؟ لا تتردد في التواصل معنا",
      "Let's Chat": "دعنا نتحدث",
      "Application Security": "أمن التطبيقات",
      "Software Principles": "مبادئ البرمجيات",
      "Support Center": "مركز الدعم",
      "Customer Support": "دعم العملاء",
      "Address": "العنوان",
      "Press": "الأخبار الصحفية",
      "Careers & Culture": "الوظائف والثقافة",
      "Language": "اللغة",
      "Explore": "استكشف",
      "Learn more": "اعرف المزيد",
      "Get started": "ابدأ الآن",
      "Submit": "إرسال",
      "Message": "الرسالة",
      "Your Message": "رسالتك",
      "Name": "الاسم",
      "Your Name": "اسمك",
      "Email": "البريد الإلكتروني",
      "Your Email": "بريدك الإلكتروني"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Initialize direction
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

export default i18n;
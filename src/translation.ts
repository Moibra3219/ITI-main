// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { changeLanguageDirection } from './utils/language';

// Import translations from separate files for better organization
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/ar.json';
import frTranslations from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    fallbackLng: 'en', // Default language if the detected language is not available
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng', // Key for storing language in localStorage
      lookupCookie: 'i18next', // Key for storing language in cookies
      cookieMinutes: 10080, // Cookie expiration time in minutes (1 week)
      cookieDomain: window.location.hostname // Domain for the cookie
    },
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    },
    react: {
      useSuspense: false // Disable suspense to prevent loading issues
    }
  });

// Add language change listener
i18n.on('languageChanged', (lng) => {
  changeLanguageDirection(lng);
});

export default i18n;
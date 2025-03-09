// src/common/utils/language.ts
export const changeLanguageDirection = (language: string) => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  };
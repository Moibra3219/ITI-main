// src/utils/language.ts
export const changeLanguageDirection = (language: string) => {
    // Change HTML dir attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Change HTML lang attribute
    document.documentElement.lang = language;
    // Add/remove RTL class from body
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };
  
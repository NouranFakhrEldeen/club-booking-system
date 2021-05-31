import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


// languages
import ar from './langs/ar.json';
import en from './langs/en.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar,
      en,
    },
    fallbackLng: 'ar',
    initImmediate: false,
    react: {
      wait: true,
    },
  });
i18n.defaultLocale = 'ar';

export default i18n ;
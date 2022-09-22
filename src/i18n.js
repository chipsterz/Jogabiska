import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import langEN from './locales/en/translation.json';
import langFR from './locales/fr/translation.json';
import langPT from './locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: langEN,
      },
      fr: {
        translation: langFR,
      },
      pt: {
        translation: langPT,
      },
    },
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

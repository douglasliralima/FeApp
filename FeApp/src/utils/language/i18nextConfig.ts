import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './json/en.json';
import es from './json/es.json';
import pt from './json/pt.json';

const resources = {
    en: {
        translation: en,
    },
    pt: {
        translation: pt,
    },
    es: {
        translation: es,
    },
};

const initializeI18Next = () => {
  return i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: "pt",
    fallbackLng: "pt",
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default {initializeI18Next};
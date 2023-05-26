import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['fr'];
const availableLanguages = ['en', 'nl', 'fr'];

i18n
  .use(Backend) // load translations using http (default public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // fallback language is french
    detection: {
      checkWhitelist: true, // options for language detection
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
    resources: {
      fr: {
        translation: {
          greeting: {
            hello: "Salut les gars"
          }
        }
      }
    }
  });

export default i18n;
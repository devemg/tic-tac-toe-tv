import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from 'i18next-http-backend'
import { supportedLanguages } from '@models/language'
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(I18NextHttpBackend) // fetch resources from http
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: '/locales/{{ns}}_{{lng}}.json'
    },
      supportedLngs: [...Object.keys(supportedLanguages)],
      debug: false,
  });

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import es from './locales/es.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // fallbackLng: import.meta.env.VITE_FALLBACK_LANG || 'en',
    fallbackLng: 'en',
    fallbackNS: 'default',
    resources: {
      en,
      es
    },
    interpolation: {
      // react already safes from xss
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },
    parseMissingKeyHandler: (key: string) => `[${key}]`
  })

export default i18n

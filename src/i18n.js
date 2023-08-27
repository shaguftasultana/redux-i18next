import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import enTranslation from "../src/translations/en/en.json"; // English translations
import arTranslation from "../src/translations/ar/ar.json"; // Arabic translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    // Add other languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

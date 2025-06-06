import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

// Get saved language or default to Greek  
const savedLanguage = localStorage.getItem('i18nextLng') || 'el';

console.log('🔥 i18n: Saved language:', savedLanguage);
console.log('🔥 i18n: Resources loaded:', Object.keys(resources));
console.log('🔥 i18n: Greek translations keys:', Object.keys(resources.el?.translation || {}));
console.log('🔥 i18n: English translations keys:', Object.keys(resources.en?.translation || {}));

const i18nConfig = {
  resources,
  lng: savedLanguage,
  fallbackLng: 'el', // Default to Greek
  supportedLngs: ['en', 'el'],
  defaultNS: 'translation',
  fallbackNS: 'translation',
  debug: true, // Enable debug mode
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  },
  // Store language in localStorage
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  }
};

i18n
  .use(initReactI18next)
  .init(i18nConfig);

// Ensure the language is saved to localStorage
if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'el');
}

// Save language changes to localStorage
i18n.on('languageChanged', (lng: string) => {
  window.localStorage.setItem('i18nextLng', lng);
});

export default i18n; 
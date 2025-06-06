import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

// Get saved language or default to Greek
const savedLanguage = localStorage.getItem('i18nextLng') || 'el';

const i18nConfig = {
  resources,
  lng: savedLanguage,
  fallbackLng: 'el', // Default to Greek instead of English
  supportedLngs: ['en', 'el'],
  defaultNS: 'translation',
  fallbackNS: 'translation',
  debug: false,
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

// Force refresh on language change
i18n.on('languageChanged', (lng: string) => {
  // Force re-render by triggering a storage event
  window.localStorage.setItem('i18nextLng', lng);
  // Trigger a page reload to ensure proper language switching
  setTimeout(() => {
    window.location.reload();
  }, 100);
});

export default i18n; 
import type { Config } from 'sveltekit-i18n';

import I18n from 'sveltekit-i18n';

import languages from './languages.json';

const config = {
  fallbackLocale: 'en',
  translations: {
    en: { languages },
    nl: { languages }
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default
    },
    {
      locale: 'en',
      key: 'steps',
      loader: async () => (await import('./en/steps.json')).default
    },
    {
      locale: 'nl',
      key: 'steps',
      loader: async () => (await import('./nl/steps.json')).default
    },
    {
      locale: 'nl',
      key: 'common',
      loader: async () => (await import('./nl/common.json')).default
    }
  ]
} satisfies Config;

export const { t, translations, loadTranslations, locale, locales } = new I18n(config);

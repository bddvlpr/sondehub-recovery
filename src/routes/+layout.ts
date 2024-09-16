import { loadTranslations } from '$lib/i18n';

export const load = async () => {
  await loadTranslations('en');
  return {};
};

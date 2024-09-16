import type { Config } from 'tailwindcss';

import daisyui from 'daisyui';

const config = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: true,
    logs: false
  },
  plugins: [daisyui]
} satisfies Config;

export default config;

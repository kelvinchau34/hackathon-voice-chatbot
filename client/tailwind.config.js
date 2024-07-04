import { withGEL } from '@westpac/ui/tailwind';

/** @type {import('tailwindcss').Config} */
const config = withGEL({
  relative: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@westpac/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [],
  options: {
    brandFonts: {
      src: '/fonts', // path to font files
      brands: ['wbc'],
    },
  },
});

export default config;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/design/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/brandable-ui-library/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      visibility: ['group-hover'],
      transitionProperty: {
        height: 'height',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

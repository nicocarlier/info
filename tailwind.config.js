const { heroui } = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/popover.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bistre: '#332411',
        walnut: '#6B5F4E',
        tan: '#D2B48C',
        sunset: '#FFDBAB',
        lion: '#AD9574',
        coal: {
          950: '#121212', // Deep charcoal
          900: '#1A1A1A', // Dark charcoal
          800: '#262626', // Rich coal
          700: '#333333', // Medium coal
          600: '#404040', // Lighter coal
          500: '#666666', // Medium grey
          400: '#808080', // Steel grey
          300: '#999999', // Light grey
          200: '#CCCCCC', // Pale grey
          100: '#E6E6E6', // Almost white
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), heroui()],
};

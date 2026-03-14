/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f6ff',
          100: '#eceeff',
          200: '#d0d4f7',
          300: '#a8b0ef',
          400: '#7a86e4',
          500: '#4f5bd5',
          600: '#3a45b8',
          700: '#2d3699',
          800: '#1e2470',
          900: '#111540',
          950: '#0a0c28',
        },
        navy: {
          50:  '#f0f1f8',
          100: '#dde0f2',
          200: '#bcc2e6',
          300: '#8e99d4',
          400: '#6270bf',
          500: '#3d4fa8',
          600: '#2d3c8e',
          700: '#1f2b6e',
          800: '#141d4e',
          900: '#0d1235',
          950: '#080b22',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Inter"', 'sans-serif'],
        body: ['"Satoshi"', '"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

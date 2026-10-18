/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#073B25',
        leaf: '#0B5D35',
        gold: { DEFAULT: '#E7A52D', dark: '#CF8F18' },
        cream: '#F8F6EF',
        ink: '#1F2421',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(7,59,37,0.25)',
      },
    },
  },
  plugins: [],
};

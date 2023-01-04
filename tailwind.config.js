/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'skin-color': '#DDCCAA',
        'button-red': '#E31221',
      },
      backgroundImage: {
        'dark-bg':
          'linear-gradient(180deg, #11101A 0%, #08080D 50.52%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
};

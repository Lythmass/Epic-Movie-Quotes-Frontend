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
        'frozen-bg': 'rgba(0, 0, 0, 0.54)',
      },
      backgroundImage: {
        'dark-bg':
          'linear-gradient(180deg, #11101A 0%, #08080D 90.52%, rgba(0, 0, 0, 0) 100%)',
        'modal-bg':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'modal-overlay-bg':
          'linear-gradient(-95.94deg, rgba(239, 239, 239, 0.08) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.05) 102.52%)',
      },
      fontFamily: {
        'helvetica-geo': 'helvetica-geo',
        'helvetica-eng': 'HelveticaNeue',
      },
    },
  },
  plugins: [],
};

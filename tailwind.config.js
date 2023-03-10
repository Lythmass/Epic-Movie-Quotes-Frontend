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
        'outline-green': '#198754',
        'navbar-color': '#24222E',
        'primary-email': 'rgba(25, 135, 84, 0.2)',
        'not-verified': 'rgba(236, 149, 36, 0.2)',
        'change-thumbnail-bg': 'rgba(24, 22, 35, 0.8)',
        'post-bg': 'rgba(0, 0, 0, 0.29)',
        'write-quote-bg': 'rgba(36, 34, 47, 0.6)',
      },
      backgroundImage: {
        'dark-bg':
          'linear-gradient(180deg, #11101A 0%, #08080D 90.52%, rgba(0, 0, 0, 0) 100%)',
        'modal-bg':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'modal-overlay-bg':
          'linear-gradient(-95.94deg, rgba(239, 239, 239, 0.08) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.05) 102.52%)',
        'input-error': 'url("/assets/images/error.png")',
        'input-correct': 'url("/assets/images/correct-check.png")',
        'global-layout-bg':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'upload-file-bg': 'rgba(151, 71, 255, 0.4)',
      },
      fontFamily: {
        'helvetica-geo': 'helvetica-geo',
        'helvetica-eng': 'HelveticaNeue',
      },
      boxShadow: {
        'input-focus': '0px 0px 0px 4px rgba(13, 110, 253, 0.25)',
      },
    },
  },
  plugins: [],
};

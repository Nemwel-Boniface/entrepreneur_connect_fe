/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      herobg: 'rgba(225, 236, 240, 1)',
      lightgreen: 'regba(44, 188, 100, 1)',
      titleblue: 'rgba(2, 59, 86, 1)',
    },
    padding: {
      mobilepadding: '5%',
      tabletpadding: '8%',
      desktoppadding: '10%',
    },
    extend: {},
  },
  plugins: [],
};

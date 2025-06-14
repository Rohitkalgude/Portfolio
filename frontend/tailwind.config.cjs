/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "834px",         // iPad Pro, iPad Air
        ipadmini: "768px",    // iPad Mini
        surfacepro7: "912px", // Surface Pro 7
        duo: "540px",         // Surface Duo
        nesthub: "1024px",
        nesthubmax: "1280px",
        zenbook: "1366px",    // Asus Zenbook Fold  
      },
    },
  },
  plugins: [],
};

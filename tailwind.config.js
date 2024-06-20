/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SuperMario256: ["SuperMario256", "sans-serif"],
        PallyBold: ["PallyBold", "sans-serif"],
        Jersey: ["Jersey", "sans-serif"]
      },
      boxShadow: {
        // define your shadow variants here
        orange:
          "0 4px 6px -1px rgba(255, 99, 71, 0.1), 0 2px 4px -1px rgba(255, 99, 71, 0.06)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./assets/Footer1.jpg')",
        split: "linear-gradient(to bottom, #DFDFDE 50% , #F7F5F2 50%);",
      },
    },
  },
  plugins: [],
};

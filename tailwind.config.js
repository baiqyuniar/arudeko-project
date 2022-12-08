const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./assets/Footer.jpg')",
        hero: "url('./assets/Banner6.jpg')",
        split: "linear-gradient(to bottom, #634909 50% , #FFF 50%);",
      },
      screens: {
        hr: "1023px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      plugins: [],
    },
    screens: {
      hr: "800px",
      ...defaultTheme.screens,
    },
    variants: {
      display: ["group-hover"],
    },
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./assets/Banner.webp')",
        split: "linear-gradient(to bottom, #634909 50% , #FFF 50%);",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      plugins: [],
    },
    variants: {
      display: ["group-hover"],
    },
  },
};

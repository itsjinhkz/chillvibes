module.exports = {
  important: true,
  // mode: "jit",
  enabled: process.env.NODE_ENV === "production",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        dark: "rgba(0,0,0,.87);",
      },
      borderWidth: {
        5: "5px",
        1: "1px",
      },
      borderColor: {},
      height: {
        84: "336px",
        643: "643px",
        500: "500px",
        700: "700px",
        800: "800px",
      },
      width: {
        22: "88px",
        46: "46%",
        371: "371px",
        1000: "1000px",
      },
      paddingTop: {
        18: "18px",
      },
      maxHeight: {
        "max-content": "max-content",
      },
      maxWidth: {},
      container: {
        padding: {
          DEFAULT: "3rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      minHeight: {
        0: "0",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundColor: {},
      boxShadow: {},
    },
  },
  variants: {
    extend: {},
  },
};

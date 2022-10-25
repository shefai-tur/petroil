/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F40404",
        para: "#6C6C6C",
        yborder: "#FFB800",
        darklighte: "rgba(0,0,0,.6)",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      screens: {
        sm: "375px",
        sml: "667px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
};

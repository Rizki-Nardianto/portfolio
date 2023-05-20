/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./view/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
        // lg: "1440px",
        // xl: "1280px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-1k": "#0D0D0D",
        "red-300": "#EB5757",
        "green-400": "#219653",
        "gray-500": "#6A737D",
        "gray-200": "#E1E4E8",
      },
      backgroundColor: {
        "gray-00": "#f9fafb",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};


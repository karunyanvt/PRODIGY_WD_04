/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        purple: {
          400: "#7C3AED",
        },
        blue: {
          400: "#3B82F6",
        },
        teal: {
          300: "#5EEAD4",
          400: "#14B8A6",
          500: "#0D9488",
        },
      },
    },
  },
  plugins: [],
}


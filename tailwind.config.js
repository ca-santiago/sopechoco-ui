const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      mainbg: "#F0EADA",
      accent: {
        DEFAULT: "#054F48"
      },
      secondary:{
        light: "#1C5E3A",
        DEFAULT: "#FFCB45"
      },
      ...colors,
    }
  },
  plugins: [],
}


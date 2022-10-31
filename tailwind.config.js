/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "pages/**/*.{tsx,scss}",
    "components/**/*.{tsx,scss}"
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#1d1d1d"
      },
      white: {
        DEFAULT: "#d0d0d0"
      }
    },
    fontFamily: {
      body: ["Nanum Gothic"]
    }
  }
}

module.exports = config;
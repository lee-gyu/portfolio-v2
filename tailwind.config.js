/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "pages/**/*.{tsx,scss}",
    "components/**/*.{tsx,scss}"
  ],
  theme: {
    zIndex: {
      popover: 10000,
      dialog: 30000,
      notification: 50000
    },
    colors: {
      black: {
        DEFAULT: "#1d1d1d"
      },
      white: {
        DEFAULT: "#d0d0d0"
      },
      "border-white": {
        DEFAULT: "#e0e0e0"
      },
      "greyhound": {
        DEFAULT: "#BDB9B7",
        border: "#424648"
      },
    },
    fontFamily: {
      body: ["Nanum Gothic"]
    },
    extend: {
      spacing: {
        header: "3rem",
      },
    }
  }
}

module.exports = config;
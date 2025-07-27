/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A0522D',
        'secondary': '#8FBC8F',
        'secondary-hover':'#70a770',
        'neutral': '#FDF8F0',
        'accent': '#FFC107',
        'para': '#36454F',
      },
    },
  },
  plugins: [],
}


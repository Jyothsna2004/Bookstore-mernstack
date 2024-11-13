/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        thistle: '#D8BFD8',          // Default thistle color
        'thistle-light': '#E6C7E5',  // Light thistle shade
        'thistle-dark': '#A97CAA',   // Dark thistle shade
        'midnight-blue': '#191970',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}


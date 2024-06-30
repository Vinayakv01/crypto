/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        Yeseva:["Yeseva One", 'sans-serif'],
        Montserrat:["Montserrat", 'sans-serif'],
        Poppins:["Poppins", 'sans-serif'],
  
  
      },
      screens: {
        'sm': '360px',
      },

    },
  },
  plugins: [],
}


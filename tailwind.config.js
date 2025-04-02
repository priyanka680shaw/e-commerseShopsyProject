/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors :  {
        primary : "#fea928",
        secondary : "#ed8900",
        headerColor : "#f8d6a4"
      },
      container : {
        center : true ,
        paddoing : {
          DEFAULT  : "1rem",
          sm : "3rem"
        },
      }
      
    },
  },
  plugins: [],
};

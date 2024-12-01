/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "site-primary": "#C4A159",
        "site-dark-primary": "#131413",
        "site-secondary": "#131413",
        "site-grey-secondary": "#807D6B",
      }
    },
    container: {
      padding: "2rem",      
    },
    screens:{
      sm: {'max': '640px'},
      md: {'max': '1024px',
            'min': '640px'} ,
      lg: {'min': '1300px'} ,
    }
  },
  plugins: [],
}


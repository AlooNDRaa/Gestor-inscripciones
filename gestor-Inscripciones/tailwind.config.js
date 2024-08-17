/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'min': '100px', 'max': '700px'},
      'desktop': {'min': '701px', 'max': '3000px'}
    },
    colors: {
      lightmode: {
        "marronClaro": "#B0AAA3",
        "celesteClaro": "#8EA9B2",
        "azul": "#496CCC",
      }
    },
    animation: {
      
    }
  },
  plugins: [],
}


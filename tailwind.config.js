module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
       
      },
      screens: {
        xm: '100%',
        sm: '540px',
        md: '728px',
        lg: '984px',
        xl: '1170px',
        '2xl': '1170px',
      },
      
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        2: '2%'
      },
      borderWidth: {
        3: '3px'
      },
      outlineWidth: {
        3: '3px'
      },
      fontFamily: {
        eUkraine: ['e-Ukraine', 'sans-serif']
      },
      backgroundImage: {
        login:
          "url('/src/assets/png/bg-pattern.png'), linear-gradient(to top right, #F9CDA9 0%, #F6B2A5 100%)"
      },
      colors: {
        base: {
          1000: '#171616',
          900: '#31302F',
          800: '#4B4948',
          700: '#656261',
          600: '#7F7B7A',
          500: '#999594',
          400: '#B2AFAE',
          300: '#CBC9C8',
          200: '#EBEAEA',
          100: '#FFFFFF'
        },
        accent: {
          lighter: '#FAD8D2',
          light: '#F18C79',
          primary: '#ED664B',
          dark: '#E83F1E',
          darker: '#B42C12'
        },
        red: {
          lighter: '#FF9B9B',
          light: '#FF5555',
          regular: '#FD0000',
          dark: '#B90000',
          darker: '#710000'
        },
        yellow: {
          lighter: '#FFF399',
          light: '#FFEB55',
          primary: '#F4D800',
          dark: '#B9A300',
          darker: '#716300'
        },
        green: {
          lighter: '#9BFF99',
          light: '#22FF1E',
          primary: '#04DB00',
          dark: '#038A00',
          darker: '#025100'
        }
      },
      fontSize: {
        32: '2rem',
        22: '1.375rem'
      }
    }
  },
  plugins: []
};

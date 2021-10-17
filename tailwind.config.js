const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./apps/client/**/*.{js,ts,jsx,tsx}', './libs/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customGray: {
          darkest: '#18191F',
          dark: 'rgba(0, 0, 0, 0.2)',
          DEFAULT: '#2C2D32',
        },
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        'screen-30': '30vw',
        'screen-20': '20vw',
      },
      height: {
        'screen-16.25w': '16.25vw',
        'screen-10w': '10vw',
        'screen-23w': '23vw',
      },
      flex: {
        profile: '1 1 44px',
        'basis-380px': '0 1 380px',
      },
      boxShadow: {
        'offset-black': '4px 4px black',
        'offset-lime': '2px 2px lime',
      },
      transitionProperty: {
        width: 'width',
      },
      animation: {
        bigBounce: 'bigBounce 500ms alternate infinite ease',
      },
      keyframes: {
        bigBounce: {
          '0%': {
            top: '30px',
            height: '5px',
            borderRadius: '60px 60px 20px 20px',
            transform: 'scaleX(2)',
          },
          '35%': {
            height: '15px',
            borderRadius: '50%',
            transform: 'scaleX(1)',
          },
          '100%': {
            top: '0',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

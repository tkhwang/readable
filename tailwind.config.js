const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./apps/client/**/*.{js,ts,jsx,tsx}', './libs/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        teal: colors.teal,
        lime: colors.lime,
        customGray: {
          darkest: '#18191F',
          dark: 'rgba(0, 0, 0, 0.2)',
          DEFAULT: '#2C2D32',
        },
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        'offset-black': '4px 4px black',
        'offset-lime': '2px 2px lime',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.2rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      minWidth: {
        10: '2.5rem',
        48: '12rem',
      },
      opacity: {
        90: '0.9',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        bigBounce: 'bigBounce 500ms alternate infinite ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
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
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'black': '#141414',
        'white': '#F7F7F2',
        'grey':'#727272',
        'secondary': '#00FFFF',
      },
      fontFamily: {
        'mNeueL': ['mNeueL', 'sans-serif'],
        'mNeueM': ['mNeueM', 'sans-serif']
      },

      fontSize: {
        'h1-xl': '3rem',
        'h2-xl': '2.5rem',
        'h3-xl': '1.625rem',
        'h4-xl': '1.125rem',
        'body-xl': '1.125rem',
        'small-xl': '0.9rem',
        'h1-sm': '2.2rem',
        'h2-sm': '1.8rem',
        'h3-sm': '1.3rem',
        'h4-sm': '0.9rem',
        'body-sm': '0.8rem',
      }
    },
  },
  
}


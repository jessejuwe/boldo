/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        ellipse: "url('./assets/ellipse.png')",
      },
      inset: {
        alpha: 'calc(50% - 20rem)',
      },
      minHeight: {
        alphaHeight: 'calc(100vh - 2 * 4vw)',
      },
      fontSize: {
        adapt: {
          h1: 'clamp(3rem, 1rem + 10vw, 7rem)',
          p: 'clamp(1rem, 0.5rem + 10vw, 1.5rem)',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      screens: {
        large: '2000px', // => @media (min-width: 1250px) { ... }
        medium: '61.25em', // => @media (min-width: 980px) { ... }
        xs: '450px', // => @media (min-width: 450px) { ... }
      },
    },
  },
  plugins: [],
};

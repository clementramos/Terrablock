/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('../public/bgimage.svg')",
      'sparkles': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.9)), url('../public/sparkles2.gif')"
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      'xs': {'max': '640px'},
      // => @media (min-width: 340px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
 
  plugins: [],
}

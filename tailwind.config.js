/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bg1': "url(../public/sparkles-1.gif)",
      'hero': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('../public/bgimage.svg')",
      'sparkles': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.9)), url('../public/sparkles2.gif')",
      'sparkles-pokemon': "url('../public/sparkles.gif')",
      'contact': "linear-gradient(90deg, rgba(177,255,168,1) 0%, rgba(56,255,192,1) 53%, rgba(0,212,255,1) 100%)"
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
      // => @media (max-width: 640px) { ... }

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

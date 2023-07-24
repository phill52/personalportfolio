/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F0E7D8',
        ocean: '#16BAC5',
        raisin: '#342E37',
        crab: '#FF481D',
        pearl: '#DAF9FB',
        darkocean: '#063538'
      }
    },
  },
  plugins: [],
}


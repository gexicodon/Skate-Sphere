/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        spectral: ['Spectral', 'serif'],
      },
      colors: {
        darkGray: "#1E1E1E",
      },
    },
  },
  plugins: [],
}
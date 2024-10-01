/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abril-fatface' : ["Abril Fatface", 'serif'],
        'bilbo-swap-caps' : ["Bilbo Swash Caps",'cursive']
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
    
  },
  plugins: [],
}
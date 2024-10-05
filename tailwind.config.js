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
        'bilbo-swap-caps' : ["Bilbo Swash Caps",'cursive'],
        'caesar-dressing': ["Caesar Dressing", 'system-ui'],
        'atomic-age' : ["Atomic Age", 'system-ui']
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(180deg, #ED9523 30.87%, #E7B472 52.26%, #FFD6A2 68.15%, #9D5900 88.31%)',
      },
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0, 100% 70%, 0 100%, 0 30%)',
      }
    },
    
  },
  plugins: [],
}
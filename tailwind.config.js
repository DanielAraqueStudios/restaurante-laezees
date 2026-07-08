/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lazeez: {
          gold: '#C9A24B',
          dark: '#1B1410',
          maroon: '#6E1E2B',
          cream: '#F6EEE0',
          olive: '#5B6B4A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

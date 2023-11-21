/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#09092D',
        'Skyblue' : '#A5DDF2',
        'Light-blue': '#76A1D5',
        'CTA-color' : '#4BCEBC',
        'Year-rgba' : 'rgba(118, 161, 213, 0.20)',
        'Month-rgba' : 'rgba(75, 206, 188, 0.20)',
        'Day-rgba' : 'rgba(252, 127, 58, 0.20)',
        'Time-rgba' : 'rgba(95, 92, 168, 0.20)',
      },
      fontFamily: {
        'mono':'Roboto Mono',
      }
    },
  },
  plugins: [],
}


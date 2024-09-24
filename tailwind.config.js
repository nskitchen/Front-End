/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './Components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '7.5xl': '7.5vw',
        '2.3s' : '1.979vw',
        '1.7s' : '1.313rem',
        '5.6lg': '5.625rem' ,
        '3.2mid' : '3.125rem'
      },
      colors: {
        customGray: '#cccccc',
      },

    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sanity-ecommerce/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        200: '200px',
        300: '300px',
        400: '400px',
        600: '600px'
      },
      height: {
        400: '400px',
        500: '500px'
      }
      
    },
  },
  plugins: [],
}

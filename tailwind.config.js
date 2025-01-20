/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['Dancing Script', 'serif'], 
      },
      backgroundImage: {
        'bgWood': "url('https://img.freepik.com/free-photo/wooden-background_24972-623.jpg?uid=R183613653&ga=GA1.1.1300188677.1736865188&semt=ais_hybrid')",
        'bgLamp': "url('https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background_169016-9521.jpg?t=st=1737267273~exp=1737270873~hmac=271b0503366854fe59c1fa430ecb0a6667b6812bff7bcedd1c0a765d8c95f4f6&w=1380')",
      },
    },
  },
  plugins: [],
}


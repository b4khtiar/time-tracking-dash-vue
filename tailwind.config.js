/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'Blue': 'hsl(246, 80%, 60%)',
        'Light-orange': 'hsl(15, 100%, 70%)',
        'Light-red': 'hsl(15, 100%, 70%)',
        'Soft-blue': 'hsl(195, 74%, 62%)',
        'Light-red': 'hsl(348, 100%, 68%)',
        'Lime-green': 'hsl(145, 58%, 55%)',
        'Violet': 'hsl(264, 64%, 52%)',
        'Soft-orange': 'hsl(43, 84%, 65%)',
        'Very-dark-blue': 'hsl(226, 43%, 10%)',
        'Dark-blue': 'hsl(235, 46%, 20%)',
        'Desaturated-blue': 'hsl(235, 45%, 61%)',
        'Pale-blue': 'hsl(236, 100%, 87%)',
      }
    },
  },
  plugins: [],
}


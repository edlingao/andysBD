/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'link': '0px 0px 2px rgba(217, 21, 180, 0.6)',
      },
    },
  },
  plugins: [],
}


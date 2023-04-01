/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
        oswald: ["Oswald", "sans-serif"],
        anton: ["Anton", "sana-serif"],
      },
    },
  },
  plugins: [],
};

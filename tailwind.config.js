/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/uber-page/src/assets/bguber.png')",
        city: "url('/uber-page/src/assets/bg-city.png')",
      },
    },
  },
  plugins: [],
};

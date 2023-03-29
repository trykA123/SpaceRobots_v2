/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakraPetch: "ChakraPetch",
        archivo: "Archivo",
      },
      backgroundImage: {
        hero: "url('./assets/images/herobackground.jpg')",
      },
    },
  },
  plugins: [],
};

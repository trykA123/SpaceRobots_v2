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
        projectImg: "url('./assets/images/upgraderobot.png')",
        packImg: "url('./assets/images/pack.png')",
        packImg1: "url('./assets/images/robo1.png')",
      },
      backgroundColor: {
        "gray-15": "rgba(68, 68, 68, 0.15)",
      },
    },
  },
  plugins: [],
};

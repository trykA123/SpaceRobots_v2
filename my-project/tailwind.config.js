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
        projectImg: "url('./assets/images/upgraderobot.png')",
        packImg: "url('./assets/images/pack.png')",
        packImg1: "url('./assets/images/robo1.png')",
        background: "url('./assets/images/backgroundFull.png')",
        saturn: "url('./assets/images/gradients.png')",
        collectionBackgound: "url('./assets/images/collection.png')",
        heroBackground: "url('./assets/images/heroBackground.png')",
      },
      backgroundColor: {
        "gray-15": "rgba(68, 68, 68, 0.15)",
      },
    },
  },
  plugins: [],
};

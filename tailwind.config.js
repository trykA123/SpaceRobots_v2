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
      colors: {
        "teal-text-100": "rgba(20, 194, 163, 1)",
        "teal-text-40": "rgba(20, 194, 163, 0.4)",
        "teal-text-0": "rgba(20, 194, 163, 0.01)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "gray-15": "rgba(68, 68, 68, 0.15)",
        "gray-gradient": "rgba(24, 24, 24, 0.01)",
        "gray-gradient-full": "rgba(16, 16, 16, 1)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [],
};

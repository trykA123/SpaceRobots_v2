/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        200: "2.0",
      },
      fontFamily: {
        chakraPetch: "ChakraPetch",
        archivo: "Archivo",
      },
      backgroundImage: {
        projectImg: "url('./assets/images/upgraderobot.webp')",
        packImg: "url('./assets/images/pack.webp')",
        packImg1: "url('./assets/images/robo1.webp')",
        background: "url('./assets/images/backgroundFull.webp')",
        saturn: "url('./assets/images/gradients.webp')",
        collectionBackgound: "url('./assets/images/collection.webp')",
        heroBackground: "url('./assets/images/heroBackground.webp')",
        teamBackground: "url('./assets/images/Banner.png')",
        liviuBackground: "url('./assets/images/liviu.png')",
        trykaBackground: "url('./assets/images/trka.png')",
        simpleprickBackground: "url('./assets/images/simpleprick.png')",
        jorjeBackground: "url('./assets/images/jorge.png')",
        tarantuloBackground: "url('./assets/images/tarantulo.png')",
        borisakeBackground: "url('./assets/images/borisake.png')",
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
        "mobile-menu-blue": "rgba(12, 18, 38, 1)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(10%)" },
        },
        slide: {
          to: { transform: "translateX(calc(-50% - 6px))" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        slide: "slide 20s infinite linear",
        skeletonLoading: "1s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

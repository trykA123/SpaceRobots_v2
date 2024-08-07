/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "12rem",
      },
      center: true,
    },
    extend: {
      scale: {
        200: "2.0",
      },
      fontFamily: {
        chakraPetch: "ChakraPetch",
        archivo: "Archivo",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%)",
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
        "background-color": "#101010",
        "background-color-2": "#080808",
        "primary-teal": "#14c2a3",
        "secondary-color": "#0b9c33",
        "secondary-color-2": "#0F1E13",
        "accent-color": "#f1f100",
        "modal-text": "#fddedf",
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

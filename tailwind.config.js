module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(1deg) translateY(0)",
          },
          "50%": {
            transform: "rotate(-1deg) translateY(10px)",
          },
        },
        wiggle2: {
          "0%, 100%": {
            transform: "rotate(-1deg) translateY(0)",
          },
          "50%": {
            transform: "rotate(1deg) translateY(10px)",
          },
        },
        hovering: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
        bicycle: {
          "100%": {
            transform: "translateX(-100%)",
          },
          "0%": {
            transform: "translateX(100%)",
          },
        },
        money: {
          "0%, 100%": {
            transform: "rotate(8deg) translateY(0)",
          },
          "50%": {
            transform: "rotate(10deg) translateY(10px)",
          },
        },
        altspin:{
          "0%": {
            transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease forwards",
        wiggle: "wiggle 5s ease-in-out infinite",
        wiggle2: "wiggle2 6s ease-in-out infinite",
        hovering: "hovering 5s ease-in-out infinite",
        bicycle: "bicycle 4s linear infinite",
        money: "money 4s ease-in-out infinite",
        altspin: "altspin 1.5s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],

  theme: {
    extend: {
      colors: {
        // General text
        ink: "#365E55",

        brand: {
          primary: "#659287",
          secondary: "#88BDA4",
          soft: "#B1D3B9",
          mist: "#E6F2DD",
          // Primary brand color
          blue: "#659287",

          // Darker primary / hover state
          deep: "#4F776D",

          // Headings / dark text
          navy: "#365E55",

          // Light accent
          sky: "#B1D3B9",

          // Page background
          mist: "#E6F2DD",

          // Secondary accent
          teal: "#88BDA4",
        },
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },

      boxShadow: {
        card: "0 20px 45px -20px rgba(54,94,85,0.25)",
        soft: "0 10px 30px -12px rgba(54,94,85,0.18)",
      },

      keyframes: {
        floatY: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseRing: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0.6",
          },
          "70%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
        },
      },

      animation: {
        floatY: "floatY 5s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },

  plugins: [],
};

module.exports = config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "13px",
      tiny: "14px",
      base: "16px",
      medium: "17px",
      mediumPlus: "18px",
      large: "20px",
      largePlus: "22px",
      Elarge: "28px",
      DELarge: "32px",
      QELarge: "5rem",
    },
    extend: {
      colors: {
        navy: "#071120",
        darkNavy: "#000a25",
        lightNavy: "#96abc5",
        lightestNavy: "#adcdf4",
        slate: "#a69e92",
        green: "#56ffda",
        card: "#003049"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      firaSansFont: "var(--font-fira-sans)",
      robotoFont: "var(--font-roboto)",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".image-tint::after": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 100, 0, 0.5)", // This gives a green tint
          pointerEvents: "none", // This allows click events to pass through
          transition: "opacity 0.5s ease-in-out", // This adds a transition to the opacity
        },
        ".image-tint:hover::after": {
          opacity: 0,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;

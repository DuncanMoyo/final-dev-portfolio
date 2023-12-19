import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        navy: "#000316",
        lightNavy: "#96abc5",
        lightestNavy: "#adcdf4",
        slate: "#a69e92",
        green: "#56ffda",
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
  plugins: [require("tailwindcss-animate")],
}
export default config

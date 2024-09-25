/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#49eacb",
        purple: "#9fa5d6",
        blackBG: "#242425",
        black: "#01070A",
        grey: "#9B9B9B",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 218, 185) 50%, rgb(255, 182, 193) 100%)",
        hero: "url('./assets/background-petra-2.png')",
        divider: "url('./assets/download.svg')",
        blackDivider: "url('./assets/bottom.svg')",
        graykDivider: "url('./assets/grayBottom.svg')",
        feBg: "url('./assets/kaspa-feat-bg.png')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

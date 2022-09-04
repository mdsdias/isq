module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900: "#000000",
        deep_purple_500_bf: "#7b2bb9bf",
        gray_900: "#1f0a41",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
      },
      fontFamily: { roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#1f0a41,#7b2bb9bf)",
      },
      borderRadius: { radius25: "25px", radius49: "49px" },
      boxShadow: {
        bs1: "0px 0px  6px 2px #0000003f",
        bs: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

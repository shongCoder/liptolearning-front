/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lip_purple: "#5200E9",
        lip_menu: "#666666",
        lip_text: "#7D8A9F",
        lip_black: "#1C1F33",
        lip_gray: "#F1F1F1",
        lip_light_gray: "#F7F7F7",
        lip_sodomy: "#2E3C52",
        lip_blue: "#4D67EB",
        lip_white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      screens: {
        md: "640px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};

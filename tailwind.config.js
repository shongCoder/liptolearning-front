/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lip_purple: "#2E0082",
        lip_pink_hover: "#bf1651",
        lip_menu: "#666666",
        lip_text: "#7D8A9F",
        lip_black: "#1C1E22",
        lip_gray: "#E8E8E8",
        lip_light_gray: "#FBF9F9",
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

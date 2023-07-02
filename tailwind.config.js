/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "500px" },
      mobileEnd: "501px",

      desktop: "1440px",
    },
    extend: {
      colors: {
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        Tomato: "hsl(4, 100%, 67%)",
        Pink: "rgb(255,76,120)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlue: "#0B0B6D",
        buttonColor: "#0B0B6DC9",
      },
      height: {
        screen: "100vh",
      },
    },
  },
  plugins: [],
};

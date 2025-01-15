/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlue: "#0B0B6D", // Add your custom color here
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pizza: "Roboto Mono, monospace",
      // pizza: "Handjet",
    },
    extend: {
      colors: {
        pizza: "#F6E6BC",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

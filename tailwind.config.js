/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#002550",
      "text-primary": "#1A1A1A",
      "slate-1": "#F2F4F6",
      "slate-2": "#E6EAEE",
      "slate-3": "#CCD3DC",
    },
    extend: {},
  },
  plugins: [],
};

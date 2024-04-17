/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgHome": "url('/back.png')",
        "bgAbout": "url('/backa.png')",
        "bgAboutBottom": "url('/backb.png')",
        "bgPor": "url('/backPor.png')",
        "bgContact": "url('/backC.png')",

      },
    },
  },
  plugins: [],
};

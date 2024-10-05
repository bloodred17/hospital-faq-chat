const withMT = require("@material-tailwind/html/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =  withMT({
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

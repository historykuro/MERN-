/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
    lineClamp: ["responsive"],
  },

  plugins: [require("@neojp/tailwindcss-line-clamp-utilities")],
};

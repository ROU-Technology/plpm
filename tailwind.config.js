/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
    colors: {
      plpmDark: "#161722",
      plpmBlueFirst: "#2F80ED",
      plpmBlueSecond: "#56CCF2",
      plpmGray: "#828282",
    },
  },
  plugins: [],
};
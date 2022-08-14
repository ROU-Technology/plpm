/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      plpmDark: "#161722",
      plpmWhite: "#FFFFFF",
      plpmNavButton: "#27AE60",
      plpmBlueFirst: "#2F80ED",
      plpmBlueSecond: "#56CCF2",
      plpmGray: "#828282",
    },
    fontSize: {
      tiny: "5px;",
      thin: "7px;",
      large: "12px;",
      larger: "17px;"
      

    }
  },
  plugins: [],
};

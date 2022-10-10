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
    extend: {
      colors: {
        plpmDark: "#161722",
        plpmWhite: "#FFFFFF",
        plpmNavButton: "#27AE60",
        plpmBlueFirst: "#2F80ED",
        plpmBlueSecond: "#56CCF2",
        plpmGray: "#828282",
        plpmLightGray: "#E5E5E5",
        plpmDarkGray: "#F7F8FA",
        plpmCard: "#56CCF2",
        FillColor: "#FFA500",
      },
      fontSize: {
        tiny: "5px;",
        thin: "7px;",
        large: "12px;",
        larger: "17px;",




      },
      width: {
        cardwidth: "24%;"
      },

      height: {
        long: "900px;"
      }

    },


  },
  plugins: [],
};

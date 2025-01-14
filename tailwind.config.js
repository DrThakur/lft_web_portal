/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxss': '350px',
        'xxs': '444px',
        'xs': '540px', // This creates a custom breakpoint for screens under 430px
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

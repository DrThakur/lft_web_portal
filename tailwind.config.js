/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxss': '350px',
        'xxs': '444px',
        'xs': '540px', // This creates a custom breakpoint for screens under 430px
        'mdd': '868px',
        'mddd': '968px',
      
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
      outline: {
        'single': '2px solid #000', // Example: 2px solid black outline
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

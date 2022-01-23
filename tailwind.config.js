module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-lg": "url('/src/assets/generativeart.gif')",
      }),
    },
  },
  plugins: [],
};

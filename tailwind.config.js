module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        hyundai: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        hyundai: "0.01em",
      },
    },
  },
};


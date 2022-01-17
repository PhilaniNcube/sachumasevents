module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      beach: ['LightBeach'],
      mont: ['Montserrat'],
    },
    extend: {
      backgroundImage: {
        hero:
          "linear-gradient(to right, rgba(124, 34, 206, 1), rgba(124, 34, 206, 0.85), rgba(124, 34, 206, 0.45) ), url('/images/hall.jpg')",
        services: "url('/images/disco.jpg')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dot: {
          bgdark: "#131417",
          bgdark_secondary: "#18191D",
          bglight: "#F9FEFE",
          bglight_secondary: "#F2F8FB",
          dark_primary: "#6192FB",
          light_primary: "#B0C9FB",
          dark_secondary: "#F9FEFE",
          light_secondary: "#2A3256",
          dark_cyan: "#428EFF",
          light_cyan: "#6192FB",
        },
      },
    },
  },
  plugins: [],
};

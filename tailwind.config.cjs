module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dot: {
          bgdark: "#131417",
          bgdark_secondary: "#18191D",
          bglight: "#F5F5F5",
          bglight_secondary: "#F9F9F9",
          primary: "#6192FB",
          secondary: "#FFFFFF",
          cyan: "#428EFF",
        },
      },
    },
  },
  plugins: [],
};

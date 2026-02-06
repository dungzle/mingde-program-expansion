/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core logo-inspired gold (primary)
          gold: "#B07A1A", // main Mingde gold / bronze
          goldSoft: "#D4A44A", // hover, highlights, accents
          goldLight: "#F4E8C8", // subtle backgrounds

          // Canada / international academic blue (secondary)
          blue: "#1E3A8A", // deep, trustworthy navy
          blueSoft: "#3B82F6", // links, CTAs, accents

          // Neutrals (clean, modern, readable)
          dark: "#1F2937", // main text
          muted: "#6B7280", // secondary text
          light: "#FAFAFA", // page background
          border: "#E5E7EB", // dividers, cards
        },
      },
    },
  },
  plugins: [],
};

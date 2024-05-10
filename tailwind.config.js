/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: "var(--primary-color)",
          accent: "var(--accent-color)",
          text: "var(--text-color)",
          background: "var(--bg-color)",
          dark: "var(--black-color)",
          card: "var(--card-color)",
          /* Add more color mappings as needed */
        },
      },
    },
  },
  plugins: [],
};

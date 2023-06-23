/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#1b1b1b",
        "gray-5": "#737373",
        "gray-1": "#eee",
        silver: "#c4c4c4",
        "gray-2": "#d8d8d8",
        "gray-3": "#b4b4b4",
      },
      fontFamily: {
        "patrick-hand-body": "'Patrick Hand'",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
      },
      borderRadius: {
        "21xl": "40px",
        "13xl": "32px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      base: "16px",
      "5xl": "24px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

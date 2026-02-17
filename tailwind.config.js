/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2bee6c",
        "primary-dark": "#23c258",
        "background-light": "#ffffff",
        "background-subtle": "#f6f9f7",
        "background-dark": "#102216",
        "surface-dark": "#163321",
        "text-main": "#111813",
        "text-muted": "#52665a",
        "surface-light": "#ffffff",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft-xl': '0 20px 40px -10px rgba(16, 34, 22, 0.08)',
        'glow': '0 0 20px rgba(43, 238, 108, 0.4)',
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

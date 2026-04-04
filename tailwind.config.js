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
        "primary": "#ff7043", // Vibrant Deep Orange
        "primary-dark": "#e64a19", // Rich Terracotta
        "background-light": "#ffffff",
        "background-subtle": "#fffbf7", // Warm Paper
        "background-dark": "#1a1614", // Deep Cocoa Night
        "surface-dark": "#2d241f", // Warm Charcoal
        "text-main": "#261c15", // Espresso Black
        "text-muted": "#7a6a5f", // Warm Taupe
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

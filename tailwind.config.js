/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#0B0D10",
        surface: "#12161B",
        panel: "#171C22",
        glass: "rgba(255, 255, 255, 0.06)",
        "glass-border": "rgba(255, 255, 255, 0.12)",
        "text-primary": "#F5F7FA",
        "text-secondary": "#B8C0CC",
        "text-muted": "#7E8794",
        "line-subtle": "rgba(255, 255, 255, 0.08)",
        accent: "#F2A65A",
        "accent-strong": "#FF8A3D",
        "accent-soft": "#FFD3A8",
        success: "#74C69D",
        warning: "#F4B860",
      },
      fontFamily: {
        display: ['"Sora"', "sans-serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "5rem", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "4rem", fontWeight: "700" }],
        h1: ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }],
        h3: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        h4: ["1.375rem", { lineHeight: "1.875rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.875rem", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.125rem", fontWeight: "500" }],
        label: ["0.8125rem", { lineHeight: "1.125rem", fontWeight: "600" }],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.24)",
        glow: "0 12px 30px rgba(242, 166, 90, 0.18)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #F2A65A 0%, #FF8A3D 100%)",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-radial": "radial-gradient(circle at top, rgba(242,166,90,0.16), transparent 45%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


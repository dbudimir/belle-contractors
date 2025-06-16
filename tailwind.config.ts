import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          "dark-gray-purple": "#3c3744", // Main Text, Dark Accents
          "dark-blue": "#3E3FA2", // Primary Accent
          "medium-blue": "#3066be", // Secondary Accent, Links
          "light-blue-gray": "#b4c5e4", // Light Backgrounds, Borders
          "off-white": "#fbfff1", // Main Background
          white: "#ffffff", // Card Backgrounds, Text on Dark
        },
        // Semantic aliases for easier use
        "background-main": "#fbfff1",
        "text-primary": "#3c3744",
        "text-secondary": "#3066be", // For links or secondary text
        "text-on-dark": "#fbfff1", // Text on dark-blue or dark-gray-purple backgrounds
        "text-on-accent": "#ffffff", // Text on primary or secondary accent color backgrounds
        "accent-primary": "#3E3FA2",
        "accent-secondary": "#3066be",
        "accent-light": "#b4c5e4", // For light backgrounds or borders
        "surface-card": "#ffffff",
        "surface-light": "#b4c5e4", // For elements on main background that need slight emphasis
        "border-default": "#b4c5e4",

        // shadcn/ui specific (can be adjusted or removed if not using these directly)
        border: "hsl(var(--border))", // Example: can be mapped to 'brand-light-blue-gray'
        input: "hsl(var(--input))", // Example: can be mapped to 'brand-light-blue-gray'
        ring: "hsl(var(--ring))", // Example: can be mapped to 'brand-medium-blue'
        background: "hsl(var(--background))", // Example: mapped to 'brand-off-white'
        foreground: "hsl(var(--foreground))", // Example: mapped to 'brand-dark-gray-purple'
        primary: {
          DEFAULT: "hsl(var(--primary))", // Mapped to 'brand-dark-blue'
          foreground: "hsl(var(--primary-foreground))", // Mapped to 'brand-white' or 'brand-off-white'
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Mapped to 'brand-medium-blue'
          foreground: "hsl(var(--secondary-foreground))", // Mapped to 'brand-white'
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Can map to a lighter gray or 'brand-light-blue-gray'
          foreground: "hsl(var(--muted-foreground))", // Can map to 'brand-dark-gray-purple'
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Can map to 'brand-light-blue-gray' or 'brand-medium-blue'
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Mapped to 'brand-white'
          foreground: "hsl(var(--card-foreground))", // Mapped to 'brand-dark-gray-purple'
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

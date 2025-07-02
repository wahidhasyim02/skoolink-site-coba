/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./layouts/**/*.html",
    "./layouts/partials/**/*.html",
    "./layouts/shortcodes/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        ColorDark: "#191919",
        ColorBlack: "#0A102F",
        ColorBlue: "#3147FF",
        ColorOffWhite: "#FAF9F5",
        ColorPurple: "#A259FF",
        ColorBluePurple: "#7949F6",
        ColorYellow: "#FFC900",
        ColorViolet: "#4B2AAD",
        ColorAtomicTangerine: "#FF9966",
        ColorLime: "#C1FF00",
        ColorLunarGreen: "#324438",
        ColorAlmond: "#EBDECE",
        ColorCorn: "#F4B905",
        ColorOil: "#221F1A",
        ColorPaleGold: "#FFD874",
        ColorEggSour: "#FFF4D9",
        ColorDenimDarkBlue: "#2D2B92",
        ColorCaribbeanGreen: "#15CF92",
        ColorMidnightMoss: "#010D09",
        ColorHoneySuckle: "#E9FF97",

        skoolink: {
          50: '#E0FBF4',
          100: '#B2F3E1',
          200: '#80EBCF',
          300: '#4DE3BC',
          400: '#26DCAA',
          500: '#0CD39D',
          600: '#06CF99',
          700: '#05A87D',
          800: '#048261',
          900: '#03644C',
          950: '#014D3B'
        },

        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(-12%)' },
          '100%': { transform: 'translateY(-85%)' },
        }, 
      },
      animation: {
        scroll: 'scroll 6s ease-in forwards',
        glitch: 'glitch 2s infinite',
        glitch2: 'glitch2 2s infinite',
      },
    },
    fontFamily: {
      PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      DmSans: ["DM Sans", "sans-serif"],
      GeneralSans: ["General Sans", "sans-serif"],
      Cabin: ["Cabin", "sans-serif"],
      PublicSans: ["Public Sans", "sans-serif"],
      Syne: ["Syne", "sans-serif"],
      ClashDisplay: ["Clash Display", "sans-serif"],
      Kanit: ["Kanit", "sans-serif"],
      Sora: ["Sora", "sans-serif"],
      Outfit: ["Outfit", "sans-serif"],
      body: ["Rubik", "sans-serif"],
      FontAwesome: ["Font Awesome 6 Pro"],
      Inter: ["Inter", "sans-serif"],
    },
  },
  safelist: [ 
    {
      pattern: /^(dark:)?(hover:|group-hover:|focus:|sm:|md:|lg:|xl:|xxl:)?(bg|text)-(gray|skoolink)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
  ],
  plugins: [],
};
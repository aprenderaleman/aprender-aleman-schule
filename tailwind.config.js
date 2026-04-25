/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ────── Brand palette (theme-independent) ────── */
        navy: {
          DEFAULT: '#0F2847',
          50:  '#F4F6FA',
          100: '#E2E8F0',
          700: '#1E3A66',
          800: '#15315A',
          900: '#0F2847',
        },
        warm: {
          DEFAULT: '#F4A261',
          foreground: '#1A1D29',
        },
        success: {
          DEFAULT: '#2D6A4F',
        },

        /* ────── Semantic tokens (flip with theme via CSS vars) ────── */
        background:        'rgb(var(--background) / <alpha-value>)',
        foreground:        'rgb(var(--foreground) / <alpha-value>)',
        card:              'rgb(var(--card) / <alpha-value>)',
        muted:             'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground':'rgb(var(--muted-foreground) / <alpha-value>)',
        border:            'rgb(var(--border) / <alpha-value>)',
        'section-muted':   'rgb(var(--section-muted) / <alpha-value>)',

        /* ────── Legacy alias: existing components using `orange-*` map to warm ────── */
        orange: {
          50:  '#FEF6EE',
          100: '#FDE7CD',
          200: '#FBD3A6',
          300: '#F9BD7E',
          400: '#F6B070',
          500: '#F4A261', // matches `warm`
          600: '#DE8C46',
          700: '#B6713A',
          800: '#8A552B',
          900: '#5C381D',
        },
        /* primary alias kept for any existing references */
        primary: {
          50:  '#FEF6EE',
          100: '#FDE7CD',
          200: '#FBD3A6',
          300: '#F9BD7E',
          400: '#F6B070',
          500: '#F4A261',
          600: '#DE8C46',
          700: '#B6713A',
          800: '#8A552B',
          900: '#5C381D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontFeatureSettings: {
        inter: '"cv02","cv03","cv04","cv11"',
      },
      letterSpacing: {
        tight: '-0.025em',
        tighter: '-0.02em',
      },
      fontSize: {
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-lg': ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '14px',
        '2xl': '18px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 12px -2px rgb(0 0 0 / 0.08)',
        lg: '0 10px 24px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 40px -8px rgb(0 0 0 / 0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

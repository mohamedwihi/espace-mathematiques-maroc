/** @type {import('tailwindcss').Config} */
export default {
  // `relative: true` : chemins résolus depuis ce fichier, pas depuis le dossier de lancement.
  content: { relative: true, files: ['./index.html', './src/**/*.{ts,tsx}'] },
  theme: {
    extend: {
      colors: {
        // Bleu encre profond : rigueur, sciences
        ink: {
          50: '#f3f6fb',
          100: '#e4eaf5',
          200: '#c7d3ea',
          300: '#9cb0d8',
          400: '#6c86c0',
          500: '#4a64a8',
          600: '#384d8c',
          700: '#2e3f72',
          800: '#28355d',
          900: '#1a223d',
          950: '#0f1426',
        },
        // Vert zellige : identité marocaine, réussite
        brand: {
          50: '#effbf6',
          100: '#d8f5e8',
          200: '#b3e9d4',
          300: '#7fd6b9',
          400: '#49bc98',
          500: '#25a07e',
          600: '#178166',
          700: '#136754',
          800: '#125244',
          900: '#10443a',
          950: '#062621',
        },
        // Safran : accent, attention
        saffron: {
          50: '#fff8eb',
          100: '#feebc7',
          200: '#fdd58a',
          300: '#fcb94d',
          400: '#fb9f24',
          500: '#f57c0b',
          600: '#d95b06',
          700: '#b43e09',
          800: '#92300e',
          900: '#78290f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Lexend"', '"Readex Pro"', 'system-ui', 'sans-serif'],
        displayAr: ['"Readex Pro"', '"Lexend"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 20 38 / 0.04), 0 4px 16px -4px rgb(15 20 38 / 0.08)',
        lift: '0 2px 4px rgb(15 20 38 / 0.05), 0 12px 32px -8px rgb(15 20 38 / 0.16)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease-out both',
      },
    },
  },
  plugins: [],
};

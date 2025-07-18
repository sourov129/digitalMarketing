/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal': {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e4ddff',
          300: '#d1c1ff',
          400: '#b899ff',
          500: '#9d6bff',
          600: '#8b47ff',
          700: '#7c2dff',
          800: '#6b1fd4',
          900: '#5a1ba8',
        },
        'gold': {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff3c6',
          300: '#ffe896',
          400: '#ffd654',
          500: '#ffc107',
          600: '#e6a700',
          700: '#cc9600',
          800: '#b38600',
          900: '#997500',
        },
        'platinum': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'midnight': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(157, 107, 255, 0.25)',
        'gold': '0 25px 50px -12px rgba(255, 193, 7, 0.25)',
        'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};

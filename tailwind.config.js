/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F2',
        primary: '#5B2C6F',
        secondary: '#F39C12',
        accent: '#1ABC9C',
        card: '#FFFFFF',
        cardBorder: '#DCDCDC',
        hover: '#884EA0',
        textPrimary: '#2C2C2C',
        textMuted: '#666666',
        buttonGradientStart: '#8E44AD',
        buttonGradientEnd: '#3498DB',
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'zenith': '0 25px 50px -12px rgba(91, 44, 111, 0.25)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation': '0 32px 64px -12px rgba(0, 0, 0, 0.25)',
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(26, 188, 156, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(26, 188, 156, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
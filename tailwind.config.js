/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'sunny-gradient': 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
        'rainy-gradient': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
        'cloudy-gradient': 'linear-gradient(135deg, #ddd6fe 0%, #8b5cf6 100%)',
        'snowy-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'night-gradient': 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
      },
    },
  },
  plugins: [],
}

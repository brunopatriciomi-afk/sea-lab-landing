/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sealab: {
          900: '#050A10', // Fundo escuro
          800: '#0F1621', // Cor dos cards
          accent: '#FF8C00', // Laranja
          text: '#ffffff', // Texto branco
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

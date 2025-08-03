/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'Press Start 2P', 'Courier New', 'monospace'],
        'pixel-title': ['Press Start 2P', 'monospace'],
      },
      colors: {
        'sky-light': '#87CEEB',
        'sky-medium': '#4682B4', 
        'sky-dark': '#2F4F4F',
        'grass-green': '#32CD32',
        'dirt-brown': '#8B4513',
        'pixel-white': '#FFFFFF',
        'pixel-black': '#000000',
        'pixel-red': '#FF0000',
        'pixel-blue': '#0000FF',
        'pixel-yellow': '#FFFF00',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'pixel': '3px 3px 0 rgba(0,0,0,0.3)',
        'pixel-lg': '5px 5px 0 rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
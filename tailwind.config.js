/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'border-mint/10',
    'border-mint/20',
    'border-coral/10',
    'border-coral/20',
    'border-cosmic/10',
    'border-cosmic/20',
    'border-solar/10',
    'border-solar/20',
    'text-mint',
    'text-coral',
    'text-cosmic',
    'text-solar',
    'from-mint',
    'from-coral',
    'from-cosmic',
    'from-solar',
    'to-mint/50',
    'to-coral/50',
    'to-cosmic/50',
    'to-solar/50',
    'bg-mint/10',
    'bg-coral/10',
    'bg-cosmic/10',
    'bg-solar/10',
    'animate-cosmic-pulse',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Base colors
        pearl: {
          DEFAULT: '#FDFDFC',
          dark: '#F5F5F4',
        },
        smoke: {
          DEFAULT: '#CED2D9',
          light: '#DFE2E7',
          dark: '#BFC4CD',
        },
        
        // Primary color
        cosmic: {
          DEFAULT: '#3E2F5B',
          light: '#4E3B70',
          dark: '#2E2344',
          hover: '#4A3768',
        },
        
        // Accent colors
        coral: {
          DEFAULT: '#FF5C57',
          light: '#FF7A76',
          dark: '#E54642',
          hover: '#FF6E6A',
        },
        mint: {
          DEFAULT: '#A4F2E1',
          light: '#B8F5E8',
          dark: '#8FD9CA',
          hover: '#B0F3E4',
        },
        solar: {
          DEFAULT: '#FFDD57',
          light: '#FFE47A',
          dark: '#E6C63E',
          hover: '#FFE16A',
        },
      },
      boxShadow: {
        'glow-cosmic': '0 0 15px rgba(62, 47, 91, 0.3)',
        'glow-coral': '0 0 15px rgba(255, 92, 87, 0.3)',
        'glow-mint': '0 0 15px rgba(164, 242, 225, 0.3)',
        'glow-solar': '0 0 15px rgba(255, 221, 87, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cosmic-pulse': 'cosmicPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cosmicPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(62, 47, 91, 0.2)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(62, 47, 91, 0.4)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

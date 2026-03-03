/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      keyframes: {
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '25%': { transform: 'translateY(-15px) rotateX(5deg) rotateY(5deg)' },
          '50%': { transform: 'translateY(-25px) rotateX(0) rotateY(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotateX(-5deg) rotateY(3deg)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0) rotateY(0) rotateZ(0)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'morph-blob': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'tilt-in': {
          '0%': { opacity: '0', transform: 'perspective(1000px) rotateX(20deg) translateY(40px)' },
          '100%': { opacity: '1', transform: 'perspective(1000px) rotateX(0) translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'float-3d': 'float-3d 8s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'morph-blob': 'morph-blob 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'tilt-in': 'tilt-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

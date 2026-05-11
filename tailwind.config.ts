import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070b18',
          900: '#0b1124',
          800: '#0f172a',
          700: '#131b33',
        },
        neon: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 45%), radial-gradient(circle at 50% 100%, rgba(99,102,241,0.18), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,92,246,0.55)',
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.55)',
        'inner-glow': 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        marquee: 'marquee 50s linear infinite',
        'marquee-reverse': 'marquee-reverse 60s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

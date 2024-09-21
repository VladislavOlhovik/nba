import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        dot1: 'dot1 1s infinite',
        dot2: 'dot2 1s infinite',
        dot3: 'dot3 1s infinite',
        expand: 'expand 0.5s ease-out',
        collapse: 'collapse 0.5s ease-out',
      },
      keyframes: {
        dot1: {
          '0%, 20%, 60%, 100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.5)' },
        },
        dot2: {
          '0%, 20%, 60%, 100%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.5)' },
        },
        dot3: {
          '0%, 20%, 60%, 100%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.5)' },
        },
        expand: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        collapse: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '6.125rem',
          { lineHeight: '0.9', fontWeight: '600' },
        ], // 98px
        h2: [
          '4.5rem',
          { lineHeight: '1.2', fontWeight: '600' },
        ], // 72px
        h3: [
          '3rem',
          { lineHeight: '1.2', fontWeight: '600' },
        ], // 48px
        h4: [
          '3rem',
          { lineHeight: '1.2', fontWeight: '400' },
        ], // 48px
        h5: [
          '2.25rem',
          { lineHeight: '1.2', fontWeight: '600' },
        ], // 36px
        body1: [
          '1.5rem',
          { lineHeight: '1.5', fontWeight: '600' },
        ], // 24px
        body2: [
          '1.5rem',
          { lineHeight: '1.5', fontWeight: '400' },
        ], // 24px
        body3: [
          '1.25rem',
          { lineHeight: '1.5', fontWeight: '300' },
        ], // 16px
        body4: [
          '0.875rem',
          { lineHeight: '1.25', fontWeight: '600' },
        ], // 14px
        body5: [
          '0.875rem',
          { lineHeight: '1.25', fontWeight: '300' },
        ], // 14px
        button: [
          '1.25rem',
          { lineHeight: '1.25', fontWeight: '600' },
        ], // 20px
      },
      colors: {
        purple: {
          100: '#D79EFA',
          200: '#AE67DA',
          300: '#AE67DA',
          400: '#1B1B38',
        },
        gray: {
          100: '#B8B8B8',
          200: '#323232',
          300: '#26282B',
        },
        blue: {
          100: '#50D0E1',
          200: '#5956E6',
          300: '#2B287B',
        },
        cardGradient: {
          DEFAULT: '#151618',
          100: '#0A0B0D',
        },
      },
      fontWeight: {
        regular: '300',
        medium: '400',
        semibold: '600',
      },
      borderWidth: {
        '1.5': '1.5px',
        '2.5': '2.5px',
      },
    },
  },
  plugins: [],
};
export default config;

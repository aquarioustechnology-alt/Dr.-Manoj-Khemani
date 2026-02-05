import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - White based
        white: '#ffffff',
        offwhite: '#fafaf9',
        cream: '#f5f5f4',
        
        // Secondary - Banyan Tree Leaf Green
        leaf: {
          50: '#f9fcf5',
          100: '#f0f7e6',
          200: '#e0edcb',
          300: '#c5de9e',
          400: '#b7d94c',
          500: '#A8CA3D',
          600: '#86a32e',
          700: '#677d24',
          800: '#526322',
          900: '#445220',
        },
        
        // Text colors
        text: {
          primary: '#1c1917',
          secondary: '#57534e',
          muted: '#a8a29e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-leaf': 'linear-gradient(135deg, #7a9a70 0%, #5c7f52 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

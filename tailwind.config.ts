import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(18, 95%, 55%)',
        secondary: 'hsl(42, 98%, 52%)',
        dark: 'hsl(255, 20%, 10%)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(90deg, hsl(18, 95%, 55%), hsl(18, 98%, 64%))',
      },
      height: {
        header: 'var(--header-height)',
      },
      zIndex: {
        tooltip: 'var(--z-tooltip)',
        fixed: 'var(--z-fixed)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      borderWidth: {
        '5': '5px',
      },
      spacing: {
        'fluid-pl': 'clamp(0px, calc(28px + (100vw - 768px) * 0.07), 84px)',
      },
    },
  },
  plugins: [],
}
export default config

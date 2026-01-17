/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      // Typography - Fonts
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      fontSize: {
        // Desktop
        'hero-desktop': ['64px', { lineHeight: 'auto', fontWeight: '700' }],
        'h1-desktop': ['40px', { lineHeight: 'auto', fontWeight: '700' }],
        'h2-desktop': ['32px', { lineHeight: 'auto', fontWeight: '600' }],
        'h3-desktop': ['24px', { lineHeight: 'auto', fontWeight: '600' }],
        'body-desktop': ['18px', { lineHeight: 'auto', fontWeight: '400' }],
        'button-desktop': ['18px', { lineHeight: 'auto', fontWeight: '600' }],
        'small-desktop': ['16px', { lineHeight: 'auto', fontWeight: '500' }],
        
        // Tablet
        'hero-tablet': ['44px', { lineHeight: 'auto', fontWeight: '700' }],
        'h1-tablet': ['32px', { lineHeight: 'auto', fontWeight: '700' }],
        'h2-tablet': ['24px', { lineHeight: 'auto', fontWeight: '600' }],
        'h3-tablet': ['22px', { lineHeight: 'auto', fontWeight: '600' }],
        'body-tablet': ['16px', { lineHeight: 'auto', fontWeight: '400' }],
        'button-tablet': ['16px', { lineHeight: 'auto', fontWeight: '600' }],
        'small-tablet': ['14px', { lineHeight: 'auto', fontWeight: '500' }],
        
        // Mobile
        'hero-mobile': ['34px', { lineHeight: 'auto', fontWeight: '700' }],
        'h1-mobile': ['26px', { lineHeight: 'auto', fontWeight: '700' }],
        'h2-mobile': ['20px', { lineHeight: 'auto', fontWeight: '600' }],
        'h3-mobile': ['18px', { lineHeight: 'auto', fontWeight: '600' }],
        'body-mobile': ['14px', { lineHeight: 'auto', fontWeight: '400' }],
        'button-mobile': ['14px', { lineHeight: 'auto', fontWeight: '600' }],
        'small-mobile': ['12px', { lineHeight: 'auto', fontWeight: '500' }],
      },
      
      // Colors
      colors: {
        'primary': '#42389E',
        'secondary': '#F9A71E',
        'accent': '#EDECF6',
        'header-1': '#0E121B',
        'header-2': '#1B1D22',
        'header-3': '#323338',
        'body-1': '#4A4B4D',
        'body-2': '#5F5F60',
        'body-3': '#8D8D8D',
        'light-1': '#B7B8B9',
        'light-2': '#DEDEDE',
        'light-3': '#FEFEFF',
      },
      
      // Layout
      spacing: {
        'grid-gap-mobile': '20px',
        'grid-gap-tablet': '20px',
        'grid-gap-desktop': '24px',
        'page-margin-mobile': '24px',
        'page-margin-tablet': '64px',
        'page-margin-desktop': '120px',
      },
      
      // Effects
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #42389E 0%, #0F1026 100%)',
      },
      boxShadow: {
        'drop': '0px 0px 10px 10px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'glass': '80px',
        'new-glass': '100px',
      },
    },
  },
  plugins: [],
}
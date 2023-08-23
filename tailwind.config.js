import('tailwindcss').Config

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  fontFamily: {
    primary: ['Hammersmith One', 'sans-serif'],
    secondary: ['Playfair Display', 'sans-serif'],
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  extend: {
    colors: {
      primary: '#0a0a0a',
      accent: '#FFBABA',
      highlight: '#EFAC99',
      secondary: '#F6EDE2',
      'custom-color': '#C85C8E',
    },
  },
};
export const plugins = [];


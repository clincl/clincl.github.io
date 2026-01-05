/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        // Custom color palette based on user's theme
        'sky-blue': '#97C1E0',
        'denim-navy': '#354964',
        'warm-beige': '#D7C7B2',
        'deep-stone': '#4D5157',
        'slate-mist': '#BCCAD6',
        'golden-earth': '#CBAA76',
      },
    },
  },
  plugins: [],
}

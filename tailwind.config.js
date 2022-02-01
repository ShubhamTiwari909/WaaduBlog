module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'pink': '#ff49db',
      'orange': '#ff7849',
      'gray-dark': '#273444',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '49': '20.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { "plaintext": "javascript" }
}

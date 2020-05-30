module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        'dark': { 'raw': '(prefers-color-scheme: dark)' },
        // => @media (prefers-color-scheme: dark) { ... }
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [],
};
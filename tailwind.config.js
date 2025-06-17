module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/views/**/*.{html,erb}',
    './app/helpers/**/*.rb',
    './app/assets/javascripts/**/*.js',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'sun': "url('/images/background-sun.png')",
      }
    },
  },
  plugins: [],
}

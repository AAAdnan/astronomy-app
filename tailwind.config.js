module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'moon-eclipse': "url('/moon-eclipse.jpg')",
        'night-sky': "url('/night-sky.jpg')",
        'skyline': "url('/skyline.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

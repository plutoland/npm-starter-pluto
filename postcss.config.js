const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  syntax: 'postcss-scss',
  map: {
    sourcesContent: true,
    annotation: true,
  },
  plugins: [
    require('postcss-node-sass')({
      includePaths: ['node_modules'],
      outputStyle: 'expanded',
      indentWidth: 2,
      precision: 6,
    }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : []),
  ],
}

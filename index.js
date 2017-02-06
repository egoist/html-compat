const cheerio = require('cheerio')
const babel = require('babel-core')
const postcss = require('postcss')

module.exports = function (input, {
  browsers = ['ie > 8', 'last 4 versions']
} = {}) {
  if (typeof input !== 'string') {
    throw new Error('Expected input to be string')
  }

  const $ = cheerio.load(input, {decodeEntities: false})
  const pipe = Promise.resolve()

  return pipe
    .then(() => {
      $('script').each(function () {
        const source = $(this).html()

        let result = babel.transform(source, {
          presets: [
            [require.resolve('babel-preset-env'), {
              targets: {
                browsers
              }
            }]
          ]
        }).code

        $(this).html(result)
      })

      const styleTags = []
      $('style').each(function () {
        styleTags.push($(this))
      })
      return Promise.all(styleTags.map($tag => {
        return postcss([require('postcss-cssnext')({
          browsers
        })])
          .process($tag.html())
          .then(result => {
            $tag.html(result.css)
          })
      }))
    })
    .then(() => {
      return $.root().html()
    })
}

const fs = require('fs')
const path = require('path')
const execa = require('execa')
const htmlCompat = require('../')

test('main', () => {
  return htmlCompat(`
    <head></head>
    <script>
      const foo = 1
    </script>
  `).then(output => {
    expect(output.indexOf('var foo = 1') > -1).toBe(true)
  })
})

test('cli', () => {
  const cli = path.join(__dirname, '../cli.js')
  return execa(cli, ['__test__/fixture.html', '-o', '__test__/output.html'])
    .then(() => {
      const content = fs.readFileSync('__test__/output.html', 'utf8')
      expect(content.indexOf('var a = 1;') > -1).toBe(true)
      expect(content.indexOf('body .foo') > -1).toBe(true)
    })
})

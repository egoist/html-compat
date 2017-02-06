#!/usr/bin/env node
const fs = require('fs')
const cac = require('cac')
const chalk = require('chalk')
const htmlCompat = require('./')

const cli = cac()

cli.usage(`${chalk.yellow('html-compat')} <input> -o <output> [options]`)

cli.option('o, output', 'Path to output file')
cli.option('b, browsers', 'Supported browsers')

cli.command('*', 'Start transpiling!', (input, flags) => {
  const inputFile = input[0]
  const outputFile = flags.output
  const browsers = flags.browsers

  if (!inputFile) {
    return cli.showHelp()
  }

  if (!outputFile) {
    return console.error(chalk.red('> No output file!'))
  }

  const inputContent = fs.readFileSync(inputFile, 'utf8')

  return htmlCompat(inputContent, {browsers})
    .then(result => {
      fs.writeFileSync(outputFile, result, 'utf8')
      console.log(`Wrote to ${outputFile}!`)
    })
})

cli.parse()

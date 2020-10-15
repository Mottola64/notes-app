const chalk = require('chalk')

const getNotes = require('./notes')

const printNotes = getNotes()

console.log(printNotes)

console.log(chalk.green('Success'))


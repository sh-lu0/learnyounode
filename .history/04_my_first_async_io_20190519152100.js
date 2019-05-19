var fs = require('fs')

file = process.argv[2]

fs.readFile

var lines = file
  .toString()
  .split('\n')
  .length - 1

console.log(lines)

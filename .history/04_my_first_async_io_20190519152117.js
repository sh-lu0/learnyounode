var fs = require('fs')

file = process.argv[2]

fs.readFile(file, function())

var lines = file
  .toString()
  .split('\n')
  .length - 1

console.log(lines)

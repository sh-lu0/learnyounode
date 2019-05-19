var fs = require('fs')

file = fs.readFile(process.argv[2], )

var lines = file
  .toString()
  .split('\n')
  .length - 1

console.log(lines)

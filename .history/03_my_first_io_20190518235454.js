var fs = require('fs')

file = fs.readFileSync(process.argv[i])

var lines = file
  .toString()
  .split('|n')

console.log(lines)

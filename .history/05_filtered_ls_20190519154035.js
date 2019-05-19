var fs = require('fs')

path = process.argv[2]
type = process.argv[2]

fs.readdir(path, function (err, list) {
  if (err) return callback(err)
  var lines = list
    .toString()
    .split('\n')
    .length - 1
  console.log(lines)
})

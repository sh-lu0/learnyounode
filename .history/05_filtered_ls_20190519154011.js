var fs = require('fs')

path = process.argv[2]
type = process.argv[2]

fs.readdir(file, function (err, data) {
  if (err) return callback(err)
  var lines = data
    .toString()
    .split('\n')
    .length - 1
  console.log(lines)
})

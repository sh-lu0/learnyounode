var fs = require('fs')
var path = require('path')

file = process.argv[2]
type = process.argv[2]

fs.readdir(file, function (err, list) {
  if (err) return callback(err)
  list.forEach(function (file) {
    if (path.extname(file === '.' + type)) {
      console.log(file)
    }
  })
  console.log(lines)
})

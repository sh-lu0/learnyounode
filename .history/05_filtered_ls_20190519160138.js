var fs = require('fs')

var path = require('path')

var file = process.argv[2]
var type = process.argv[3]

fs.readdir(file, function (err, list) {
  if (err) return console.error(err)
  list.forEach(function (file) {
    if (path.extname(file) === '.' + type)
      console.log(file)
  })
})

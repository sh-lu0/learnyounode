var fs = require('fs')

file = process.argv[2]

fs.readFile(file, function (err, data) {
  if (err) return callback(err)
  var lines = data
    .toString()
    .split('\n')
    .length - 1
  console.log(lines)
})

// // 解答
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) 使ってもいい
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

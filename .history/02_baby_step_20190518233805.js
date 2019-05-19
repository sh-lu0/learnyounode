// console.log(process.argv)

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  num = +process.argv[i] + result
  result = +process.argv[i] + result
}

console.log(result)

// console.log(process.argv)

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  num = result + process.argv[i]
  result += num
}

console.log(result)

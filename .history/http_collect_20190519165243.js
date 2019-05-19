var http = require('http')
var url = process.argv[2]

request = http.get(url, function (res) {
  var result = ''
  res.setEncoding('utf8')
  res.on('data', function (data) {
    result += data
  })
  // 出力 endイベント
  res.on('end', function () {
    console.log(result.length)
    console.log(result)
  })
  res.on('error', console.error)
})

request.on('error', function (err) {
  console.error(err)
})

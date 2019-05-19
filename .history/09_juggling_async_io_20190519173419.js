var http = require('http');
// 入力された配列の3,4,5行めを読み込む
var links = [2, 3, 4];

var buffer = [];

// 即時関数　引数indexに0を入れて実行
(function render(index) {
  http.get(process.argv[links[index]], function (response) {
    response.setEncoding('utf8')
    response.on('data', function (data) {
      if (buffer[index] === undefined) {
        buffer[index] = ''
      }
      buffer[index] += data
    })
    response.on('end', function () {
      var newIndex = index + 1
      if (links[newIndex] !== undefined) {
        // links配列の中身が終わるまで繰り返し
        render(newIndex)
      } else {
        // ３つとも終わった時
        return renderOutput()
      }
    })
    response.on('error', console.error)
  }).on('error', console.error)
})(0)

function renderOutput() {
  buffer.forEach(function (elem) {
    console.log(elem)
  })
}

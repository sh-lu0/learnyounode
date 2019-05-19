var fs = require('fs')
var http = require('http')
var url = process.argv[2]

request = http.get(url, function)

var findfile = require('./module.js');
var dir = process.argv[2];
var ext = process.argv[3];

findfile(dir, ext, function (err, list) {
  if (err) throw err;
  list.forEach(function (file) {
    console.log(file);
  });
});

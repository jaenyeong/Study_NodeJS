var express = require('express'),
  http = require('http');

var app = express();

app.use(function (req, res, next) {
  console.log('첫 번째 미들웨어에서 요청 처리');
  res.redirect('http://google.co.kr');
});

http.createServer(app).listen(3000, function () {
  console.log('Express 서버가 3000번 포트에서 시작');
});

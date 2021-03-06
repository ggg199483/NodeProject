
//本文件只作为启动入口 通过bin目录www文件启动
var express = require('express');
var path = require('path');
var config = require("./config");
var router = require('./routes.js')
var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup



//解析html用
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态文件转发用  js css 图片之类的
app.use(express.static(path.join(__dirname, 'public')));
//引入routes路由
app.use('/', router);






//异常处理 暂时不开启
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   var body = createHtmlDocument(err.stack)
//   res.end(body, 'utf8')
//
//   sendErrCourier(err.stack)
// })




//启动js换成了www  在bin目录下 www和app只能开启一个 否则会启动两个服务端口 用idea启动 下面的app入口要关闭
// http.createServer(app).listen(config.port, function(){
//   console.log(config.port);
//
//   console.log("服务启动了  端口号是: " + config.port);
// });



module.exports = app;

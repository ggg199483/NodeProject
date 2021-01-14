//"首页路由;

var config = require('.././config'); //../表示上级目录
var request = require('request');


//res.render  跳转页面
exports.login = function (req, res, next) {
	console.log('有用户到首页了!');

	res.render('index.html',{message:""});
	
};

//res.send  传递响应
exports.onLogin = function (req, res, next) {
	console.log('user onlogin!');

	
	//

	var url = config.backUrl+':'+config.backPort+'/student/test';
	console.log(url);
	//var url = 'http:127.0.0.1:8090/student/test';
	var requestData = {
		//city: '北京'   //填写自己需要传的参数
	};
	request({
		url: url,
		method: 'get',// 请求方式get
		json: true,   //json格式传输
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(requestData)
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.send(response);   //成功响应传递  不写就没响应返回了
		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});//响应异常处理  状态码500设置
			res.write(error.toString()); //响应错误信息转发
			res.end("");
		}
	});
	

};





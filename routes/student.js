//学生端路由

var config = require('.././config'); //../表示上级目录
var request = require('request');


//res.render  跳转页面
exports.loginHTML = function (req, res, next) {
    res.render('./student/student-login.html',{message:""});
	
};
exports.registerHTML = function (req, res, next) {
    res.render('./student/student-register.html',{message:""});

};

//注册接口
exports.register = function (req, res, next) {
	var url = config.backUrl+':'+config.backPort+'/student/register';
	console.log("url:"+url);
	request({
		url: url,
		method: 'post',// 请求方式get
		json: true,   //json格式传输
		headers: req.headers,
		body: JSON.stringify(req.body),
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			console.log("注册成功");
			// res.send(response);
			res.send(response.body)
		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});
			res.write(error.toString());
			res.end("");
		}
	});
};




//res.send  传递响应
exports.onLogin = function (req, res, next) {
	console.log('exp onlogin!');
	console.log(config.backPort)
	
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
		// headers: {
		// 	'content-type': 'application/json',
		//
		// },
		headers: req.headers,
		body: JSON.stringify(requestData)
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			res.send(response);


		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});
			res.write(error.toString());
			res.end("");
		}
	});






};


exports.test2 = function (req, res, next) {
	var url = config.backUrl+':'+config.backPort+'/student/test2';
	console.log("url:"+url);
	request({
		url: url,
		method: 'get',// 请求方式get
		json: true,   //json格式传输
		headers: req.headers,
		body: JSON.stringify(req.body),
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			console.log("注册成功");
			// res.send(response);
			res.send(response.body)
		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});
			res.write(error.toString());
			res.end("");
		}
	});
};

exports.test3 = function (req, res, next) {
	var url = config.backUrl+':'+config.backPort+'/student/test3';
	console.log("url:"+url);
	request({
		url: url,
		method: 'post',// 请求方式get
		json: true,   //json格式传输
		headers: req.header,
		// body: JSON.stringify(req.body),
		body: req.body,
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			console.log("测试成功");
			// res.send(response);
			res.send(response.body)
		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});
			res.write(error);
			res.end("");
		}
	});
};


exports.test4 = function (req, res, next) {
	var url = config.backUrl+':'+config.backPort+'/student/test4';
	console.log("url:"+url);
	request({
		url: url,
		method: 'post',// 请求方式get
		json: true,   //json格式传输
		headers: req.header,
		// body: JSON.stringify(req.body),
		body: req.body,
	}, function(error, response, body) {
		// 请求成功的处理逻辑
		if (!error && response.statusCode == 200) {
			console.log("测试成功");
			// res.send(response);
			res.send(response.body)
		}else{
			console.log("error")
			res.writeHead(500,{"Content-Type":"text/html"});
			res.write(error);
			res.end("");
		}
	});
};


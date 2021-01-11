
//配置路由js  页面和请求全在这

var express = require('express');
var user = require('./routes/user');
var router = express.Router();


//get请求用get  post用post  全部用all
router.get('/', user.login);
router.get('/student', user.login);
router.get('/teacher', user.login);
router.get('/onLogin', user.onLogin);


module.exports = router;

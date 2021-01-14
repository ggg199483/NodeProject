
//配置路由js  页面和请求全在这

var express = require('express');
var user = require('./routes/user');
var student = require('./routes/student');
var teacher = require('./routes/teacher');
var router = express.Router();


//get请求用get  post用post  全部用all

// router.get('/:anything', function (req, res) {
//     console.log("any")
//     res.send(req.params.anything);
// })

router.get('/', user.login);
router.get('/onLogin', user.onLogin);


router.get('/student/register.html', student.registerHTML);
router.get('/student/login.html', student.loginHTML);
router.get('/student/onLogin', student.onLogin);
router.post('/student/register',student.register)



router.get('/teacher', teacher.login);


module.exports = router;

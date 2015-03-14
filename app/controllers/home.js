var express = require('express'),
	router = express.Router(),
  	Article = require('../models/article');

//var bodyParser = require('body-parser');

//app.use(express.bodyParser());

//------------- MySQL-----------------//
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "175.126.56.188",
    port : 3306,
    user : "nyb",
    password : "Skp02466",
    database : "courspick"
});
//-------------------------------------//
module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];

    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

//hyperlink to Login page//////////////////////
router.get('/loginform', function (req, res, next) {

  	var articles = [new Article(), new Article()];
    res.render('login', {
      title: 'Generator-Express MVC',
      articles: articles
    });

});

router.post('/login', function (req, res, next) {
	var articles = [new Article(), new Article()];

	var user_id = req.body.user_id;
	var user_pwd = req.body.user_pwd;

	// DB 에 정보저장 및 예외처리수행
	console.log("user_id : "+user_id);
	console.log("user_pwd : "+user_pwd);

	res.render('main', {
	   	title: 'Generator-Express MVC',
	   	articles: articles
	});
});
///////////////////////////////////////////////


//hyperlink to Signup page/////////////////////
// 회원가입 Page
router.get('/signupform', function (req, res, next) {
	var articles = [new Article(), new Article()];
    res.render('signup', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

router.post('/signup', function (req, res, next) {
  	var articles = [new Article(), new Article()];

  	var user_id = req.body.user_id;
	var user_pwd = req.body.user_pwd;

	// DB 에 정보저장 및 예외처리수행
	console.log("user_id : "+user_id);
	console.log("user_pwd : "+user_pwd);

    res.render('main', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

///////////////////////////////////////////////


//hyperlink to Main page ///////////////////////
router.get('/main', function (req, res, next) {

  	var articles = [new Article(), new Article()];

  	console.log('start /main');
    res.render('main', {
	    title: 'Generator-Express MVC',
	    articles: articles
	});
});




///////////////////////////////////////////////
// 3. delete
router.get('/dbDelete', function (req, res, next) {
	var user_cd = req.param('user_cd');

	// user_cd로 DB에서 SELECT수핼
	var sql = 'delete from User where User_Cd=?';
	var query = connection.query(sql, [ user_cd ], 
		function (err, rows) {
	    if(err){
	        connection.release();
	        throw err;
		//	res.send('delete fail!');//처리해주어야..
	    }
	//    console.log(rows);

		res.send('delete success!');
	});

});


// INSERT
// var sql = 'insert into User(user_id, user_pwd, user_type_cd) VALUES(?, ?, ?)';
// var query = connection.query(sql, [user_id, user_pwd, user_type_cd], 
// 	function (err, rows) {
//     if(err){
//         connection.release();
//         throw err;
//     }
//     console.log(rows);
//  	});

// DELETE
// var sql = 'delete from User where User_Cd=?';
// var query = connection.query(sql, [ user_cd ], 
// 	function (err, rows) {
//     if(err){
//         connection.release();
//         throw err;
// 	//	res.send('delete fail!');//처리해주어야..
//     }
// //    console.log(rows);
// 	res.send('delete success!');
// });


// SELECT
// 	var user_id = req.param('user_id');
// 	var sql = 'select * from User where User_Id=?';
// 	var query = connection.query(sql, [ user_id ], 
// 		function (err, rows) {
// 	    if(err){
// 	        connection.release();
// 	        throw err;
// 	    }
// 	    console.log(rows);
// 	});


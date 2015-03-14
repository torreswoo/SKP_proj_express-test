
$(document).ready(function(){

	// DB select
	// $('#submit').click(function(){  // id
	// 	var user_id = $('#user_id').val();// 값을 가져오기
	// 	var user_pwd = $('#user_pwd').val();
	// 	$.ajax({
	// 		url: '/login?user_id='+user_id,//GET방식으로 URL에추가하기
	// 		type: 'get', 
	// 		dataType:'text';

	// 		success: function(data){
	// 			console.log("success");
	// 		}
	// 	});
	// 	console.log('end SELECT request');
	// });


	// $('#login').click(function(){  // id
	// 	console.log("user_id: "+ $('#user_id').val() + ",user_pwd:"+$('#user_pwd').val());
	// 	$.ajax({
	// 		url: '/login',//POST방식으로 URL에추가하기
	// 		type: 'post', 
	// 		dataType:'text', 
	// 		data:{
	// 			user_id: $('#user_id').val(),
	// 			user_pwd: $('#user_pwd').val()
	// 		},

	// 		success: function(data){
	// 			console.log("success");
	// 		}
	// 	});
	// 	console.log('end SELECT request');
	// });

	// Sign up button listener
	$('#signup').click(function(){	
		$.ajax({
			url: '/register',
			type: 'post', 
			dataType:'text', 
			data:{
				user_id: $('#user_id').val(),
				user_pwd: $('#user_pwd').val(),
				user_type_cd: $('#user_type_cd').val()
			},
		//	console.log('data sent');

			success: function(data){
				console.log('success');
			}
		});
		console.log('end POST request');
	});	

	// DB select
	$('#db_delete').click(function(){  // id
		var user_cd = $('#user_delete').val();// 값을 가져오기
		
		$.ajax({
			url: '/dbDelete?user_cd='+user_cd,//GET방식으로 URL에추가하기
			type: 'get', 
			dataType:'text', 

			success: function(data){
				alert(data);
			}
		});
		console.log('end SELECT request');
	});

});

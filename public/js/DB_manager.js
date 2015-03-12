
$(document).ready(function(){

	// DB select
	$('#db_select').click(function(){  // id
		var user_cd = $('#user_select').val();// 값을 가져오기
		
		$.ajax({
			url: '/dbSelect?user_cd='+user_cd,//GET방식으로 URL에추가하기
			type: 'get', 
			dataType:'text', 

			success: function(data){
				$('#output_select').val(data);
			}
		});
		console.log('end SELECT request');
	});

	// Sign up button listener
	$('#signup').click(function(){  // id: get인 버튼의 이벤트처리		
		$.ajax({
			url: '/signup',//GET방식으로 URL에추가하기
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

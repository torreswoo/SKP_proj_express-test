$(document).ready(function(){
	$('#get').click(function(){  // id: get인 버튼의 이벤트처리
		var name = $('#name').val();// 값을 가져오기
		var price = $('#price').val();
		
		$.ajax({
			url: '/users?name='+name+'&price='+price,//GET방식으로 URL에추가하기
			type: 'get', 
			dataType:'text', 

			success: function(data){
				$('#output').val(data);
			}
		});
		console.log('end GET request');
	});


	$('#post').click(function(){  // id: get인 버튼의 이벤트처리		
		$.ajax({
			url: '/users',//GET방식으로 URL에추가하기
			type: 'post', 
			dataType:'text', 
			data:{
				name: $('#name').val(),
				price: $('#price').val()
			},


			success: function(data){
				$('#output').val(data);
			}
		});
		console.log('end POST request');
	});	
});
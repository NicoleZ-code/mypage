$(function  () {
	// body...
	function Init(){
		$("#container-03").css({
			'width' : $(window).width(),
			'height' : $(window).height()
		});		
	}
	Init();
	// if(true && $(window).width() >768){
	// 	$.ajax({
	// 		url : "Skills.html",
	// 		data : { },
	// 		type : 'post',
	// 		dataType : 'html',
	// 		cache : false,
	// 		timeout : 0,
	// 		success : function (data) {
	// 			// $("#container-03").html(data);

	// 		},
	// 		error : function(){

	// 		}

	// 	})
	// }
	
	$(window).resize(function(){
		Init();
	});
});
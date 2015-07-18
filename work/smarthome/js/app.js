/*
 author by crystal
*/
$(document).ready(function (argument) {
	//define anmiate var
	var startX =0,
		distance=0,
		first_scale = 1,
		center_scale ,
		last_scale =0.8,
		orientation = true,//方向 
		imgH = 80;	

	var $rightframe=$(".rightframe"),
		$wrapbox = $(".wrapbox"),
		$wrap = $(".wrap"),
		$screenwidth,
		$screenheight;

		//define event type 
	var isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) && navigator.userAgent.match(/Mobile/i) !== null? true : false;			
		tapDown = isMobile? 'touchstart': 'mouseenter',
		tapUp = isMobile? 'touchend': 'mouseleave',
		tap = isMobile? 'touchend': 'click';

	function init(){
		$screenwidth = $(window).width();
		$screenheight = $(window).height();
		
		// desktop  display
		if ($screenwidth > 768 && $screenheight > 600) {
			// $screenheight = 600;
		}
		
		

		TweenMax.set([$rightframe,$wrapbox], {
			"width":$screenwidth,
			"height":$screenheight
		});

		TweenMax.set($rightframe,{
			scale: first_scale,
			x:0
		});
		TweenMax.set($wrap,{				
			scale:0.6,
			alpha:0,
			transformOrigin:'left bottom'
		});


		//load home page
		 

		// touchEvent();
		// loadEvent();

		// touchEventSimple();
	}
	$(window).resize(function(){
		init();	
	});
	function loadEvent(){
		$(".maincontent .item1 ul.menu li .img").each(function(i){
			$(this).on(tap,function(e){
				//e.stopPropagation();//阻止事件冒泡
				if(i!=0){
					ajaxload(i+1);
					//home page laypout

					// imgH = $(".maincontent .item1 ul.menu li .img").height();
					// $(".maincontent .item1 ul.menu li").css({
					// 	'margin':(($screenheight-35)/3-imgH)*0.25+"px 0"
					// });
				}else{
					ajaxload("door");
				}
				//alert(i+1) ajax touch 不起作用
			});
		});			 
		$(".wrapbox ul.menu li").each(function(i){
			$(this).on(tap,function(){
					ajaxload(i+1);
					initState();
			});
		});
		
		// go back to home page
		$(".mainback").on(tap,function(){
			ajaxload(1);
		});

		// light off-on
		$(".item ul.appliance li span.btn").each(function(){
			$(this).on(tap,function(){
					if ($(this).hasClass("off")) {
						$(this).removeClass('off');
					}else{
						$(this).addClass('off');
					}
			});
		});

		// temperature
		$(".item ul.appliance li span.btnlook").on(tap,function(){
			var C = parseInt($(".item ul.appliance li span.btnC").text());
			$(".setCbox input").val(C).focus();
			$(".setCbox").show();
		});
		// mobile input focus
		$(".setCbox input").on(tap,function () {
			$(this).focus();
		}) 
		// yes
		$(".setCbox span.yes").on(tap,function(){
			var v = $(".setCbox input").val();
			var minT = 16,maxT = 31;	
			if($(this).parents(".setCbox").hasClass("hot")){
				// 判断 是热水器 还是空调
				minT = 40;
				maxT = 75;
			}			
				if( v>=minT && v<=maxT &&!v.isNaN()){
					$(".item ul.appliance li span.btnC").text(v+"°C");
					$(".setCbox").hide();
				}else{
					// error 时弹出层抖动动画
					TweenMax.fromTo($(".setC"),0.2,{
						x:-2,
						y:-2
					},{
						x:2,
						y:2,
						ease: Back.easeOut,
						repeat: 2,
						onComplete:function () {
							TweenMax.set($(".setC"),{
								x:0,
								y:0
							});
							

						}
					})
				}
			
		});
		// no
		$(".setCbox span.no").on(tap,function(){
			$(".setCbox").hide();
		});

	}
	function ajaxload(index){
		$.ajax({
			url : "item"+index+".html",
			data : { },
			type : 'get',
			dataType : 'html',
			cache : false,
			timeout : 0,
			async:false, 
			success : function (data) {
				$(".rightframe").html(data);

				loadEvent();
				// touchEvent();
				touchEventSimple();
				
			},
			error : function(){
				$(".rightframe").html("<div class=\"error\" >loading error......</div>")
			}

		});	

	}

	function initState(){
		TweenMax.to($rightframe, .5, {
			scale: first_scale,
			x:0
		});
		TweenMax.to($wrap, 0.5,{				
			scale:0.6,
			alpha:0
		});	
	}
	function lastState(){
		TweenMax.to($rightframe,0.5,{
			scale: last_scale,
			x: $screenwidth*0.5
		});			
		TweenMax.to($wrap, 0.5,{				
			scale:1,
			alpha:1
		});
	}
	function touchEvent(){
		$rightframe.on('touchstart', function(e) {
			e.preventDefault();
			e = e.changedTouches[0];
			startX = e.pageX;
			
		});
		$rightframe.on('touchmove', function(e) {
			e.preventDefault();
			e = e.changedTouches[0];
			distance =startX - e.pageX;
			var moveX;
				
			if (Math.abs(distance)> $screenwidth*0.5) {
				// distance = $screenwidth*0.5;
			}
			moveX = distance;
			function center_scale(){
				center_scale = first_scale*(1-Math.abs(distance)/$screenwidth);
				if(center_scale > first_scale){
					center_scale = first_scale; // MAX-scale
				}
				if (center_scale < last_scale) {
					center_scale = last_scale; //MIN-scale
				}
				return center_scale;
			}
			center_scale();

			if (Math.abs(distance)<40) {
				return false;
			}else{
				if (orientation && distance < 0 ) { //  ->
					TweenMax.set($rightframe,{
						scale: center_scale,
						x: -moveX
					});			
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)	
				}
				if (orientation && distance > 0) { //  <-

					TweenMax.set($rightframe,{
						scale: center_scale,
						x: $screenwidth*0.5-moveX
					});			
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)	
				}
				
			}

			
		});
		$rightframe.on('touchend', function(e) {
			e.preventDefault();
			e = e.changedTouches[0];				
			if (Math.abs(distance)>=40 ) {
				if (orientation && distance < 0 ) { //  ->
					lastState();
					orientation = false;
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)
				}
				if (!orientation && distance > 0) { //  <-
					initState();	
					orientation = true;							
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)	
				}
				// if (orientation && distance < 0 ||!orientation && distance > 0 ) {
				// 	orientation = false ? true : false;
				// }
				
			} else {
				if (orientation){
					lastState();
				}
				if (!orientation) {
					initState();
				}

			}
			
		});			
	}

	function touchEventSimple(){
		$rightframe.on('touchstart', function(e) {
			e.preventDefault();
			e = e.changedTouches[0];
			startX = e.pageX;
			
		});
		$rightframe.on('touchend', function(e) {
			e.preventDefault();
			e = e.changedTouches[0];	
			distance =startX - e.pageX;			
			if (Math.abs(distance)> 40 ) {
				if (orientation && distance < 0 ) { //  ->
					lastState();
					orientation = false;
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)
				}
				if (!orientation && distance > 0) { //  <-
					initState();	
					orientation = true;							
					console.log('touchmove-distance:'+distance+"/center_scale: "+ center_scale+"orientation:"+orientation)	
				}
				
			 } else {
			// 	if (orientation){
			// 		lastState();
			// 	}
			// 	if (!orientation) {
			// 		initState();
			// 	}

			}
			
		});				
	}
	init();
	ajaxload(1);
	// console.log($(".maincontent .menu li "))

});

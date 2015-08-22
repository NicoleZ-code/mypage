
$(function  () {
	var isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) && navigator.userAgent.match(/Mobile/i) !== null? true : false;			
	var hasTouch = ('ontouchstart' in window);	
 	var $version = $(".version") ;
 	var $version_v = 2 ;	
	var $wrap = $(".wrap");
	var $game_container = $(".game-container")
	var $tile_container = $(".tile-container");
	var $helper = $(".helper");
	var $startBtn = $(".helper .start");
	var $message = $(".game-message");
	var $tile_move = $(".tile-move");
	var $tile_empty = $(".tile-empty");
	var $step = $(".step");
	var $keep_playing_btn = $(".game-message .lower .keep-playing-button");
	var $retry_btn = $(".game-message .lower .retry-button");
	var $newGame = $(".new");
	var $level = $(".level");
	var numberX = 4,numberY = 4;
	var itemW = $tile_container.width()/numberX,itemH =$tile_container.height()/numberY;
	var str = "";
	var imgURL = "../images/pic1.jpg";
	var step = 0;
	var successNum = 0;
	var level = 1;
	var timeLimit = 0;
	var setIntervalid = null;
	var randomArray = [];//[numberX*numberY]
	var percent;
		
	// loading();
	Init();
	function loading(){	

		var img = new Image();

		for (var i = 1; i <= 6; i++) {
			for (var j = 1; j <= 6; j++) {
				var src="images/pic"+i+"_"+j+".jpg";
				img.src = src;
				percent = Math.ceil((((i-1)*6+j)/36)*100)+"%";	
				// $(".loading .percent").html(percent);
				// $(".loading .process").css("width",parseInt(percent)*250/100+"px");
				//console.log((i-1)*6+j,parseInt(percent)*250/100)			
			}			
		}
			var n = 0;
			var id = setInterval(function(){
				if(n <=100){
					var _n = n + "%" ;
					if(parseInt(_n)>100){
						_n = "00%";
					}
					$(".loading .percent").html(_n);
					$(".loading .process").css({ width: n*250/100+"px" });
					n = Math.floor(parseInt(n) + 75/59);
				}			
			},1000/60);
				$(".loading .percent").html("100%");
				setTimeout(function(){
					clearInterval(id);
					$(".loading").hide(300);
					Init();					
				},00);//1960		
	}

	function Init() {
		creatTile();
		moveRandom();			
		Event_selectVersion();
		setlevel(level);
		
	}

	function creatTile(){
		str = "";
		for (var i = 1; i <= numberX; i++) {
			for (var j = 1; j <= numberY; j++) {
				var n = (i-1)*numberX+j ;
				str +="<div class=\"tile  tile-position-"+ i +"-"+j +"\" data-p=\""+n+"\"></div>";
			}//tile-"+n+"
		};
		// if (hasTouch) {
		// 	$("body").addClass("has-touch");
		// }else{
			str = str+"<div class='emptybox'><div class='tile empty'></div> </div>";	//+ "<div class='tile-empty'></div>"+ "<div class='tile-move'></div>"		
		// 	$("body").addClass("no-touch");
		// }
		
		$tile_container.html(str);
	}

	function setposition(){
		var emptyboxright = -$tile_container.width()/numberX-10+1 ;
		var emptyboxtop = -10;
		// debugger
		if ($version_v == 2 && $(window).width()<=410) {
			itemW = 240/numberX;
			itemH = 240/numberY;
			emptyboxright = -240/numberX -10+5 ;
			emptyboxtop = -6;
		}
		// console.log(itemW)
		for (var i = 1; i <= numberX; i++) {

			for (var j = 1; j <= numberY; j++) {
				var postionX = itemW * (j-1);
				var postionY = itemH * (i-1);
				var n = (i-1)*numberX+j ;
				// var bgURL = "url(" + imgURL +") "+postionX+"px "+postionY +"px no-repeat";
				// $(".tile-"+n).css({			
										
				// });
				$(".tile-position-"+ i +"-"+j).css({
					"top":postionY,
					"left":postionX										
				});
				// console.log(postionX,postionY)
			}
				
			
		};	

		// console.log("_______")
		$(".emptybox").css({
			"right":emptyboxright,
			"top": emptyboxtop,
		});
	}

	function moveRandom(){
		var str="";
		if(randomArray.length==0){
		    for (var i = 1 ; i <=numberX*numberY; i++) {
		    	//randomArray[i] = i; //error
		    	randomArray.push(i); //restart error	    	
			}			
		}
		if (level <= 7) {
			randomArray.sort(function(){ return 0.5 - Math.random() }) ;
		}
		if ($version_v == 2) {
			// right top tile fixed
			for (var i = 0; i < randomArray.length; i++) {
				if(randomArray[i]== 4){
					randomArray[i] = randomArray[numberX-1];
					randomArray[numberX-1] = 4;
					
				}

			};
		}
		

		$(".tile").each(function(i){
			$(this).addClass("tile-"+randomArray[i]);		
			str = randomArray[i]+","+str;		
		});	
	}	

	//failure Mobile UC  didn't effect
	// function Event_1() {
	// 	var x = 0; 
	// 	$(".tile").on('swipeLeft',function(e){		
	// 		// $(this).removeClass("tile-empty");
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		tileExchangeimg($(this).index()-x,  $(this).index()-x-1, e.type);
	// 	}).on('swipeRight',function(e){		
	// 		// $(this).addClass("tile-empty");	
	// 		e.preventDefault();	
	// 		e.stopPropagation();
	// 		tileExchangeimg($(this).index()-x,  $(this).index()-x+1, e.type);
	// 	}).on('swipeUp',function(e){
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		tileExchangeimg($(this).index()-x, $(this).index()-x-numberX, e.type);
	// 	}).on('swipeDown',function(e){
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		tileExchangeimg($(this).index()-x,  $(this).index()-x+numberX, e.type);
	// 	});	
	// }
	function Event_selectVersion(){
		$version.find("span").on("click",function(){
			switch ($(this).index()) {
				case 0 : $version_v = 1;break;
				case 1 : $version_v = 2;break;
			}
		    moveRandom();			
			Event();
			setposition();
			$("body").addClass("v"+$version_v);
			$helper.addClass("helper-visiable");
			$version.hide();
		});
	}

	function Event () {			
		$(".tile").each(function (i) {
			Event_item(i);
			// KeyboardEvent(i);
		});

	}
	function Event_item(i){		
		 // Respond to swipe events
		  var touchStartClientX, touchStartClientY;
		  var tile = document.getElementsByClassName("tile")[i];

		  tile.addEventListener("touchstart", function (event) {
			    if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
			        event.targetTouches > 1) {
			      return; // Ignore if touching with more than 1 finger
			    }

			    if (window.navigator.msPointerEnabled) {
			      touchStartClientX = event.pageX;
			      touchStartClientY = event.pageY;
			    } else {
			      touchStartClientX = event.touches[0].clientX;
			      touchStartClientY = event.touches[0].clientY;
			    }

			    event.preventDefault();
		  });

		  tile.addEventListener("touchmove", function (event) {
		    event.preventDefault();
		  });

		  tile.addEventListener("touchend", function (event) {
			    if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
			        event.targetTouches > 0) {
			      return; // Ignore if still touching with one or more fingers
			    }

			    var touchEndClientX, touchEndClientY;

			    if (window.navigator.msPointerEnabled) {
			      touchEndClientX = event.pageX;
			      touchEndClientY = event.pageY;
			    } else {
			      touchEndClientX = event.changedTouches[0].clientX;
			      touchEndClientY = event.changedTouches[0].clientY;
			    }

			    var dx = touchEndClientX - touchStartClientX;
			    var absDx = Math.abs(dx);

			    var dy = touchEndClientY - touchStartClientY;
			    var absDy = Math.abs(dy);

			    if (Math.max(absDx, absDy) > 10) {
			      // (right : left) : (down : up)
			      tileExchangeimg($(tile).index(), absDx > absDy ? (dx > 0 ? 1 : -1) : (dy > 0 ? numberX : -numberX));
			      // console.log("dx-"+dx,"dy-"+dy)

			    }
			   
		  });
	}
	// keyboard Event PC
	function KeyboardEvent($item1){
		var X;
		if ($version_v ==2) {
			$("body").on('keydown',function(e){
				switch(e.which){
					case 37: X= -1; break;
					case 38: X= -numberX; break;
					case 39: X= 1; break;
					case 40: X= numberX; break;
				}
				tileExchangeimg($item1,X);
				// console.log($item1,X)
			});			
		};

	}

	$keep_playing_btn.on("click",keepPlaying);
	$retry_btn.on("click",restart);
	$newGame.on("click",restart);
	$startBtn.on("click",function(){
		$helper.removeClass("helper-visiable");
		
		setTimeout(function(){
			$helper.fadeOut("slow");
		},700);
		calculateTime();
	});

	function restart(){
		$game_container.removeClass("success");
		$message.hide();
		Init();
		Event();
		setposition();
		addSteps(0);
		setTimeLimit();
		calculateTime();
		if(timeLimit>1){
			clearInterval(setIntervalid);
		}
	}
	 
	function keepPlaying () {
	 	$game_container.removeClass("success");
		$message.hide();
		Init();
		Event();
		setposition();
		calculateTime();
		addSteps(0);	
	} 

	function tileExchangeimg(index, X){//index1,index2,type
		var index1 = index,index2 = index1 + X;
		// console.log(index1,index2)
		$(".tile").removeClass("move-animate");
		switch($version_v){
			case 1 : tileExchangeimg_item($(".tile").eq(index1),$(".tile").eq(index2));
			break;
			case 2 :					
					if($(".tile").eq(index2).hasClass("tile-empty")){
						tileExchangeimg_item($(".tile").eq(index1),$(".tile-empty"));
						$(".tile").eq(index1).addClass("tile-empty");
						$(".tile").eq(index2).removeClass("tile-empty");
						console.log(index1,index2)
					}
					//-->
					if (index1==3 && X ==1) {
						tileExchangeimg_item($(".tile").eq(index1),$(".emptybox .tile"));
						$(".emptybox .tile").removeClass("empty");
						$(".tile").eq(index1).addClass("tile-empty");
						console.log("-->")
					}
					//<--
					if (index1==0 && X ==-1 && $(".tile").eq(3).hasClass("tile-empty")) {
						tileExchangeimg_item($(".emptybox .tile"),$(".tile").eq(3));
						$(".emptybox .tile").addClass("empty");
						$(".tile").eq(3).removeClass("tile-empty");
						console.log("<--")
					} 
			break;
		}
		

	}
	function tileExchangeimg_item($item1,$item2){
		if($item1.index()>=0 && $item1.index()<=15 && $item2.index()>=0 && $item2.index()<=15){
			var a_bgp = $item1.css("background-position");
			var b_bgp = $item2.css("background-position");
			// console.log(index1,index2,type,a_bgp,b_bgp);

			$item1.animate({'background-position': b_bgp},50,"easeOutBack");
			$item2.animate({'background-position': a_bgp},50,"easeOutBack");

			$item1.addClass("move-animate");
			$item2.addClass("move-animate");
			validate();
			addSteps(successNum);		
		}
	}
	function addSteps(successNum){
		step ++;
		// $step.html(step);
		var zz = Math.ceil(successNum*100/16)+"%" ;
		if(successNum ==numberX*numberY){
			zz = "100%";
		}
		if(successNum ==0){
			$step.html(zz);
		}else{
			$step.html(zz+"<div class=\"addition\">*</div>");
		}
		
	}
	function setTimeLimit(){
		if ($version_v == 2) {
			timeLimit = 0;
		} else{
		 switch(level){
		 	case 1: 
		 	case 2: timeLimit = 0; break;
		 	case 3: timeLimit = 300; break;
		 	case 4: timeLimit = 200; break;
		 	case 5: timeLimit = 100; break;
		 	case 6: timeLimit = 60; break;
		 	default: timeLimit = 60;
		 }
		};

	}

	function calculateTime(){
		var second = minute = hour = "0";

		setTimeLimit();

		if(level>=3 && $version_v ==1){
			
			 setIntervalid = setInterval(function(){
				timeLimit --;
				if(timeLimit<0){
					timeLimit = 0;
					GameOver();
					clearInterval(setIntervalid);
					return false;
				}
				if(timeLimit <= 60){
					second = timeLimit;
					minute = hour = 0;
				}else if(timeLimit <= 3600){
					minute = parseInt(timeLimit/60);
					second = timeLimit%60;
					hour = 0;
				}else{
					hour = parseInt(timeLimit/3600);
					var tempT = timeLimit%3600;
					minute = parseInt(tempT/60);
					second = tempT%60;			
				}
				//$(".time").html(hour+":"+minute+":"+second);
				$(".time").html(minute+":"+second);
		
			},1000);			
		}

	}

	function validate(){
		$(".tile").each(function(i){
			var p = $(this).css("background-position").split(" ");
			var x = Math.abs(parseInt(p[1]))/itemW, y = Math.abs(parseInt(p[0]))/itemH;
			var z = x*numberX + y + 1;
			if( i ==0){
				successNum = 0;
			}
			if( i+1 == z){
				successNum++;
			}
			//console.log(successNum)
		});
		if(successNum == numberX * numberY ){
			GameWin();			
		}
	}

	function GameWin(){
		$game_container.addClass("success");
		$message.find(".word").html("You Win!");
		$message.removeClass("game-over");
		$message.show(1500);
		level++;	
	}
	function GameOver(){		
		$game_container.removeClass("success");
		$message.find(".word").html("Game Over!");
		$message.show(1500);
	}

	function setlevel (level) {
		$level.html("level"+level);
		for (var i = 1; i < 7; i++) {
			$wrap.removeClass("level-"+i);
		};
		if (level<7) {
			$wrap.addClass("level-"+level);
			exchangeSkin(level);
		}else{
			$wrap.addClass("level-n");
			$helper.show();
			$helper.addClass("develop-visible").addClass("developing");
		} 
		setTimeLimit();
	}


	function exchangeSkin (level) {
		var m = Math.floor(Math.random()*6+1);
		$(".level-"+level+" .tile-container div, .level-"+level+" .originalimg").css("background-image","url(images/pic"+level+"_"+m+".jpg)");
	}
	

});




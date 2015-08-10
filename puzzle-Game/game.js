
$(function  () {
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
	var imgURL = "pic1.jpg";
	var step = 0;
	var successNum = 0;
	var level = 1;
	var timeLimit = 0;
	var setIntervalid = null;
	var randomArray = [];//[numberX*numberY]
	
	Init();

	function Init() {
		creatTile();
		moveRandom();
		setposition();
		// calculateTime();
		Event ();
		setlevel(level);
		$helper.addClass("helper-visiable");
	}

	function creatTile(){
		str = "";
		for (var i = 1; i <= numberX; i++) {
			for (var j = 1; j <= numberY; j++) {
				var n = (i-1)*numberX+j ;
				str +="<div class=\"tile  tile-position-"+ i +"-"+j +"\" data-p=\""+n+"\"></div>";
			}//tile-"+n+"
		};
		//str = "<div class='emptybox'><div class='empty'></div> </div>"+ "<div class='tile-empty'></div>"+ "<div class='tile-move'></div>"+ str;
		
		$tile_container.html(str);
	}

	function setposition(){
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

			}
				
			
		};	
		$(".emptybox").css({
			"right":-$tile_container.width()/numberX-10+1,
			"top": "-10px",
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
		

		$(".tile").each(function(i){
			$(this).addClass("tile-"+randomArray[i]);
			
			str = randomArray[i]+","+str;
			
		});	
		// console.log(str);
		// console.log("____")
	}	

	function Event_1() {
		var x = 0;
		$(".tile").on('swipeLeft',function(e){		
			// $(this).removeClass("tile-empty");
			e.preventDefault();
			e.stopPropagation();
			tileExchangeimg($(this).index()-x,  $(this).index()-x-1, e.type);
		}).on('swipeRight',function(e){		
			// $(this).addClass("tile-empty");	
			e.preventDefault();	
			e.stopPropagation();
			tileExchangeimg($(this).index()-x,  $(this).index()-x+1, e.type);
		}).on('swipeUp',function(e){
			e.preventDefault();
			e.stopPropagation();
			tileExchangeimg($(this).index()-x, $(this).index()-x-numberX, e.type);
		}).on('swipeDown',function(e){
			e.preventDefault();
			e.stopPropagation();
			tileExchangeimg($(this).index()-x,  $(this).index()-x+numberX, e.type);
		});	
	}

	function Event () {
		$(".tile").each(function (i) {
			Event_item(i);
		})
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
		creatTile();
		moveRandom();
		setposition();
		calculateTime();
		Event();
		setlevel(level);
		addSteps(0);
		setTimeLimit();
		clearInterval(setIntervalid);
	}
	 
	function keepPlaying () {
	 	$game_container.removeClass("success");
		$message.hide();
		creatTile();
		moveRandom();
		setposition();
		calculateTime();
		Event();
		setlevel(level);
		addSteps(0);	
	} 

	function tileExchangeimg(index, X, type){//index1,index2,type
		var index1 = index,index2 = index1 + X;
		// console.log(index1,index2)
		$(".tile").removeClass("move-animate")
		if(index1>=0 && index1<=15 && index2>=0 && index2<=15){
			var a_bgp = $(".tile").eq(index1).css("background-position");
			var b_bgp = $(".tile").eq(index2).css("background-position");
			// console.log(index1,index2,type,a_bgp,b_bgp);

			$(".tile").eq(index1).animate({'background-position': b_bgp},50,"easeOutBack");
			$(".tile").eq(index2).animate({'background-position': a_bgp},50,"easeOutBack");

			$(".tile").eq(index1).addClass("move-animate");
			$(".tile").eq(index2).addClass("move-animate");
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
		 switch(level){
		 	case 1: 
		 	case 2: timeLimit = 0; break;
		 	case 3: timeLimit = 300; break;
		 	case 4: timeLimit = 200; break;
		 	case 5: timeLimit = 100; break;
		 	case 6: timeLimit = 60; break;
		 	default: timeLimit = 0;
		 }
	}

	function calculateTime(){
		var second = minute = hour = "0";

		setTimeLimit();

		if(level>=3){
			
			 setIntervalid = setInterval(function(){
				timeLimit --;
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
				if(timeLimit<=0){
					timeLimit = 0;
					GameOver();
					clearInterval(setIntervalid);
					return false;
				}		
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
		}else{
			$wrap.addClass("level-n");
			$helper.show();
			$helper.addClass("develop-visible").addClass("developing");
		} 
		timeLimit = 0;
	}


	function exchangeSkin (skin) {
		
	}

	// $(".tile").on("touchstart",function(){
	// 	$tile_move.css({
	// 		"background-position":$(this).attr("background-position")
	// 	});
	// });
	// $tile_container.on("touchmove",function(){

	// });
	// $(".tile").on("touchend",function(){
	// 	$tile_move.css({//animate
	// 		"top":$(this).attr("top"),
	// 		"left":$(this).attr("left")
	// 	});
	// });

});

// setTime();
function setTime(){
	var second = null,minute = null ,hour = null;
	setInterval(function(){
		var myDate = new Date();
		second = myDate.getSeconds();
		hour = myDate.getHours();       //获取当前小时数(0-23)
		minute = myDate.getMinutes();     //获取当前分钟数(0-59)
		
		// $(".time .hour").html(hour);
		$(".time").html(minute+":"+second);
		
	},1000/60);
}


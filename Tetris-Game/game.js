$(function(){
 
	var squareW = 30+2,
		row_number = 18,
		col_number = 14,
		centerX = Math.floor(col_number*0.5)-1 ,//(col_number-1)*squareW*0.5
		colornumber = Math.floor(Math.random()*6+0),
		newArrayMove = false,
		newArrayLength = 4,
		newArray =[],//新出现的方格数组
 		fixedArray =[],//已经固定的方格
		game_container = $(".game-container"),
		game_td =$(".game-container td");


	Init();

	function Init(){
		drawbgline();
		initFixedArray();
		initNewArray(newArrayLength,0);
		Event();
		Timer();
		
		
	}

	function initNewArray(newArrayLength,gameIndex){
		game_td = $(".game-container td");		
		var randomArray =[ //7 
			[ [0,0],[1,0],[-1,0],[2,0] ],
			[ [0,0],[1,0],[-1,0],[1,1] ],
			[ [0,0],[1,0],[-1,0],[-1,1] ],
			[ [0,0],[1,0],[-1,0],[0,1] ],
			[ [0,0],[1,0],[0,1],[2,0] ],
			[ [0,0],[0,1],[-1,1],[1,0] ],
			[ [0,0],[2,1],[1,1],[1,0] ]
		];
		//color
		colornumber = (colornumber+1)%6;
		if(colornumber==0){
			colornumber =6;
		}
		//attr
		var attrN = Math.floor(Math.random()*6);
		var tdindex
		game_td.not(".fixed").removeClass("color0,color1,color2,color3,color4,color5.color6");

		for (var i = 0; i < newArrayLength; i++) {
			newArray[i] ={
				X :centerX+randomArray[attrN][i][0],
				Y :randomArray[attrN][i][1],
				move : true
			}
			tdindex =newArray[i].X + newArray[i].Y*col_number;
			
			game_td.eq(tdindex).addClass("color"+colornumber);
		}	
		//position inner
		// newArray[0].X = randomArray[Math.random()*6]	

		
			 
	}

	function initFixedArray(){
		for (var i = 0; i < fixedArray.length; i++) {
			fixedArray[i] ={
				X : 0,
				Y : row_number-1
			}
		};
		
	}

	function getMaxY(Arrayname){
		var maxY = 0;
		if (Arrayname.length!=0) {
			for (var i = 0; i < Arrayname.length; i++) {
				if(i+1<Arrayname.length){
					maxY = Math.max(Arrayname[i].Y,Arrayname[i+1].Y);
				}
			}
		}else{
			maxY = row_number-1;
		}
		
		return maxY;
	}

	function testOverlap(){
		for (var i = 0; i < newArrayLength; i++) {
			for (var i = 0; i < fixedArray.length; i++) {
				if (newArray[i].X == fixedArray[i].X &&newArray[i].Y == fixedArray[i].Y ) {
					return false;
				}
			};
			
		};
		return true;
	}
	function autoDrop(){
		for (var i = newArrayLength-1; i >=0; i--) {			
			if (!newArray[i].move) {
				//postion back
				// debugger
				// for (var b = i-1; b < newArrayLength; b++) {
					// var b = i-1;
					// newArray[b].Y --;
					// game_td.eq(newArray[b].X + newArray[b].Y*col_number).addClass("color"+colornumber);
				// 	game_td.eq(newArray[b].X + (newArray[b].Y+1)*col_number).removeClass("color"+colornumber);
				// };
				
				// game_td.has(".color"+colornumber).addClass("fixed color0").removeClass("color"+colornumber);
				// fixedArray.push(newArray[0],newArray[1],newArray[2],newArray[3]);
				initNewArray(newArrayLength,0);
				// console.log("fixedArray.length :"+fixedArray.length);
			}else{
				game_td.eq(newArray[i].X + newArray[i].Y*col_number).removeClass("color"+colornumber);
				game_td.eq(newArray[i].X + (newArray[i].Y+1)*col_number).addClass("color"+colornumber);
				newArray[i].Y ++;
				if(getMaxY(newArray) >getMaxY(fixedArray)){
					newArray[i].move = false;
					var b = i-1;
					game_td.eq(newArray[b].X + newArray[b].Y*col_number).addClass("color"+colornumber);
					game_td.eq(newArray[b].X + (newArray[b].Y+1)*col_number).removeClass("color"+colornumber);
					newArray[b].Y --;
					
				}
			}
			
		}	
		
	}

	function Event(){

	}

	function drawbgline() {
		var tableStr = [];
		tableStr.push("<table class='bgline'>");
		for (var i = 0; i < row_number; i++) {
			tableStr.push("<tr>");
			for (var j = 0; j < col_number; j++) {
				tableStr.push("<td ></td>");					
			}
			tableStr.push("</tr>");
		}
		tableStr.push("</table>");
		game_container.append(tableStr.join(" "));
	}

	function Timer(){
		setInterval(function(){
			autoDrop();
		},1000);
	}
});
$(function(){
 
	var squareW = 35+2,
		row_number = 15,
		col_number = 12,
		centerX =(col_number-1)*squareW*0.5;
		newArrayLength = 4,
		newArray =[],//新出现的方格数组
 		fixedArray =[],//已经固定的方格
		game_container = $(".game-container");



	Init();

	function Init(){
		drawbgline();
		initNewArray;
		Event();
		Timer();
	}

	function initNewArray(i){
		//attr
		fixedArray[i] ={
			innerX :0,
			innerY :0,
			X :centerX,
			y :0
		}
		//color

		//position
	}

	function Event(){

	}

	function drawbgline() {
		var tableStr = [];
		tableStr.push("<table class='bgline'>");
		for (var i = 0; i < row_number; i++) {
			tableStr.push("<tr>");
			for (var j = 0; j < col_number; j++) {
				if(i%2==0){
					tableStr.push("<td class='color"+j+"'></td>");	
				}else{
					tableStr.push("<td ></td>");	
				}
			}
			tableStr.push("</tr>");
		}
		tableStr.push("</table>");
		game_container.append(tableStr.join(" "));
	}

	function Timer(){
		setInterval(function(){

		},1000);
	}
});
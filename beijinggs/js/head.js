$(function(){
	mainMenuEvent();
	$("#bj_main_container").css({"min-height":$(window).height()-$("#head").height()-$("#footer").height()});
});

$(window).resize(function(){
	//tab_container_height()
	$("#bj_main_container").css({"min-height":$(window).height()-$("#head").height()-$("#footer").height()});
});

// function  tab_container_height(){
// 	//$(".tab_container").height(window.screen.availHeight-$("#head").height()-89);	
// 	$(".tab_container").height($(window).height()-$("#head").height()-4);
//     //$("#rightMain_container").height($(window).height());	    

// }


function  mainMenuEvent(){
	$("#mainMenu ul li").click(function(){
		load_main_container($(this).index(),$(this).attr("data-src"),false);
	}).eq(0).trigger("click");
	
}

function load_main_container(index,src,isRefreshSrc){
		var  id=$("#mainMenu ul li").eq(index).attr("id");
		var  target=$("#"+id+"_container"); 
		$("#mainMenu ul li").eq(index).addClass("tabselected").siblings().removeClass("tabselected");
		if (target.length==0) {
		
		    var str="<div id='"+id+"_container' class='tab_container'><iframe width='100%' height='100%' frameborder='0' scrolling='auto' src="+src+"></iframe></div>";
			//var str="<div id='"+id+"_container' class='tab_container'></div>";
			//$("#bj_main_container").css({"min-height":$(window).height()-$("#head").height()-$("#footer").height()-20});
             var content_height = $(window).height()-$("#head").height()-$("#footer").height()-20;
			$("#bj_main_container").append(str);

			//$("#"+id+"_container").load(src);					
		}else{
			if (isRefreshSrc) {
				target.find("iframe").attr("src",src);
			};
		}
		
		$("#"+id+"_container").show().siblings().hide();
		// console.log(index,src)
}

function setIframeHeight(_height){	
	 var  id=$("#mainMenu ul li.tabselected").attr("id");
	 var  target=$("#"+id+"_container"); 	 	
	 	if (target.length>0) {
	 		target.height(_height);
	 	}

}

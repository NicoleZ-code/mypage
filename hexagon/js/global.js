function gotoMenu(index,src) {
	$(".dc-menu li").eq(index).addClass("active").siblings().removeClass("active");
    $.ajaxSetup({cache : false});
    if (src!="") {
      $("#mian-content").load(
          src,
          null,
          function(result, status, text){
          if (status == 'error') {
              $("#mian-content").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
          }
      });
    } else{
            $("#mian-content").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");

    };
}
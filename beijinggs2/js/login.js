$(function(){
	DragValidate($("#dragEle"),$(".tips"));
    $("#submit").click(function(){
        if(!$("#dragEle").attr("validate")){
            alert("请先拖动滑块验证！");
        }else{
            alert("验证成功！");
        }
    });
    $("input[name=login_type]").click(function(){
           var _this = $(this);/*当前li对象*/
           var _radio_val =_this.val();
           _this.parents('.form_detail').children(".login_detail").children().removeClass("on");
           _this.parents('.form_detail').children(".login_detail").children().removeClass("hide");
            _this.parents('.form_detail').children(".login_detail").children().addClass("hide");
           _this.parents('.form_detail').children(".login_detail").children().eq(_radio_val).addClass("on");
 });
});
 function DragValidate (dargEle,msgEle){
        var dragging = false;//滑块拖动标识
        var iX;
        dargEle.mousedown(function(e) {
            msgEle.text("");
            dragging = true;
            iX = e.clientX; //获取初始坐标

        });
        $(document).mousemove(function(e) {

            if (dragging) {
                
                var e = e || window.event;
                var oX = e.clientX - iX;
                if(oX < 30){
                    return false;
                };
                if(oX >= 250){//容器宽度+10
                	
                    oX = 258;
                    dargEle.width(oX + "px");
                  
                    
                    return true;
                };
                
               dargEle.width(oX + "px");
               // var _width = dargEle.width();
                // console.log("_width2"+_width);
                return false;
            };
        });
        $(document).mouseup(function(e) {
            var width = dargEle.width();
            
            if(width < 258){
                //console.log(width);
                dargEle.width("45px");
                msgEle.text("请按住滑块，拖到最右边");
            }else{
                dargEle.attr("validate","true").text("验证成功！").unbind("mousedown");
            };
            dragging = false;
        });
    };
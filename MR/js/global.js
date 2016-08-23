 $(function(){
    menuEvent(0);//初始化
    setHeight();
 });
$(window).resize(function(){
    setHeight();
});

function setHeight(){
    var min_h =$(window).height()-$("head").height()-$("footer").height()-30;
        //min_h = Math.max(min_h,720);
    //$("#container").css({"min-height":min_h});
}
/*
* 头部主菜单切换
*/
function menuEvent(init_index){
    $("#menu-primary").on("click","li a",function(event){

        event.preventDefault();
        var index =$(this).parent().index(); 
        load_main_container(index,$(this).attr("href"));
    });
    $("#menu-primary li").eq(init_index).trigger("click");
}

function load_main_container(index,src){
    $("#menu-primary li").eq(index).addClass("tabselected").siblings().removeClass("tabselected");
    $.ajaxSetup({cache : false});
    $("#container").empty().load(
        src,
        null,
        function(result, status, text){
        if (status == 'error') {
            // $("#container").load("/error/404.jsp");
            $("#container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
        }
    });
}

/*
 *  tabs 选项卡切换功能
 *  @param {string} tabsId       //本选项卡的总的Id
 *  @param {string} menuItem     // 选项卡菜单元素
 *  @param {string} contentItem   //内容 元素
 *  @param {string} eventType : "click" or "mouseenter"
 *  @param {function}callbackfn  回调函数  选项卡切换后执行的函数
*/
 $.fn.tabs = function tabs_init(setting){
    var $tabs= $(setting.tabsId);
    var $menuItem =$tabs.find(setting.menuItem);
    var $contentItem =$tabs.find(setting.contentItem);
    var eventType = setting.eventType;

    $menuItem.on(eventType,function(){
         $(this).addClass("active").siblings().removeClass("active");
         $contentItem.eq($(this).index()).show().siblings().hide();

         if(setting.callbackfn!=null){
            setting.callbackfn($(this).index());
         }
    }).eq(0).trigger(eventType);
    $menuItem.eq(0).addClass("active").siblings().removeClass("active");
    $contentItem.eq(0).show().siblings().hide();
 }







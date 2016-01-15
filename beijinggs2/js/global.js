 $(function(){
    menuEvent(0);//初始化
    setHeight();
 });
$(window).resize(function(){
    setHeight();
});

function setHeight(){
    var min_h =$(window).height()-$("#head").height()-$("#footer").height();
        min_h =Math.max(min_h,720);
    $("#bj_main_container").css({"min-height":min_h});
}
/*
* 头部主菜单切换
*/
function menuEvent(init_index){
    $("#mainMenu").on("click","li",function(){
        var index =$(this).index(); 
        if(index<=4){
            $("#bj_main_container").removeClass("notaxCalendar");
        }else{
            $("#bj_main_container").addClass("notaxCalendar");
        }
        load_main_container(index,$(this).attr("data-src"));
    });
    $("#mainMenu ul li").eq(init_index).trigger("click");
}

function load_main_container(index,src){
    $("#mainMenu li").eq(index).addClass("tabselected").siblings().removeClass("tabselected");
    $.ajaxSetup({cache : false});
    $("#left_common_container").empty().load(
        src,
        null,
        function(result, status, text){
        if (status == 'error') {
            // $("#bj_main_container").load("/error/404.jsp");
            $("#left_common_container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
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
 function tabs_init(setting){
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

 /*
    单击打开日历详情
 */
 function openCalDetail(){
    $("body").append("<div class='layerCal'style='width:760px;height:550px;overflow:auto;'></div>");
    $.ajaxSetup({cache : false});
    $(".layerCal").load("calendardetail.html");
    $.layer({
        type: 1,
        area:['780px','550px'],
        bgcolor: "#fff", //设置层背景色,
        title:false,
        shade:[0.5,"#000"],
        border:[0],
        shadeCLose:true,
        page: {
            dom:$('.layerCal')//捕获的元素
        },
        end: function(){
            $('.layerCal').remove();
        }
    });
 }





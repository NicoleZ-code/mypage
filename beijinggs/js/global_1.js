$(function(){
  /* tab功能*/
  $.fn.tabs = function (options) {
    var settings = {
    tabList: "",
    tabContent: "",
    tabOn:"",
    action: ""
    };
    var _this = $(this);
    if (options) $.extend(settings, options);
    _this.find(settings.tabContent).eq(0).show().siblings().hide(); 
    _this.find(settings.tabList).eq(0).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
    if (settings.action == "mouseover") {
         _this.find(settings.tabList).each(function (i) {
             $(this).mouseover(function () {
             $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
             var _tCon = _this.find(settings.tabContent).eq(i);
            _tCon.show().siblings().hide();
         }); //滑过切换
      });
    }
    else if (settings.action == "click") {
        _this.find(settings.tabList).each(function (i) {
            $(this).click(function () {
                $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
                var _tCon = _this.find(settings.tabContent).eq(i);
                _tCon.show().siblings().hide();
            }); 
        });
    };
  };
 /* tab功能end*/
 /*  图片轮播 */
 scollerImg();
 /*  图片轮播 end*/
 /*  发票查询背景切换 */
  var $tab = $("#tab_1 li");
  $tab.find("span").hide();
  $tab.eq(0).find("span").show();
  $tab.mouseover(function(){
  $(this).find("span").show();
  $(this).siblings().find("span").hide();

 })
 /*  发票查询背景切换 end*/
 
});


/*  图片轮播 */
function scollerImg(){
             var content_main =$(".select_content").width();
             var v_width =content_main*0.9;  //显示图片位置的路径是90%
             var single_li = $(".showimage").find("li").length;/*当前图片的个数*/
             var singleimg_width = 130*single_li;/*总的图片显示的宽度*/
             if( v_width>singleimg_width){//当前区域够显示所有图片
                  $(".next").hide();
                  $(".pre").hide();
             }else{
                  $(".next").show();
                  $(".pre").show();
             }
            var page = 1;
            var i = Math.ceil(v_width /130) -1;
            var len = $(".showimage").find("li").length;
            var page_content ;
            page_count= Math.ceil(len/i);
            var content_list = $(".showimage");
      $(".next").click(function(){
         /*当前图片显示区域的宽度 overflow：hidden*/ 
         if(!content_list.is(":animated") ){
             if(page==page_count){  
                 content_list.animate({ left : '0px'}, "slow"); 
                page = 1;  
             }else{  
                content_list.animate({ left : '-='+v_width }, "slow");  
                page++;  
             } 
         }
  
      });
         //往前 按钮  
    $(".pre").click(function(){ 
         if(!content_list.is(":animated") ){    
             if(page == 1 ){    
                content_list.animate({ left : '-='+v_width*(page_count-1) }, "slow");  
                page = page_count;  
            }else{  
                content_list.animate({ left : '+='+v_width }, "slow");  
                page--;  
            }  
        }  
    });
}
/*  图片轮播end */
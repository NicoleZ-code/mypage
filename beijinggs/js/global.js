/* + Author: zhuyh*/
$(function(){
    scrollimg();

    applist_Event();
    right_tabs_init("#right_tabs",".menu span",".tabscontent-item","mouseenter"); 

});
$(window).resize(function(){
    applist_Event();
});
    //设置父级Iframe height
// window.onload=function(){
//     setIframe_child();

// }


function setIframe_child(){
    $(".rightquery_content").height(window.screen.height-115-100);
    $(".leftqueryTree").height($(".rightquery_content").height()+20);
    //iframe 高度 
    //建议火狐或者ie打开，谷歌静态文件中不支持iframe跨域访问资源会报错，jsp发布后不会有这个问题
    window.top.setIframeHeight($("body").height());
}
/* 焦点幻灯 */
function showImg(index){
        var adHeight = $("#ad_banner").height();
		$(".slider").stop(true,false).animate({top : -adHeight*index},1000);
		$(".num li").removeClass("on").eq(index).addClass("on");
}

function scrollimg(){
    var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();
	 //滑入 停止动画，滑出开始动画.
	 $("#ad_banner").hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
	
}
//applist 

 /* 首页应用APP */

function applist_Event(){  
        var v_width =$('#applist_content').width();	        
        var len = $('#applist').find("li").length;   
        var img_item =$("#applist li"); 
        var appli_width =195;
        var item_width =appli_width+2*5; //min-width
        var page = 1;  
        var i = Math.ceil(v_width / item_width)-1; //每版放i个图片 
        $applist =$("#applist");
        $prevbtn =$("#prev");
        $nextbtn =$("#next");

        img_item.css({
        	"margin":"0px  "+(v_width/i-appli_width)*0.5+"px"
        	});
        item_width =appli_width+(v_width/i-appli_width);
        var d_width = Math.ceil(item_width * len);  //真实的总宽度
        $applist.width(d_width);
        
		 if(len < i){
			 $prevbtn.hide();
			 $nextbtn.hide();
		 }else{
			 $prevbtn.show();
			 $nextbtn.show();	 
		} 
    $nextbtn.click(function(){ 
    	var v_width=$('#applist_content').width();
         var page_count  ;   //只要不是整数，就往大的方向取最小的整数  
         if(i==2){
        	 page_count = Math.ceil(len / i)        	 
         }
         else{
        	 page_count = Math.ceil(len /(v_width / item_width)) 
         }
         if( !$applist.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
              if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。  
                $applist.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面  
                page = 1;  
              }else{  
                $applist.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面  
                page++;  
             }  
         }  
   });  
    $prevbtn.click(function(){
   		 var v_width=$('#applist_content').width();  
         var page_count=0  ;   //只要不是整数，就往大的方向取最小的整数  
         if(i==2){
        	 page_count = Math.ceil(len / i)        	 
         }
         else{
        	 page_count = Math.ceil(len /(v_width / item_width)) 
         }
         if(!$applist.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
             if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。  
                $applist.animate({ left : '-='+v_width*(page_count-1) }, "slow");  
                page = page_count;  
            }else{  
                $applist.animate({ left : '+='+v_width }, "slow");  
                page--;  
            }  
        }  
    }); 
 
}

//right_tabs
 function right_tabs_init(tabsId,menuItem,contentItem,EventType){
 	var $right_tabs =$(tabsId);
 	var menuli =$right_tabs.find(menuItem);
 	menuli.on(EventType,function(){
 		 $(this).addClass("active").siblings().removeClass("active");
 		 $right_tabs.find(contentItem).eq($(this).index()).show().siblings().hide();
         //右侧tab-menu 背景移动
        if($right_tabs.find(".menuactivebg").length>0){
            $right_tabs.find(".menuactivebg").css("left",($(this).index())*menuli.width());
        }
 	}).eq(0).trigger(EventType);
    
 }

 //btnNext btnPre  备忘录 上下翻页
function Memo_Event(target,btnPre,btnNext){
    var item_h = 31;
    var page =1;
    var len =$(target).find("li").length;
    var move_h =$("#memolistbox").height();
    $(target).height(len*31);
    if(len < 8){
         $(btnPre).hide();
         $nextbtn.hide();
     }else{
         $(btnPre).show();
         $(btnNext).show();    
    } 
    $(btnNext).click(function(){
         var page_count= Math.ceil(len / 7) ;
        if(!$(target).is(":animated") ){    
             if(page == 1 ){  
                $(target).animate({"margin-top" : '-='+move_h*(page_count-1) }, "slow");  
                page = page_count;  
            }else{  
                $(target).animate({"margin-top" : '+='+move_h }, "slow");  
                page--;  
            }  
        }  
    });
    $(btnPre).click(function(){
        var page_count= Math.ceil(len / 7) ;
        if(!$(target).is(":animated") ){    
             if(page == page_count ){  
                $(target).animate({"margin-top" : '0px'}, "slow");  
                page = 1;  
            }else{  
                $(target).animate({"margin-top" : '-='+move_h }, "slow");  
               page++;   
            }  
        }
    });
}


     
    
  


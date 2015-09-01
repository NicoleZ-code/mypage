/* Extended  UTCommonModule Begin*/
UT_CM.closeBtnClass = "opacity-ani"; //rotate-ani & opacity-ani
UT_CM.closed = false;
UT_CM.firstClose = true;
UT_CM.$ad_choices=$('#ad_choices');
UT_CM.fixAdChoices();
UT_CM.updateUI();



var ua = window.navigator.userAgent.toLowerCase(),
isMobile = ('ontouchstart' in window),
isFirefox =  ua.match(/firefox/gi) !== null,
tapDown = isMobile? 'touchstart': 'mouseenter',
tapUp = isMobile? 'touchend': 'mouseleave',
tap = isMobile? 'touchend': 'click';
var videoFlag = true;
var item=$(".item"),
    cta=$(".cta"),
    intro1=$(".intro1"),
    intro2=$(".intro2"),
    intro3=$(".intro3");
    prod1=$(".prod1"),
    prod2=$(".prod2"),
    prod3=$(".prod3"),
    video_button=$("#videoButton"),
    bottom=$(".bottom");



var utOpened=false;
var imageLoaded=false;
var openAnimationed=false;
var openedProd=-1;


UT_CM.openAnimation = function() {

    if(openAnimationed) return;
    //alert('openAnimation')
    openAnimationed=true;
    //undertone.creative.trackEvent("event", "id");
    utOpened=true;
    playAnimation();
    
    
};

setTimeout(UT_CM.openAnimation,2000);

function onImageLoaded()
{
    trace('onImageLoaded')
    imageLoaded=true;
    TweenMax.set(bottom,{
       y:$(".bottom").height()+50
    });
    TweenMax.set([video_button,prod1,prod2,prod3],{
       autoAlpha:0
    });
    playAnimation();
    TweenMax.set('#videoButton',{x: -10000});
}


var introAnimationEnd=false;
function playAnimation()
{
    trace('playAnimation',imageLoaded,utOpened)
    if(!(imageLoaded&&utOpened)) return;
    customResize();
   
     var o={a:0};

    TweenMax.to('.bg2',.5,{autoAlpha:1,delay:8});
   if(platform.isIE8||platform.isIE9||platform.isAndroid){
         $('.bg1').css('opacity','0');
         $('.bg1').css('visibility','visible');
         $('.bg1').css('display','block');
         $('.pg').css('display','none');
        TweenMax.to('.bg1',.5,{autoAlpha:1,delay:1});
        setTimeout(function(){
            $('.bg2').css('opacity','0');
            $('.bg2').css('display','block');
        }, 300)
           
    }
    else{


        

        TweenMax.to(o,2,{a:-90,delay:.4,onUpdate:rotatePG,ease:Cubic.easeIn});
        setTimeout(function(){
                   $('.bg2').css('opacity','0');
                   $('.bg1').css('visibility','visible');
                   $('.bg1,.bg2').css('display','block');
               }, 500)

    }
     
    animations['rabbit'].play(0);
    $('#shadow').css('visibility','visible');
    TweenMax.fromTo('#shadow',.6,{css:{left:'0%'}},{left:'50%',overwrite:false,ease:Quad.easeIn});
    TweenMax.to('#shadow',.6,{left:'100%',overwrite:false,delay:.9,ease:Quad.easeOut});

    TweenMax.fromTo('#shadow img',.6,{scale:0.3,opacity:0},{opacity:1,scale:1,overwrite:false,ease:Quad.easeIn});
    TweenMax.to('#shadow img',.6,{scale:0.3,opacity:0,overwrite:false,delay:.9,ease:Quad.easeOut});


    TweenMax.fromTo('.rabbit',.6,{css:{bottom:'100%'}},{bottom:'0%',overwrite:false,ease:Quad.easeIn});
    TweenMax.fromTo('.rabbit',.6,{css:{left:'0%'}},{left:'50%',overwrite:false,ease:Quad.easeIn});

    TweenMax.to('.rabbit',.6,{bottom:'100%',overwrite:false,delay:.9,ease:Quad.easeOut});
    TweenMax.to('.rabbit',.6,{left:'100%',overwrite:false,delay:.9,ease:Quad.easeOut});

    
    TweenMax.delayedCall(2,animations['main'].play,[0]);
    //   animations['main'].addCallBack(8.8,function(){animations['kangarooSlide'].play(0);})
   
    animations['main'].addCallBack(8.8,function(){introAnimationEnd=true;UT_CM.resizeAd();animations['kangarooSlide'].play(0);});
    animations['main'].addCallBack(9.3,secondAnimation);
   // TweenMax.delayedCall(12,animations['kangarooSlide'].play,[0]);

    function rotatePG(){
      $('.pg').css('transform','rotateX('+(o.a>>0)+'deg)');
      $('.pg').css('-webkit-transform','rotateX('+(o.a>>0)+'deg)');
      if(o.a<-89)  $('.pg').remove();
    }

    //TweenMax.to($('.pg'),.2,{autoAlpha:0,delay:1.8});

    $('.bg').css('visibility','visible');
        var height=$window.height()
       if(height>0)
       {
            $('.pg').css('height',2*height);
            $('.rotationHolder').css('height',2*height);
       }

}
function secondAnimation(){

    TweenMax.to(bottom,.4,{
        autoAlpha:1,
        y:0
    });
    TweenMax.to(video_button,.3,{
       autoAlpha:1,
       delay:0
    });
    TweenMax.to(prod1,.3,{
       autoAlpha:1,
       delay:.5
    });
    TweenMax.to(prod2,.3,{
       autoAlpha:1,
       delay:.6
    });
    TweenMax.to(prod3,.3,{
       autoAlpha:1,
       delay:.7
    });

}




UT_CM.resizeAd = function(width, height) {
width=$window.width();
height=$window.height();
trace(width,height);
if(width*height==0) return;
//alert(platform.isiPad+' '+platform.isIOS5+' '+(width==1024)+' '+(platform.isiPad&&platform.isIOS5&&(width==1024)));
    setInfrosPostion();

if(platform.isMobile)
{
  if(width>height) vp&&vp.pause();  

  $("#ut_close").append("<img src='img/btnClosevideo.png' alt=''/>");

}else{
  $("#ut_close").append("<img src='img/btnClose.png' alt=''/>");

}

if(platform.isiPad&&platform.isIOS5&&(width==1024))
{
    height=644;
    //alert('force..');
}
    $('.video_box').each(function(){

     //   if(width<height)
        var videoWidth=width*.8;
        var videoHeight=height*.8;
        if(videoWidth*9/16 >videoHeight) 
        {
            videoWidth=videoHeight*16/9;
        } else{
           videoHeight=videoWidth*9/16 
        }

        videoWidth=Math.round(videoWidth/16)*16;
        videoHeight=Math.round(videoWidth/16)*9;
        $(this).css('width',videoWidth);
        $(this).css('height',videoHeight);

        $(this).css('top',(height-videoHeight)/2>>0);
        $(this).css('left',(width-videoWidth)/2>>0);
        if(!platform.isMobile){
            $(".utvp_progress_bar").css('width',(videoWidth*.9-97)+'px!important');
            $(".utvp_volume_btn").css('right',(videoWidth*.1+24)+'px!important');
        }

        
        
    })

     if(platform.isS3)
     {
        if(width>360)
        {
            $body.addClass('fixS3')
        } else
        {
            $body.removeClass('fixS3')
        }
     }
    resizeEventHandler(width, height);


     for(var i in animations)
      {
        if(animations[i].resize)animations[i].resize(width,height);
      }



    if(imageWidth==0 && width>0)
    {
        
        imageWidth=width;
    }

    $('.pg').css('height',2*height);
    $('.rotationHolder').css('height',2*height);
    if($('.pg-img').length>0)$('.pg-img').css('left',(width-imageWidth)/2);

    $('.fit_all').each(function()
    {
        var $this = $(this);
        var img=$this.find('img')[0];
        if(img.width==0) return;
        if(platform.isMobile)
        {
            TweenMax.set($this,{x:(width-360)/2,y:height-620});
            return;
        }
        var scale=width/img.width;
        if(scale<height/img.height) scale=height/img.height;
        scale=(scale*1000)/1000;
        TweenMax.set($this,{x:-(img.width*scale-width)/2,y:-(img.height*scale-height)/2, scaleX:scale,scaleY:scale});
    })

    $('.rabbit').each(function()
    {
        var $this = $(this);
        var scale=height/1000;
        if(width/1200<scale) scale=width/1200;
        if(scale<.5) scale=.5;
        if(scale>1) scale=1;
        TweenMax.set($this,{scaleX:scale,scaleY:scale});
        TweenMax.set($('#shadow'),{scaleX:scale,scaleY:scale});
    })

    if(platform.isDesktop&&(height<500)) height=height-$('.bottom').height()/2;
    if(introAnimationEnd)
    {
         $('.main').each(function()
        {
            var $this = $(this);
            var img=$this.find('img');
           
            var animationHeight=1100;
            var animationWidth=1200;
            var scale=10;



            TweenMax.set('.kangarooSlide',{y:0,x:0,scaleX:1,scaleY:1});

            if(width>1.8*height){
                trace('1.8')
                scale=height/animationHeight;
                TweenMax.set($this,{x: width/2-height/3,y:0,scaleX:scale,scaleY:scale});



                var videoWidth=width*.35;
                var videoHeight=height*.4;
                if(videoWidth*9/16 >videoHeight) 
                {
                    videoWidth=videoHeight*16/9;
                } else{
                   videoHeight=videoWidth*9/16 
                }

                TweenMax.set('#videoButton',{x: width*.61,y:(height-videoHeight)*.4,width:videoWidth,height:videoHeight});

            }else if(width>1.2*height){
                var offsetY=0;
                offsetY=(-width/2.2+height)*.7;
                height=width/2.2;
              //  trace('heightheightheightheight',height,offsetY)
                if(scale>height/animationHeight) scale=height/animationHeight;
                TweenMax.set($this,{ y:offsetY,x: width/2-height/3 ,scaleX:scale,scaleY:scale});
                TweenMax.set('#videoButton',{x: width*.61,y:offsetY+(height-width*.35*0.5625)*.4,width:width*.35,height:width*.35*0.5625});

            }
            else if(width>height){
                TweenMax.set('.kangarooSlide',{scaleX:1.3,scaleY:1.3});
                scale=.8*width/animationWidth;
                TweenMax.set($this,{x: width/2,y:20+((height-scale*2000)>0?(height-scale*2000):0),scaleX:scale,scaleY:scale});
                TweenMax.set('#videoButton',{x: width*.55,y:height*.8-width*.4*0.5625,width:width*.4,height:width*.4*0.5625});
            }else
            {
                var r=height/width;
                 if(r>1.5) TweenMax.set('.kangarooSlide',{y:.2*width,x:.45*width,scaleX:1.5,scaleY:1.5});
                else TweenMax.set('.kangarooSlide',{x:.2*width,y:.05*height,scaleX:1.5,scaleY:1.5});

                scale=width/animationWidth;
                TweenMax.set($this,{x: width/2,y:((height-scale*2000)>0?(height-scale*2000):0)+20,scaleX:scale,scaleY:scale});

                TweenMax.set('#videoButton',{x: width*.55,y:height*.8-width*.4*0.5625,width:width*.4,height:width*.4*0.5625});
            }
        })
    }
    else {
        $('.main').each(function()
        {
            var $this = $(this);
            var img=$this.find('img');
           
            var animationHeight=1100;
            var animationWidth=1300;
            var scale=width/animationWidth;

           
            //trace(2*width,height,scale*2000);
            if(2*width<height) TweenMax.set($this,{y:(height-scale*2500)});
            else if(1.6*width<height) TweenMax.set($this,{y:(height-1.6*width)/2});
            else TweenMax.set($this,{y:0});


            
            if(scale>height/animationHeight) scale=height/animationHeight;
            TweenMax.set($this,{x:width/2,scaleX:scale,scaleY:scale});
        })
    }

      // video responsive
    //$('.video').css({'height':($('.video_box').width()*9/16) });
    //setTimeout(function(){alert(height);},3000);



};


/* Extended  UTCommonModule End*/
/* function define begin */

function customResize()
{
    if($window.width()*$window.height()>0)
     $window.trigger($.Event("resize", {
                }));
    else setTimeout(customResize,50);
}

function customResizeForIE8()
{
     customResize();
     $('.video div').off('click',customResizeForIE8);
}
var hoverid;
function reportHover(){
  undertone.creative.trackEvent("HOVER", "INFO_PROD"+hoverid);
}
function setInfrosPostion(){
    TweenMax.set(intro1,{
      x:(prod1.offset().left+prod1.width()*.5-intro1.width()*.5),
      y:bottom.offset().top-intro1.height()
    });
    TweenMax.set(intro2,{
      x:(prod2.offset().left+prod2.width()*.5-intro2.width()*.5),
      y:bottom.offset().top-intro2.height()
    });
    TweenMax.set(intro3,{
      x:(prod3.offset().left+prod3.width()*.5-intro3.width()*.5),
      y:bottom.offset().top-intro3.height()
    });
    console.log(intro1.height());
}
  

function initEvent() {

    

    for (var i = 0; i < events.length; i++) {
        //trace(i,events[i])
        if (!isNaN(events[i][1])) {

            $("body").append("<div data-utclickid='" + events[i][1] + "' id='" + events[i][0] + "'></div>");
        }
        var t = events[i].length;
        for (var j = 2; j < t; j++) {
            $(events[i][j]).find("*").data("c", i);
           

        }
    }


    
    if(platform.isIE8) $('.video div').on('click',customResizeForIE8);
   
    //video
    if(platform.isS4){
        setTimeout(function(){
            $('.utvp_controls').css('-webkit-transform', 'translate3d(0,0,0)');
        },100);
    }
     if(platform.isS4){
        $('video').on('pause', function(){
            $('.utvp_controls').css('-webkit-transform', 'translate3d(0,0,0)');
        });
        $('video').on('play', function(){
            $('.utvp_controls').css('-webkit-transform', 'translate3d(0,0,0)');
        });
     }

    

    

  
     //video open
     // alert(1);
     if(!platform.isiPhone)video_button.on("click",function(){
        
        if(platform.isiPad){
          TweenMax.set([intro1,intro2,intro3,prod1.find(".hover"),prod2.find(".hover"),prod3.find(".hover")],{autoAlpha:0});
      }
         openedProd=-1;

         if(video_button.length > 0 && $('body').hasClass('opened')){
          undertone.creative.trackEvent("CLICK", "OPENVIDEO");
             $('.icon-play-toggle').hide();
             $('.utvp_slate').css('opacity', '0');
            
             if(platform.isAndroid){
                 $(".video_bg, .utvp_player_frame, .utvp_cover, .utvp_controls,.utvp_play_toggle,.utvp_buffer_wrapper,.utvp_play_toggle_wrapper_insert, .utvp_play_toggle_wrapper, .utvp_slate, video").css("-webkit-transform", "translate3d(0,0,0)");
             }
             $('.video_bg').css('display', 'block').css('visibility', 'visible').css('opacity', '1');
          //   $('.video').height($('.video').width()*9/16).css('visibility', 'visible').css('opacity', '1');
             if(platform.isSafari){
                 setTimeout(function(){
                     $('.video_box').css('-webkit-transform', 'translate3d(0,0,0)');
                 }, 50);    
             }

             videoFlag = false;
             setTimeout(function(){
                 $('.icon-play-toggle').show();
                 $('.utvp_slate').css('opacity', '1');
             },100);

            
             if(platform.isDuos||platform.isS3||platform.isSMT210||platform.isS4){
                 setTimeout(function(){
                     $('.utvp_play_toggle_wrapper').trigger('click'); 
                 },100);
                 return false;
             }


             $('.utvp_play_toggle_wrapper').trigger('click'); 
             return false;
         }
     });

     //video close
      $(".video_close_btn").on('click',function (){
         undertone.creative.trackEvent("CLICK", "CLOSEVIDEO");
         vp.pause();
         if(platform.isIE8){
             $('.ie-video_bg').css('display', 'none');
         }
         else{
             $('video').get(0).currentTime = 0;
         }
         $('.video_bg').css('display', 'none');
         return false;
     });  
      item.on("mouseenter",function(){
          TweenLite.to($(this).find(".hover"), .4, {              
              autoAlpha: 1,
              scale:1,
              force3D:true
          });
          if($(this).attr("name")!=null){
              switch($(this).attr("name")){
                  case'prod1': 
                      TweenMax.set(intro1,{autoAlpha:1});
                      TweenMax.set(intro2,{autoAlpha:0});
                      TweenMax.set(intro3,{autoAlpha:0}); 
                                         
                 break;
                  case'prod2': 
                      TweenMax.set(intro1,{autoAlpha:0});
                      TweenMax.set(intro2,{autoAlpha:1});
                      TweenMax.set(intro3,{autoAlpha:0});            
                  break;
                  case'prod3': 
                      TweenMax.set(intro1,{autoAlpha:0});
                      TweenMax.set(intro2,{autoAlpha:0});
                      TweenMax.set(intro3,{autoAlpha:1});
                  break;
              }
          }

      });
     
      if (platform.isiPad) {
        item.on("click",function(){
            var $this=$(this);
          var num=$(this).attr("name");
          undertone.creative.trackEvent("CLICK", "PROD"+num);
          
          var mopenedProd=openedProd;
          setTimeout(function(){
            
                if(mopenedProd!=num){ 
                   TweenMax.set($this.find(".hover"),{autoAlpha:1});
                    TweenMax.set($(".intro"+num+""),{
                      autoAlpha:1,
                      x:($this.offset().left+$this.width()*.5-$(".intro"+num+"").width()*.5),
                      y:bottom.offset().top-$(".intro"+num+"").height()
                    });
                    openedProd=num; 
                }else{
                   
                  TweenMax.set($this.find(".hover"),{autoAlpha:0});
                  TweenMax.set($(".intro"+num+""),{autoAlpha:0});
                   openedProd=-1;
                }


          }, 0)

        });
      }else{
        item.on("mouseenter",function(){
            TweenLite.to($(this).find(".hover"), .4, {              
                autoAlpha: 1,
                scale:1,
                force3D:true
            });
            setInfrosPostion();
            TweenMax.killTweensOf(reportHover);
            TweenMax.delayedCall(.5,reportHover);  
            if($(this).attr("name")!=null){
                switch($(this).attr("name")){
                    case'1': 
                        TweenMax.set(intro1,{autoAlpha:1});
                        TweenMax.set(intro2,{autoAlpha:0});
                        TweenMax.set(intro3,{autoAlpha:0}); 
                         hoverid=1;                   
                   break;
                    case'2': 
                        TweenMax.set(intro1,{autoAlpha:0});
                        TweenMax.set(intro2,{autoAlpha:1});
                        TweenMax.set(intro3,{autoAlpha:0});    
                        hoverid=2;        
                    break;
                    case'3': 
                        TweenMax.set(intro1,{autoAlpha:0});
                        TweenMax.set(intro2,{autoAlpha:0});
                        TweenMax.set(intro3,{autoAlpha:1});
                        hoverid=3; 
                    break;
                }
            }

        });
        item.on("mouseleave",function(){
            TweenLite.to($(this).find(".hover"), .4, {              
                autoAlpha: 0,
                force3D:true
            });

            if($(this).attr("name")!=null){
                switch($(this).attr("name")){
                    case'1': TweenMax.set(intro1,{autoAlpha:0});                                                                 
                    break;
                    case'2': TweenMax.set(intro2,{autoAlpha:0});                              
                    break;
                    case'3': TweenMax.set(intro3,{autoAlpha:0});                             
                    break;
                }
            }
        });
      }


     if(platform.isMobile){
        return false;
     }else{
        cta.on("mouseenter",function(){
          // undertone.creative.trackEvent("HOVER", "CTA");
           TweenLite.to($(this).find(".hover"), .4, {              
               autoAlpha: 1
           });
         });
        cta.on("mouseleave",function(){          
           TweenLite.to($(this).find(".hover"), .4, {              
               autoAlpha: 0
           });
        });
        video_button.on("mouseenter",function(){
             TweenLite.set($(this).find(".hover"),{              
               autoAlpha: 1
           });
         });
        video_button.on("mouseleave",function(){
             TweenLite.set($(this).find(".hover"),{              
               autoAlpha: 0
           });
         });

     }


    $(".container").on("click", function(e) {
        if(platform.isiPad){
          TweenMax.set([intro1,intro2,intro3,prod1.find(".hover"),prod2.find(".hover"),prod3.find(".hover")],{autoAlpha:0});
      }
openedProd=-1;
      
        var $target = $(e.target);

        //video

        if($target.attr('class') == 'interactive')return false;
        if($target.attr('class') == 'fix_team'){
            $('#EXPANDED_LOGO1_EXIT').trigger('click');
            return false;
        }
        if($target.attr('class') == 'fix_lbword'){  
            $('#COLLAPSED_LOGO2_EXIT').trigger('click');
            return false;
        }

        if(('video_bg' + 'video_box').indexOf($target.attr('class')) > -1){
            if(vp.paused()){
                $('.utvp_cover').trigger('click');
                $('.utvp_cover').trigger('click');
                return false;
            }
            $('.utvp_cover').trigger('click');
            return false;
        }
        if ($target.parents("#videoButton,#video_container,#ut_close,#ut_open").length > 0 || e.target.id == "ut_open"|| e.target.id == "ut_close"||e.target.id == "ad_choices") {
            
            return;
        }
        if ($target.parents("#video_container,#ut_close,#ut_open,#clickCover").length > 0 || e.target.id =='clickCover'||e.target.id == "ut_open"|| e.target.id == "ut_close"||e.target.id == "ad_choices") {
            
            return;
        }


        var c = $target.data("c");
         if(c) {
            if (!isNaN(events[c][1])) {
              // console.log(events[c][0]);
              undertone.creative.trackEvent("clickTag."+events[c][1], events[c][0]);
              undertone.creative.trackEvent('REDIRECT', events[c][0]);
            }
            else if (events[c][1] == 'expand') $("#ut_open").trigger('click');
            else if (events[c][1] == 'close') $("#ut_close").trigger('click');
            return false;
        }
       
        undertone.creative.trackEvent("clickTag.1", "BACKGROUND_EXIT");
        undertone.creative.trackEvent("REDIRECT", "BACKGROUND_EXIT");

        return false;
    });
};






var $window = $(window),
    IAData,
    LBData,
    IA,
    LB,
    bannerWidth,
    bannerHeight,
    svgs={},
    seqs={},
    imageInfos,
    eases,
    videoPlaceHolderName,
    videoContainer,
    vp,
    animations={},
    animationData={},
    imageWidth,
    fps = 10;
  

function resizeEventHandler(width, height) {
    UT_CM.closed?LB&&LB.resize(width,height):IA&&IA.resize(width,height);
}



function initVideo() {
    var config = {
        skin: "css/custom.css",
        aspectRatio: "16:9",
        source_webm: "video/video.webm",
        source_mp4: "video/video.mp4",
        slate: "video/videobg.jpg",
        endSlate: "video/videobg.jpg",
        displayHidden: false,
        muted: false,
        preload: 'none',
        trackingID:'VIDEO'
    };


    if(platform.isMobile){
        config.source_webm = "video/video_480.webm";
        config.source_mp4 = "video/video_480.mp4";
    }
    videoContainer = $('#video_container');
    // videoContainer.parent().addClass('forceCSS');
    if(vp) vp.close();
    if($('#video_container').data("ut_videoplayer")) $('#video_container').data("ut_videoplayer").videoPlayer._instances["video_container"].params.clickID = config.clickID;
    vp = videoContainer.ut_videoplayer(config);

        playVideoCounter=0;
        vp.pause();
    $('.utvp_video').bind("ended", function () {
        $('html').hide().addClass('videoComplete').show();
        $('.utvp_slate').css("-webkit-transform", "translate3d(0,0,0)");
    }); 
    $('.utvp_video').bind("play", function () {
        $('html').removeClass('videoComplete');
    }); 

   
    

}
var imageCount=0;
function initTimeLine() {

    if(platform.isMobile)
    {
        $('.intros,.prod3,.prod2,.prod1').remove();
    }

     if(platform.isiPhone){
         $('.video_bg').remove();
         $('#videoButton').empty();
         $('#videoButton').append('<div id="video_container" ></div>')
     }


    initVideo();
    $('.content').append('<div id="shadow" ><img  src="img/shadow2.png"></img></div>');
    $('#shadow').css('visibility','hidden');
    $('.mainl0').removeClass('preload').append($('.kangarooSlide'));
    
     $TL.init(layerNames,imageInfos,eases,seqs,svgs);
     imageCount=$TL.imageCount();

  $(".preload2").each(function() {
        var $this = $(this);
        var source = $this.data("source");
        if(platform.isMobile) 
        {
            if(source=='img/bg1.jpg') source='img/bg1_mobile.jpg';
            if(source=='img/bg2.jpg') source='img/bg2_mobile.jpg';
        }
        imageCount+=1;
        $this.append("<img src='" + source + "'  alt=''>");
    });
  var loadedCount=0;
    $('.preload img,.preload2 img').on('load',function(){
        loadedCount++;
        trace(loadedCount,imageCount,this.src )
       if(loadedCount==imageCount) onImageLoaded();
      
    })


  //   alert($TL.imageCount());
      animations['main']=$TL.createTimeline(animationData['main'],$('.main'),0,true);
      animations['kangarooSlide']=$TL.createTimeline(animationData['kangarooSlide'],$('.kangarooSlide'),0,true);
      animations['rabbit']=$TL.createTimeline(animationData['rabbit'],$('.rabbit'),0,true);


    

    initEvent();
        UT_CM.updateUI();
    
      animations['main'].pause(0);
      animations['kangarooSlide'].pause(0);
      animations['rabbit'].pause(0);
    //
}
 


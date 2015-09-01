// store references to DOM elements to save on subsequent traversals
var $window = $(window),
    $html = $("html"),
    $body = $('body'),
    $pg = $('.pg'),
    $closeButton = $('#ut_close'),
    $openButton = $('#ut_open'),
    $leavebehind = $('.leavebehind'),
    $interactive = $('.interactive'),
    isClick = false,
    // parentWindow = window.parent.window.parent.window;
    // isPortrait = Math.abs(parentWindow.orientation) != 90 ? true : false,
    mobileWidth = 0;

// window.platform.isMobile=true;

/* event begin */
window.startAd = function(data,pg,scrollTop) {

    if(!(platform.isIE9||platform.isAndroid))
    {
         var pgImage = $('<img class="pg-img" src="'
              + pg + '" style="margin-top: -'
              +scrollTop+ 'px" />');
       $pg.append(pgImage);
    }
  
    
    if (!UT_CM.isAutoOpened) {
        UT_CM.isAutoOpened = true;
        $closeButton.css("visibility","visible");
        $body.removeClass('closed').addClass('opened');
        $body.addClass('animating');
        if(UT_CM.openAnimation)UT_CM.openAnimation();
    }


};



$window.on("resize", function(e){
            if (e.custom) return;
            UT_CM.updateUI();
        });



window.closeAd = function() {
    if ($body.hasClass('opened')) {
        UT_CM.clickCloseBtn();
    } 
};

$openButton.on("touchend", function(e) {
     $body.addClass('opening');
});

$closeButton.on("touchend", function() {
    $body.addClass('closing');
});



$openButton.on("click", function(e) {
    
    if(isClick) return false;
    isClick = true;
    UT_CM.clickOpenBtn();
    // e.stoppropagation();
    // e.preventdefault();
    setTimeout(function(){
        isClick = false;
    },1000)
});

$closeButton.on("click", function() {
    
    if(isClick) return false;
    isClick = true;
    UT_CM.clickCloseBtn();
    // e.stoppropagation();
    // e.preventdefault();
    setTimeout(function(){
        isClick = false;
    },1000)
});







/* event end */

/*  UTCommonModule begin  */
var UT_CM = {};
UT_CM.isAutoOpened = false;
UT_CM.width = $window.width();
UT_CM.height = $window.height();

UT_CM.closeBtnClass = "rotate-ani";//rotate-ani & opacity-ani



UT_CM.clickOpenBtn = function(){

    if(platform.isDesktop) $body.addClass('opening');
    $body.removeClass('closed');
    TweenMax.delayedCall(platform.isIE11?1.2:.6,function(){$body.removeClass('opening').addClass('opened');});
    
    $openButton.removeClass(UT_CM.closeBtnClass);
    $closeButton.addClass(UT_CM.closeBtnClass);


    TweenMax.fromTo(UT_CM.$ad_choices, platform.ltIE9 ? 0 : 0.6, {
        autoAlpha: 0
    },{
        autoAlpha: 1, 
        delay: platform.ltIE9 ? 0 : 0.6
    });

    
    UT_CM.expandAd();
}

UT_CM.fixAdChoices = function(){
    //

    UT_CM.$ad_choices.css('background-color','rgba(255, 255, 255, 0.99) !important');
    UT_CM.$ad_choices.appendTo($('.wrapper-1280'));
}



UT_CM.clickCloseBtn = function(){
 
    return;
    if(platform.isDesktop) $body.addClass('closing');
    $body.removeClass('opened');
    TweenMax.delayedCall(.6,function(){$body.removeClass('closing').addClass('closed');});


     TweenMax.fromTo(UT_CM.$ad_choices, platform.ltIE9 ? 0 : 0.3, {
        autoAlpha: 1
    },{
        autoAlpha: 0,
        onComplete: function(){

        }
    });

    TweenMax.fromTo(UT_CM.$ad_choices, platform.ltIE9 ? 0 : 0.2, {
        autoAlpha: 0
    },{
        autoAlpha: 1,
        delay: 1.2
    });


    $closeButton.removeClass(UT_CM.closeBtnClass);
    $openButton.addClass(UT_CM.closeBtnClass);
    
   
   // UT_CM.collapseAd();
}

UT_CM.updateUI = function(){
    UT_CM.width = $window.width();
    UT_CM.height =$window.height();

    if(typeof UT_CM.resizeAd == "function"){
        UT_CM.resizeAd(UT_CM.width, UT_CM.height);
    }
}

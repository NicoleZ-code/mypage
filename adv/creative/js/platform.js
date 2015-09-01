(function(){
    var ua = window.navigator.userAgent.toLowerCase();
    window.platform = {
        isiPad: ua.match(/ipad/i) !== null,
        isIOS5: ua.indexOf('os 5_')>0,
        isiPhone: ua.match(/iphone/i) !== null,
        isAndroid: ua.match(/android/i) !== null,
        isAndroid23: ua.match(/android 2\.3/i) !== null,
        isAndroid404: ua.match(/android 4\.0\.4/i) !== null,
        isAndroid412: ua.match(/android 4\.1\.2/i) !== null,
        isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
        isNexus: ua.match(/nexus/i) !== null,
        isDuos: ua.match(/gt\-s7562/i) !== null,
        isS7562: ua.match(/gt\-s7562/i) !== null,
        isS3: ua.match(/gt\-i9300/i) !== null,
        isI9300: ua.match(/gt\-i9300/i) !== null,
        isIE: /(msie|trident)/i.test(navigator.userAgent), //window.navigator.appName.indexOf("Microsoft") !== -1,
        isIE8: ua.match(/msie 8/) !== null,
        isChrome: ua.match(/Chrome/gi) !== null,
        isFirefox: ua.match(/firefox/gi) !== null,
        isWebkit: ua.match(/webkit/gi) !== null,
        isGecko: ua.match(/gecko/gi) !== null,
        isOpera: ua.match(/opera/gi) !== null,
        ltIE9 : $("html").hasClass("lt-ie9"),
        isIE9 : $("html").hasClass("ie9"),
        isIE11: ua.match(/rv\:11\.0/gi) !== null,
        isSMT210: ua.match(/sm\-t210/i) !== null,
        isMobile: navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) && navigator.userAgent.match(/Mobile/i) !== null,
        hasTouch: ('ontouchstart' in window),
        supportsSvg: !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    };
  
    window.platform.isAndroidPad = platform.isAndroid && !platform.isMobile;
    window.platform.isTablet = platform.isiPad || platform.isAndroidPad;
    window.platform.isDesktop = !(platform.isMobile || platform.isTablet);
    window.platform.isIOS = platform.isiPad || platform.isiPhone;

     var $html = $("html");
$html.on('mousewheel',function(){trace('mousewheel')});
$html.on('wheel',function(){trace('wheel')});
$html.on('DOMMouseScroll',function(){trace('DOMMouseScroll')});


     if(platform.isDesktop) $html.addClass('desktop');
    if(platform.isMobile) $html.addClass('mobile');

    if(platform.isChrome) $html.addClass('chrome');
    if(platform.isFirefox) $html.addClass('firefox');

    if(platform.isAndroid) $html.addClass('android');
    if(platform.isIOS) $html.addClass('ios');
    if(platform.isIOS5) $html.addClass('ios5');
    if(platform.isIOS6) $html.addClass('ios6');
    if(platform.isIOS7) $html.addClass('ios7');

    if(platform.isNexus) $html.addClass('nexus');
    if(platform.isDuos) $html.addClass('duos'); 
    if(platform.isS3) $html.addClass('s3');
    if(platform.isS4) $html.addClass('s4');
    if(platform.isNote3) $html.addClass('note3');

    if(platform.isiPhone4) $html.addClass('iphone4');
    if(platform.isiPhone) $html.addClass('iphone');
    if(platform.isiPhone5) $html.addClass('iphone5');


    if(platform.isTablet) $html.addClass('tablet');
    if(platform.isiPad) $html.addClass('ipad');

    if(platform.hasTouch) $html.addClass('has-touch');
    if(!platform.hasTouch) $html.addClass('no-touch');

    if(platform.isIE) $html.addClass('ie');
    if(platform.isSMT210) $html.addClass('smt210');
    if(platform.isIE8) $html.addClass('ie8');
    if(platform.isIE11) $html.addClass('ie11');
    $html.addClass('blankClass');
    
        //alert($html.attr('class'));
    window.trace=function(){};
    function trace() {
    var s = '';
    for (var i = 0; i < arguments.length; i++) {
        s += ' ' + arguments[i];
    }
     console.log(s);
    }

    if(window.location.href.indexOf('192')>-1||window.location.href.indexOf('file:///')>-1)
    {
        window.trace=trace;

    }

   

    
})();


// function trace() {
//     var s = '';
//     for (var i = 0; i < arguments.length; i++) {
//         s += ' ' + arguments[i];
//     }
//  console.log(s);
// }

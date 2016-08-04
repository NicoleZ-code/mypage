require.config({
	baseUrl:'./',
	paths:{
		'jquery':'vendors/jquery/dist/jquery.min',
		'swiper':'vendors/Swiper-master/dist/js/swiper.min',
		'sweetalert':'vendors/sweetalert/lib/sweet-alert.min',
		'validator':'vendors/validator-js/validator.min',
		'modernizr':'vendors/modernizr/modernizr',
		'domReady':'vendors/requirejs-domready/domReady'
	},
	packages:[
		{name:'greensock',main:'',location:'vendors/greensock/src/minified'},
		{name:'extra',main:'',location:'vendors/extra'}
	]
});


require(['jquery',
		 'validator',
		 'extra/imgPreloading',
		 'modernizr',
		 'greensock/TweenMax.min',
		 'swiper',
		 'sweetalert',
		 'domReady!'],
   function($,validator,imgPreloading){
	
	var $window = $(window);
    var $body = $('body');
	var music_btn = $('.sound');
	var bgsound = $('#sound')[0];

	$window.on('beforeunload',function(){
        bgsound.pause();
    });

    music_btn.on('click', function(){
		if(bgsound.paused){
			music_btn.addClass('active');
			bgsound.play();
		}else{
			music_btn.removeClass('active');
			bgsound.pause();
		}
	});

	var mySwiper = new Swiper('#stage', {
		direction: 'horizontal',
		loop: false,
		onSlideChangeEnd: function(swiper){
			var pageindex = swiper.activeIndex;
			var currentslide = $(swiper.slides[pageindex]);
			var func = currentslide.data('function');

			if(!currentslide.hasClass('loaded') && func){
				currentslide.addClass('loaded');
				eval(func + '()');
			}

		}
	});

	function startAnimation(){
		TweenMax.fromTo('.img1_0', 0.6, {
			autoAlpha: 0,
			x: '-100%'
		},{
			autoAlpha: 1,
			x: '0%',
			ease: Back.easeOut
		});

		TweenMax.fromTo('.img1_1', 1.0, {
			autoAlpha: 0,
			x: '100%'
		},{
			autoAlpha: 1,
			x: '0%',
			ease: Bounce.easeOut,
			delay: 0.8
		});

		TweenMax.fromTo('.img1_2', 1.0, {
			autoAlpha: 0,
			rotation: '540deg',
			scale: 0
		},{
			autoAlpha: 1,
			rotation: '0deg',
			scale: 1,
			delay: 2.0
		});

		TweenMax.fromTo('.img1_3', 1.2, {
			autoAlpha: 0,
			scale: 1.2
		},{
			autoAlpha: 1,
			scale: 1,
			ease: Elastic.easeOut,
			delay: 3.4
		});
	}

	function sceneAnimation2(){

	}

	function sceneAnimation3(){

	}

	function sceneAnimation4(){

	}

	function sceneAnimation5(){

	}

	function sceneAnimation6(){

	}
	function sceneAnimation7(){

	}



    var $showshu = $('.shuzi');
	var $mycanvas = $('.showprogress');
	var $pp =$('.pp');

	loadPicture();

	function loadPicture(){
        imgPreloading.preload({
            onLoad: function(loadCount, totalCount, source){
                var value = parseInt(loadCount / totalCount * 100) + '%'
                $showshu.text(value);
                $pp.width(value);
                console.log(value, source);
            },
            onComplete: function(){
                TweenMax.to($mycanvas, .5, {
                    // autoAlpha: 0,
                    onComplete: function(){
                        $mycanvas.remove();
                        startAnimation();
                    }
                });
            },
            onError: function(){}
        });
    }

	
});

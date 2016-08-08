require.config({
	baseUrl:'./',
	paths:{
		'jquery':'vendors/jquery/jquery.min',
		'swiper':'vendors/Swiper-master/dist/js/swiper.min',
		'sweetalert':'vendors/sweetalert/lib/sweet-alert.min',
		'validator':'vendors/validator-js/validator.min',
		'modernizr':'vendors/modernizr/modernizr',
		'domReady':'vendors/requirejs-domready/domReady'
	},
	packages:[
		{name:'greensock',main:'',location:'vendors/greensock/'},
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
    var arrow_up = $('.arrow_up');

	$window.on('beforeunload',function(){
        bgsound.paused();
    });

    music_btn.on('click', function(){
		if(bgsound.paused){
			music_btn.addClass('active');
			bgsound.play();
		}else{
			music_btn.removeClass('active');
			bgsound.pause();
		}
	}).trigger("click");

	var mySwiper = new Swiper('#stage', {
		direction: 'horizontal',
		loop: false,
		prevButton:'.arrow_left',
		nextButton:'.arrow_right',
		onSlideChangeEnd: function(swiper){
			var pageindex = swiper.activeIndex;
			var currentslide = $(swiper.slides[pageindex]);
			var func = currentslide.data('function');

			if(!currentslide.hasClass('loaded')&&func){
				currentslide.addClass('loaded');				
				//killTweens(pageindex);
				eval(func + '()');
			}
			if(swiper.activeIndex == (swiper.slides.length - 1)){
				arrow_up.addClass('arrhide');
			}else{
				arrow_up.removeClass('arrhide');
			}
		}
	});

	function startAnimation(){
		
		TweenMax.fromTo('.img01_01', 1.5, {
			autoAlpha: 0
		},{
			autoAlpha: 1,
			ease: Back.easeOut
		});

		TweenMax.fromTo('.img01_02', 3, {
			scale: 0,
			autoAlpha: 0
		},{
			autoAlpha:1,
			scale: 1,
			ease: Bounce.easeOut,
			delay: 0.5
		});

		TweenMax.fromTo('.img01_03', 1.5, {
			scaleX: 0,
			autoAlpha: 0
		},{
			autoAlpha:1,
			scaleX: 1,
			delay: 1.5
		});

		TweenMax.fromTo('.img01_04', 1.5, {
			autoAlpha: 0,
			y: 20
		},{
			autoAlpha: 1,
			y: 0,
			ease: Elastic.easeOut,
			delay: 2.5
		});
	}

	function sceneAnimation2(){
		TweenMax.fromTo('.img02_0', 1.5, {
			autoAlpha: 0
		},{
			autoAlpha: 1,
			ease: Back.easeOut
		});

		TweenMax.fromTo('.img02_01', 1.5, {
			x: 100,
			autoAlpha: 0
		},{
			autoAlpha:1,
			x: 0,
			delay: 0.5
		});
		TweenMax.fromTo('.img02_04 ', 1.5, {
			autoAlpha: 0
		},{
			autoAlpha:1,
			delay: 1.5
		});
		TweenMax.fromTo('.img02_02', 1, {
			autoAlpha: 0
		},{
			autoAlpha:1,
			delay: 2.6
		});
		TweenMax.fromTo('.img02_03', 1.8, {
			scale: 0.1,
			autoAlpha: 0.2,
			x:-30,
			y:50,
		},{
			autoAlpha:1,
			scale: 1,
			x:0,
			y:0,
			delay: 1.5,
			onComplete:function(){
				TweenMax.fromTo('.img02_circlelight', 1.5, {
					autoAlpha: 0,
					scale:0
				},{
					scale:1,
					autoAlpha: 1,
					ease: Back.easeOut
				});
			}
		});
	}

	function sceneAnimation3(){
		TweenMax.fromTo('.img03_01', 1.5, {
			autoAlpha: 0
		},{
			autoAlpha: 1,
			ease: Back.easeOut
		});
		TweenMax.set('.img03_02,img03_draw', {autoAlpha: 1,delay:0});

		// TweenMax.fromTo('.img03_draw', 80, {
		// 	'background-position':'0 center'
		// },{
		// 	'background-position':-1000+'px center',
		// 	repeat:-1
		// });
		$('.img03_draw').animate
		TweenMax.fromTo('.img03_04', 1.8, {
			autoAlpha: 0,
			scale:0
		},{
			autoAlpha: 1,
			scale:1,
			ease: Back.easeOut,
			delay:0.8
		});
		TweenMax.fromTo('.img03_03', 1.5, {
			autoAlpha: 0,
			x:50
		},{
			x:0,
			autoAlpha: 1,
			ease: Back.easeOut,
			delay:2
		});
		TweenMax.fromTo('.img03_05', 2.5, {
			autoAlpha: 0,
			y:100
		},{
			autoAlpha: 1,
			y:0,
			ease: Back.easeOut,
			delay:2.5
		});

		TweenMax.fromTo('.img03_deer', 3.5, {
			autoAlpha: 0,
			rotation: '-40deg',
		},{
			autoAlpha: 1,
			rotation: '0deg',
			delay: 1.5,
			transformOrigin:"50% 100%"
		});
	}

	function sceneAnimation4(){
		TweenMax.fromTo('.img04_01', 1.5, {
			autoAlpha: 0,
			x:-100
		},{
			x:0,
			autoAlpha: 1,
			ease: Back.easeOut,
			delay:0
		});
		TweenMax.fromTo('.img04_05', 2.5, {
			autoAlpha: 0,
			y:100
		},{
			autoAlpha: 1,
			y:0,
			ease: Back.easeOut,
			delay:2.5
		});
		//TweenMax.set('.img04_02,img04_light', {autoAlpha: 1,delay:0});

		// TweenMax.fromTo('.img04_light', 5, {
		// 	'background-position':'0% center'
		// },{
		// 	'background-position':36+'% center'
		// });
		TweenMax.fromTo('.img04_03', 1.5, {
			autoAlpha: 0,
			rotation: '540deg',
		},{
			autoAlpha: 1,
			rotation: '0deg',
			ease: Back.easeOut,
			delay:1.5
		});
		TweenMax.fromTo('.img04_04', 1, {
			autoAlpha: 0,
			rotation: '-10deg',
			scale: 0,
		},{
			autoAlpha: 1,
			rotation: '0deg',
			scale:1,
			ease: Back.easeOut,
			delay:3
		});
	}

	function sceneAnimation5(){
		TweenMax.fromTo('.img05_01', 1.5, {
			autoAlpha: 0
		},{
			autoAlpha: 1,
			ease: Back.easeOut
		});
		TweenMax.fromTo('.img05_02', 1, {
			autoAlpha: 0,
			x:200
		},{
			x:0,
			autoAlpha:1,
			delay: 0.6,
			ease: Back.easeOut
		});
		TweenMax.fromTo('.img05_03', 1.8, {
			scale: 0.1,
			autoAlpha: 0.2,
			x:-30,
			y:50,
		},{
			autoAlpha:1,
			scale: 1,
			x:0,
			y:0,
			delay: 1.5
		});
		
	}

	function sceneAnimation6(){
		TweenMax.fromTo('.img06_01', 1, {
			scale: 0,
			autoAlpha: 0
		},{
			autoAlpha:1,
			scale: 1,
			ease: Bounce.easeOut,
			delay: 0
		});
		TweenMax.fromTo('.img06_02', 1.5, {
			autoAlpha: 0,
			rotation: '540deg',
			scale:2
		},{
			autoAlpha: 1,
			scale:0.8,
			rotation: '0deg',
			ease: Back.easeOut,
			delay:1,
			onComplete:function(){
				TweenMax.fromTo('.img06_02', 0.5, {
					scale: 0.8
				},{
					scale: 1,
					ease: Bounce.easeOut
				});
			}
		});
		TweenMax.fromTo('.img06_03', 1, {
			autoAlpha: 0
		},{
			autoAlpha:1,
			ease: Bounce.easeOut,
			delay: 2.5
		});
		TweenMax.fromTo('.img06_04', 1, {
			y: 50,
			autoAlpha: 0
		},{
			autoAlpha:1,
			y: 0,
			ease: Bounce.easeOut,
			delay: 3
		});
	}
	function sceneAnimation7(){
		TweenMax.fromTo('.img07_01', 2, {
			scale: 0,
			autoAlpha: 0
		},{
			autoAlpha:1,
			scale: 1,
			ease: Bounce.easeOut,
			delay: 0
		});
		var arryScene = [".img07_02", ".form",  ".img07_03", ".img07_03", ".img07_04",".img07_05"];
		TweenMax.staggerTo(arryScene, 
			1,  
			{
				autoAlpha: 1,
				ease: Bounce.easeOut
			},
			0.5		
		);
	}

	function killTweens(pageindex) {
		TweenMax.killChildTweensOf('#stage');
		init(pageindex);
	}
	function init(pageindex){
		TweenMax.set('.scene .imgBox',{
			autoAlpha: 0
		})
	}

    var $showshu = $('.shuzi');
	var $mycanvas = $('.showprogress');
	var $pp =$('.pp');

	loadPicture();

	function loadPicture(){
        imgPreloading.preload({
            onLoad: function(loadCount, totalCount, source){
                var value = parseInt(loadCount / totalCount * 100) + '%';
                var flag = true;
                $showshu.text(value);
                $pp.width(value);
                console.log(value, source);
                // if(value>0.5&&flag){
                // 	debugger
                // 	$mycanvas.remove();
                //     startAnimation();
                //     flag = false;
                // }
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

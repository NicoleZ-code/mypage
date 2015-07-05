/**
 * Created by ZYH on 14-3-17.
 */
$(document).ready(function($) {
    /*loading-start*/
        $("#loading-holder").css('display', 'block');
        $("#loading-holder .loading-logo").css('display', 'block');
        $(".expand-content-holder").css('display', 'none');

        setTimeout(function(){
             $("#loading-holder .loading-line-bg .loading-line").addClass('loading-line2') ;   
        },100)

        setTimeout(function(){
            $("#loading-holder .top-bg").addClass('top-bg-translate');   
            $("#loading-holder .bottom-bg").addClass('bottom-bg-translate');            
            $("#loading-holder .loading-line-bg").css('display', 'none');;        
        },5000)
        setTimeout(function(){
             $("#loading-holder").css('display', 'none');    
        },5500)
         
       
       /* $("#loading-holder").hide();*/
    /*loading-end*/


    /*header-start*/
     $("#menu").localScroll();

    $("#header #header_2").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $("#header #header_1").css({
            '-webkit-transform': 'translateY(0px)',
            '-moz-transform': 'translateY(0px)',
            '-ms-transform': 'translateY(0px)',
            'transform': 'translateY(0px)'
        });
        $("#header #header_2").css({
            '-webkit-transform': 'translateY(-120px)',
            '-moz-transform': 'translateY(-120px)',
            '-ms-transform': 'translateY(-120px)',
            'transform': 'translateY(-120px)'
        });

    }, function() {
        /* Stuff to do when the mouse leaves the element */
         setTimeout(function(){
            $("#header #header_1").css({
                '-webkit-transform': 'translateY(-90px)',
                '-moz-transform': 'translateY(-90px)',
                '-ms-transform': 'translateY(-90px)',
                'transform': 'translateY(-90px)'                
            });           
        }, 1000);
        setTimeout(function(){
            $("#header #header_2").css({
                '-webkit-transform': 'translateY(0px)',
                '-moz-transform': 'translateY(0px)',
                '-ms-transform': 'translateY(0px)',
                'transform': 'translateY(0px)'                
            });           
        }, 1000);

    });
        /*header-end*/

    /*sky-cloud*/
    setTimeout(function(){
        $("#sky .cloud").addClass("cloud-move");
    },0);
/*    setInterval(function(){
        $("#sky .cloud").removeClass("cloud-move");
    },10000);
        setInterval(function(){
        $("#sky .cloud").addClass("cloud-move");
    },20000);*/


    /*container_2-start*/
    //background-position
    $(window).resize(function() {
               
        var t;
        var b;
         var width=$(document.body).width();
         var height=$(document.body).height();
        t=-((1280*width)/1920-height)*0.5;
        b=-((1280*width)/1920)*0.5;
        $("#loading-holder .top-bg").css({            
            'background-position': '50% '+t+'px' 
        })
        $("#loading-holder .bottom-bg").css({            
            'background-position': '50% '+b+'px'
        })


     });

	$(".item ").click(function(){
		
		$("#loading-holder").css('display', 'block');
		$(".loading-line-bg,.loading-logo").css('display', 'none');
        $(".expand-content-holder").css('display', 'block');
        
        /*loading-gif*/
        $(this).find(".bg").append('<div class="spinner"><img src="images/spinner.gif" alt=""></div>');

		var src = $(this).find('.thumb img').attr("src");
		var name=src.substring(src.length-6, src.length-4);	
		var path = "images/gallery/experience/expand/expand_"+name +".jpg";	
		/*background*/
		$("#loading-holder .bg").css({
			'background-image': 'url('+path+')'           
		});

        var t;
        var b;
         var width=$(document.body).width();
         var height=$(document.body).height();
        t=-((1280*width)/1920-height)*0.5;
        b=-((1280*width)/1920)*0.5;
        $("#loading-holder .top-bg").css({            
            'background-position': '50% '+t+'px' 
        })
        $("#loading-holder .bottom-bg").css({            
            'background-position': '50% '+b+'px'
        })

         
        $("#loading-holder .top-bg").addClass('top-bg-translate');
        $("#loading-holder .bottom-bg").addClass('bottom-bg-translate');
		setTimeout(function(){
				$("#loading-holder .bg").addClass('flybg');				
		}, 200);


        $(".expand-content-holder").css({
            'display': 'block'                               
        });
        $(".expand-content-holder .close-btn").css({
            '-webkit-transform': 'translateX(0px) translateY(0px)',
            'opacity': '1',
            '-webkit-transition': '350ms cubic-bezier(0.1, 0.1, 0.43, 0.86) 250ms',
            'transition': '350ms cubic-bezier(0.1, 0.1, 0.43, 0.86) 250ms'
        });
        setTimeout(function(){
                $(".expand-content-holder").addClass('flycontent');            
        }, 500);
	
		 	/*Circle*/
		 	var title=$(this).find(".bg .thumbInfo .img-content h6").html();/*	[0].innerHTML	*/	
		 switch(name){
		 	case '01': 			   
		 			   var content = "Join us for Dora’s Dance Party, where kids can go on a singing and dancing adventure with Dora the Explorer and Team Nick!";
		 		break;
		 	case '02': var content = "This is a NO SLEEP ZONE! Party in your PJs and wake up with an exclusive buffet breakfast featuring Nickelodeon characters. With character performances, photo opportunities,meet and greets and take home gifts.";
		 		break;
		 	case '03': var content = "Time to get crafty! The whole family can show their artistic side with unique Nickelodeon-themed arts and crafts activities. You’ll want all hands on deck for this!";
		 		break;
		 	case '04': var content = "Get ready to explore with Dora! You’ll go on a storybook adventure to help Dora and Team Nick save Mermaid Kingdom from a mean Octopus.";
		 		break;
		 	case '05': var content = "The mess is hitting the deck! Nick Live! Poolside pulls contestants right out of the audience to compete in outrageous Nickelodeon challenges. Pie in the face, anyone?";
		 		break;
		 	case '06': var content = "Hit the buzzer, race the clock and get extreme! Experience the best of Nickelodeon’s famous game shows live on stage. Trivia, speed, skill and Slime combine to get everyone in on the action, so… Name that Game!";
		 		break;
		 }			
             $(".description-box .description-content h1").html(title);
             $(".description-box .description-content p").html(content);    
             //消除缓动
              setTimeout(function(){
                     $("#loading-holder .bg").addClass('bgnotransiton');            
                }, 1000);
           


             /*close*/
             $(".close-btn .rollover ").click(function(){
                //恢复缓动
                 $("#loading-holder .bg").removeClass('bgnotransiton');
          
                setTimeout(function(){
                    $("#loading-holder .bg").removeClass('flybg');             
                }, 500);
                setTimeout(function(){
                    $(".expand-content-holder").removeClass('flycontent');            
                }, 100);
                setTimeout(function(){
                    $("#loading-holder").css('display', 'none');           
                }, 900);
                 $(".item .bg .spinner").css('display', 'none'); 
             	this
             });

	});
    /*container_2-end*/


 	
 });

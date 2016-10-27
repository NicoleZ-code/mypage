require.config({
	baseUrl:'./',
	paths:{
		'jquery':'libs/jquery/jquery-2.1.0.min',
		'swiper':'libs/Swiper-master/dist/js/swiper.min',
	},
	waitSeconds: 0,
	packages:[
		{name:'three',main:'',location:'vendors/greensock/'}
	]
});
require([
	"jquery",
	"swiper"
	],function($,Swiper){
        var mySwiper = new Swiper('#swiper-container', {
            direction: 'vertical',
            // loop: true,
            pagination : '.swiper-pagination',
            paginationType: 'custom',
            paginationClickable :true,
            mousewheelControl:true,
            onSlideChangeEnd: function(swiper){
                
                var pageindex = swiper.activeIndex;

            }
        });
});
$(function(){
	// points
	var pointslist=[
			{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"1000"
			},{
				title:"购买限量版阿迪达斯红色运动鞋0001号一双",
				date:"2015-11-22 21:42:22",
				points:"-1000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"300"
			},{
				title:"购买限量版阿迪达斯红色运动鞋0987号一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"500"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"7000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"8000"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-700"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"300"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"5000"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"11000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"1000"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-500"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"3300"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"5000"
			},{
				title:"购买限量版阿迪达斯红色运动鞋一双",
				date:"2015-11-22 21:42:22",
				points:"-5000"
			},{
				title:"分享运动文章",
				date:"2015-11-22 21:42:22",
				points:"12000"
			}
		]

	var goodslist=[
			{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				money:"¥399",
				points:"2000"
			},{
				img:"images/img03.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			},{
				img:"images/img02.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"300"
			},{
				img:"images/img04.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"5000"
			},{
				img:"images/img02.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"500"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"-5000"
			},{
				img:"images/img03.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			},{
				img:"images/img04.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"-700"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"300"
			},{
				img:"images/img03.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"-5000"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"500"
			},{
				img:"images/img04.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"-5000"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			},{
				img:"images/img02.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"-500"
			},{
				img:"images/img03.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"300"
			},{
				img:"images/img01.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"5000"
			},{
				img:"images/img04.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"5000"
			},{
				img:"images/img02.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"5000"
			},{
				img:"images/img04.jpg",
				title:"阿迪达斯运动鞋",
				date:"¥399",
				points:"1000"
			}
		]
	var $pointslist= $("#pointslist");
	var $goodslist= $("#goodslist");
	var $mypoints = $("#mypoints");

	$(".wrap").css("min-height",$(window).height());

	  init_points_data(pointslist);
	  init_goods_data(goodslist);
	Event_item("container");

	function init_points_data(data){
	   	var _str = "";
	   	var m1 =Math.floor(Math.random()*5+1);
	   	var m2 =Math.floor(Math.random()*data.length);
	   	var sum = 0;
	   	var w=$(window).width()-60-60;

	   	$pointslist.empty();
		for (var i = m1; i < m2; i++) {
			_str+="<li>";
			_str+="<span class=\"item-title\" style='width:"+w+"px'>"+data[i]["title"]+"</span>";
			_str+="<span class=\"date\">"+data[i]["date"]+"</span>";
			if(data[i]["points"]>=0){
				_str+="<span class=\"item-points zs\">"+data[i]["points"]+"</span>";				
			}else{
				_str+="<span class=\"item-points fs\">"+data[i]["points"]+"</span>";
			}
			sum += parseInt(data[i]["points"]);
			_str+="</li>";
		};
		if(sum==0){
			_str="<li class=\"empty\">无记录</li>";
		}
		$pointslist.append(_str);

	   	// console.log(sum)

		var p = parseInt($mypoints.html());
		var id=setInterval(function  () {
			if(p<sum){
				p+=Math.floor(Math.random()*100+sum*0.1);
				$mypoints.html(p);
			}else{
				$mypoints.html(sum);
				clearInterval(id);
			}

		},100);

	}	
	function init_goods_data(data){
		var _str = "";
	   	var m =Math.floor(Math.random()*data.length+1);
	   	var num=0;;
	   	if(m%2!=0){
	   		m--;
	   		if(m<=0){
	   			m+=3;
	   		}
	   	}
	   	// console.log(m)
	   	$goodslist.empty();
		for (var i = 0; i < m; i++) {
			_str+="<li>";
			_str+="<span class=\"img\"> <img alt='' src='images/img0"+Math.floor(Math.random()*4+1)+".jpg'></span>";
			_str+="<span class=\"bottominfo\">";
			_str+="<span class=\"goods-title\">"+data[i]["title"]+"00"+i+"</span>";
				num=(Math.floor(Math.random()*10)*100-1)+100;
			  _str+="<span class=\"money\"> ¥"+num+"</span>";
			  _str+="<span class=\"goods-points zs\"> 加"+parseInt(data[i]["points"])/100+Math.floor(Math.random()*1000)+"分</span>";
			  _str+="</span>";
			_str+="</li>";
		};
		if(m<=0){
			_str="......无记录.....";
		}
		$goodslist.html(_str);

	}

	function Event_item(id){		
		 // Respond to swipe events
		  var touchStartClientX, touchStartClientY;
		  var tile = document.getElementById(id);

		  tile.addEventListener("touchstart", function (event) {
			    if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
			        event.targetTouches > 1) {
			      return; // Ignore if touching with more than 1 finger
			    }

			    if (window.navigator.msPointerEnabled) {
			      touchStartClientX = event.pageX;
			      touchStartClientY = event.pageY;
			    } else {
			      touchStartClientX = event.touches[0].clientX;
			      touchStartClientY = event.touches[0].clientY;
			    }

			    event.preventDefault();
		  });

		  tile.addEventListener("touchmove", function (event) {
		    event.preventDefault();
		  });

		  tile.addEventListener("touchend", function (event) {
			    if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
			        event.targetTouches > 0) {
			      return; // Ignore if still touching with one or more fingers
			    }

			    var touchEndClientX, touchEndClientY;

			    if (window.navigator.msPointerEnabled) {
			      touchEndClientX = event.pageX;
			      touchEndClientY = event.pageY;
			    } else {
			      touchEndClientX = event.changedTouches[0].clientX;
			      touchEndClientY = event.changedTouches[0].clientY;
			    }

			    var dx = touchEndClientX - touchStartClientX;
			    var absDx = Math.abs(dx);

			    var dy = touchEndClientY - touchStartClientY;
			    var absDy = Math.abs(dy);

			    if (Math.max(absDx, absDy) > 10 && absDx < absDy && dy <-80) {
			      // (right : left) : (down : up)
			      //tileExchangeimg($(tile).index(), absDx > absDy ? (dx > 0 ? 1 : -1) : (dy > 0 ? numberX : -numberX));
			      init_points_data(pointslist);
			      init_goods_data(goodslist);

			    }
			   
		  });
	}
});

	









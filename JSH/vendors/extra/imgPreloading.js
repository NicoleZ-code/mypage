define(['jquery','extra/Class','modernizr'],function($, Class){
	var obj = Class.extend({
		init: function(element){
			this.$element = $(element);
		}
	});

	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1;

	obj.preload = function(options){
		obj.options = options ? options : {};

		obj.items = $('.imgBox');
		obj.loadcount = 0;
		obj.totalcount = obj.items.length;

		if(obj.totalcount == 0){
			obj._complete();
		}

		obj.items.each(function(i,item){
			new obj(item)._load();
		});
	}

	obj._complete = function(){
		++obj.loadcount;

		if(obj.loadcount == 0 || obj.loadcount == obj.totalcount && obj.options.onComplete){
			obj.options.onComplete();
		}
	}

	//prototype  javascript中的原型方法定义
	obj.prototype._load = function(){
		var current = this;
		current._source = current.$element.attr('data-source');
		current._type = current.$element.attr('data-type');

		current._texture = $('<img>').one('load', function(){
			current._texture = this;
			current._render();
		}).on('error', function(){
			obj._complete();

			if(obj.options.onError){
				obj.options.onError();
			}
		}).attr('src', current._source)[0];
	}

	obj.prototype._render = function(){
		var current = this;

		if(current._type == 'bg'){
			current.$element.css({'background-image':'url('+ current._source +')'});
		}else if(Modernizr.canvas && !isAndroid && current._source.indexOf('.gif') == -1){
			current._mycs = $('<canvas width="' + current._texture.width + '" height="' + current._texture.height + '">').appendTo(current.$element);
			current._ctx = current._mycs[0].getContext("2d");
			current._ctx.drawImage(current._texture, 0, 0, current._texture.width, current._texture.height);
		}else{
			current._mycs = $('<img src="' + current._source + '" alt="">').appendTo(current.$element);
		}

		obj._complete();

		if(obj.options.onLoad){
			obj.options.onLoad(obj.loadcount, obj.totalcount, current._source);
		}
	}
	
	return obj;

});
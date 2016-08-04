define(['jquery', 'extra/Class'], function($, Class){
	var obj = Class.extend({
		init: function(element, options){
			this.$element = $(element);
			this._setCss();
			this._initProperty(options);
			this._generateRandom();
		}
	});

	obj._options = {
		count: 2,
		minSpeed: 4,
		maxSpeed: 6,
		minDelay: 2,
		maxDelay: 3
	};

	obj.prototype._setCss = function(){
		this.$element.css({
			'pointer-events': 'none',
			'user-select': 'none'
		});

		if(this.$element.css('position') != 'fixed' && this.$element.css('position') != 'absolute'){
			this.$element.css('position','relative');
		}
	}

	obj.prototype._initProperty = function(options){
		this._options = $.extend({}, obj._options, options);
	}

	obj.prototype._generateRandom = function(){
		var scope = this;

		for (var i = 0; i < scope._options.count; ++i) {
			var posX = random(-500, 1000);
			var duration = random(scope._options.minSpeed, scope._options.maxSpeed);
			var delay = random(scope._options.minDelay, scope._options.maxDelay);
			var index = random(0, scope._options.source.length);

			var img = $('<img>').attr('src', scope._options.source[index])
						.css({
							position: 'absolute',
							right: -50,
							top: posX,
							width: '60px',
							animation: 'falldown ' + duration + 's linear ' + delay + 's infinite'
						})
						.appendTo(scope.$element);
		};
	}

	function random(start, end){
		return parseInt(start + Math.random() * (end - start));
	}

	return obj;
});
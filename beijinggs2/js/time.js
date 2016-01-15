/* 首页日期 */
//备忘录josn test
var memolist =[
	{
		id:"list001",
		date:"Fri Dec 04 2015 00:00:00 GMT+0800 (中国标准时间)",
		content:"“2015年 11月20日”,进行 “增值税”申报缴税操作。税额“99999”元,所属期起“2015年 11月29日”到所属期止“2015年 12月 22日”"
	},
	{
		id:"list002",
		date:"Wed Dec 16 2015 00:00:00 GMT+0800 (中国标准时间)",
		content:"xxxxx"
	}
];
var zqdatlist =["Fri Dec 04 2015 00:00:00 GMT+0800 (中国标准时间)","Fri Dec 04 2015 00:00:00 GMT+0800 (中国标准时间)","",""];

/*
*  @param {string} tbodyId  
*  @param {string} preBtn
*  @param {string} nextBtn
*  @param {string} yearId
*  @param {string} monthId
*  @param {boolean} isZhenQI
*  @param {boolean} isBeiWang
*/
function time(setting) {
	var zheqidate;
	// 判断有征期，没备忘录 
	if(setting.isZhenQI&&!setting.isBeiWang){ 

     	//setting.option

  //    	$.ajax({
		// 	url:setting.ajaxurl,
		// 	....
		// 	success:function(data){
		// 		zheqidate = data;//data 为数组或者josn 
		// 	}
		// })

	}


	var $ = function(id) {
		return "string" == typeof id ? document.getElementById(id) : id;
	};

	var Class = {
		create : function() {
			return function() {
				this.initialize.apply(this, arguments);
			}
		}
	}

	var Extend = function(destination, source) {
		for ( var property in source) {
			destination[property] = source[property];
		}
		return destination;
	}

	var Calendar = Class.create();
	Calendar.prototype = {
		initialize : function(container, options) {
			this.Container = $(container);// 容器(table结构)
			this.Days = [];// 日期对象列表

			this.SetOptions(options);

			this.Year = this.options.Year || new Date().getFullYear();
			this.Month = this.options.Month || new Date().getMonth() + 1;
			this.SelectDay = this.options.SelectDay ? new Date(
					this.options.SelectDay) : null;
			this.onSelectDay = this.options.onSelectDay;
			this.onToday = this.options.onToday;
			this.onFinish = this.options.onFinish;

			this.Draw();
		},
		// 设置默认属性
		SetOptions : function(options) {
			this.options = {// 默认值
				Year : 0,// 显示年
				Month : 0,// 显示月
				SelectDay : null,// 选择日期
				onSelectDay : function() {
				},// 在选择日期触发
				onToday : function() {
				},// 在当天日期触发
				onFinish : function() {
				}// 日历画完后触发
			};
			Extend(this.options, options || {});
		},
		// 当前月
		NowMonth : function() {
			this.PreDraw(new Date());
		},
		// 上一月
		PreMonth : function() {
			this.PreDraw(new Date(this.Year, this.Month - 2, 1));

		},
		// 下一月
		NextMonth : function() {
			this.PreDraw(new Date(this.Year, this.Month, 1));

		},
		// 上一年
		PreYear : function() {
			this.PreDraw(new Date(this.Year - 1, this.Month - 1, 1));
		},
		// 下一年
		NextYear : function() {
			this.PreDraw(new Date(this.Year + 1, this.Month - 1, 1));
		},
		// 根据日期画日历
		PreDraw : function(date) {
			// 再设置属性
			this.Year = date.getFullYear();
			this.Month = date.getMonth() + 1;
			// 重新画日历
			this.Draw();
		},
		// 画日历
		Draw : function() {
			// 用来保存日期列表
			var arr = [];
			// 用当月第一天在一周中的日期值作为当月离第一天的天数
			for (var i = 1, firstDay = new Date(this.Year, this.Month - 1, 1)
					.getDay(); i <= firstDay; i++) {
				arr.push(0);
			}
			// 用当月最后一天在一个月中的日期值作为当月的天数
			for (var i = 1, monthDay = new Date(this.Year, this.Month, 0)
					.getDate(); i <= monthDay; i++) {
				arr.push(i);
			}
			// 清空原来的日期对象列表
			this.Days = [];
			// 插入日期
			var frag = document.createDocumentFragment();
			while (arr.length) {
				// 每个星期插入一个tr
				var row = document.createElement("tr");
				// 每个星期有7天
				for (var i = 1; i <= 7; i++) {
					var cell = document.createElement("td");
					cell.innerHTML = "&nbsp;";
					if (arr.length) {
						var d = arr.shift();
						if (d) {
							//当前日期
							cell.innerHTML =d;
							var on = new Date(this.Year, this.Month - 1, d);
							// 判断是否今日
							var isToday =this.IsSame(on, new Date());

							////有征期，没备忘录
							if(setting.isZhenQI&&!setting.isBeiWang){
								this.Container.className="idCalendar nobeiwang";//为了css 样式
								
								/*检测是否在期内*/
								// for (var i = 0; i < zqdatlist.length; i++) {
								// 	if(this.IsSame(on,zqdatlist[i])){
										cell.innerHTML ="<a class='zqdate'>"+d+"</a>";
								// 		
								// 	}
								// };
							}

							////没有征期，有备忘录
							if(!setting.isZhenQI&&setting.isBeiWang){
								cell.innerHTML = "<span >"+d+"</span>";
								
								//判断当天是否有备忘 有加class id //日期格式转换有点bug 带优化
								var memodate;
								// for (var i = 0; i < memolist.length; i++) {
								// 	memodate = new Date(memolist[i]["date"]); 
								// 	if(this.IsSame(on,memodate)){
										cell.innerHTML ="<span class='memoico' onclick='getMemo(this);'>"+d+"</span>"; //多传一个this 参数
								// 		cell.id =memolist[i]["id"];
								// 	}
								// };
							}
							this.Days[d] = cell;
							
							// 判断是否今日
							this.IsSame(on, new Date()) && this.onToday(cell);
							// 判断是否选择日期
							this.SelectDay && this.IsSame(on, this.SelectDay)
									&& this.onSelectDay(cell);
						}
					}
					row.appendChild(cell);
				}
				frag.appendChild(row);
			}
			// 先清空内容再插入(ie的table不能用innerHTML)
			while (this.Container.hasChildNodes()) {
				this.Container.removeChild(this.Container.firstChild);
			}
			this.Container.appendChild(frag);
			// 附加程序
			this.onFinish();
		},
		// 判断是否同一日
		IsSame : function(d1, d2) {
			return (d1.getFullYear() == d2.getFullYear()
					&& d1.getMonth() == d2.getMonth() && d1.getDate() == d2
					.getDate());
		}
	}

	var cale = new Calendar(setting.tbodyId, {
		// SelectDay: new Date().setDate(10),
		// onSelectDay: function(o){ o.className = "onSelect"; },
		onToday : function(o) {
			o.className = "onToday";
		},
		onFinish : function() {
			$(setting.yearId).innerHTML = this.Year;
			$(setting.monthId).innerHTML = this.Month;
			
			//
		}

	});

	$(setting.preBtn).onclick = function() {
		cale.PreMonth();
	}
	$(setting.nextBtn).onclick = function() {
		cale.NextMonth();
	}

}
//添加空心圆
function getMemo(v){
	var p=$(v).parents("td");
	if(!p.hasClass("onToday")){
		p.parents("tbody").find("td").removeClass("select");
		p.addClass("select");
	}
	
}
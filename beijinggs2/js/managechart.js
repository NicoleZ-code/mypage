

/*
创建曲线图
*/
function createLineChart(setting){
   $(setting.targetId).highcharts({
   		chart:{type:"area",height:setting.heightset},
        credits:{
           enabled:false     //去掉版本信息
        },
        exporting:{
           enabled:false//去掉打印
        },
        title: {
            text: ' ',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        plotOptions:{
        	series:{
        		marker:{
        			enabled:false
        		}
        	},
        	area:{
        		lineColor:"#3DAEF9",
        		fillColor:{
                linearGradient:{x1:0,y1:0,x2:0,y2:1},
                stops:[
                    [0,Highcharts.getOptions().colors[0]],
                    [1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]                
                ]
            }
        	}
        },
        xAxis: {
            categories: setting.labelarray,
            tickLength:1,
            tickPosition:"inside"
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {  
        	 backgroundColor:"#65BFF3",     
             headerFormat: '',
             pointFormat: '<span style="font-size:12px;color:#fff">{point.y}</span><br/>'
        },
        legend: {
            enabled:false
        },
        series:setting.dataarray 
    });
}


/*
创建柱形图
*/
function createBarChart(setting){
 $(setting.targetId).highcharts({
        credits:{ enabled:false},
        exporting:{enabled:false},
        chart: {
              type: 'column',
              height:setting.heightset,
              spacingTop:10
        }, 
        colors:["#BC90E3","#1BBFF0"],
         title: {
              text: null
          },        
          xAxis: {
              type: 'category',
              tickLength:1,
              tickPosition:"inside"   
          },
          yAxis: {
              title: {
                  text: ''
              }
          },
          legend: {
              align:"right",
              symbolHeight:8,
              symbolWidth:8,
              itemStyle:{
              	color:"#555",
              	fontWeight:"normal",
	            fontFamily:"Microsoft YaHei" 

          	}
          },
          plotOptions: {
              series: {
                  borderWidth: 0,
                  dataLabels: {
                      enabled: false,
                      format: '{point.y:.1f}%'
                  }
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:11px;color:#555">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}<b>{point.y}</b></span> <br/>'
          },
          series: setting.dataarray
      });
}

/*
创建圆环图
*/
function createdoughnutChart(setting){
  var _align ="center",vAlign="bottom";
  var l = setting.labelarray, 
      v = setting.dataarray,
      otherrate = v[5]/(v[0]+v[1]+v[2]+v[3]+v[4]+v[5]);
  if(setting.layoutsel=="right"){
      _align ="right";
      vAlign ="top";
  } 
  var defaultConfig ={
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',  
              height:setting.heightset,
              className:setting.layoutsel,
              inverted:true
          },
          credits:{
            enabled:false
          },
          colors:["#1EACEF","#56C85B","#F3CE47","#EF697D","#9778D7","#C7C5C5"],
          title: {
              text: ''
          },
          tooltip: {
              pointFormat: '<b>{point.percentage:.2f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: false,
                      format: '{point.percentage:.1f} %',
                      style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  },
                  showInLegend: true,
                  distance:10
              },
              series: {
                stacking: 'normal'
              }
          },
        xAxis: {
            categories: setting.labelarray,
            tickLength:1,
            tickPosition:"inside",
            labels:{
              enabled:false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
         legend: {
              layout: "vertical",
              align: _align,
              verticalAlign: vAlign,
              borderWidth: 0,
              floating:false,
              itemMarginTop:20,
               itemStyle:{
                  color:"#555",
                  fontWeight:"normal",
                  fontFamily:"Microsoft YaHei" 
              },
              labelFormatter:function(){
                  return "<div class='legendbox' style='width:200px;'><span class='name'>"+this.name+"</span></div>"; 
              },
              useHTML:true,
              symbolHeight:10,
              symbolWidth:10,
              symbolPadding:5,
              padding:5
          },
          series: [{
              name: "pie",
              colorByPoint: true,
              innerSize: '90%',
              data: [    
                {name:setting.labelarray[0], y:setting.dataarray[0]},
                {name:setting.labelarray[1], y:setting.dataarray[1]},
                {name:setting.labelarray[2], y:setting.dataarray[2]},
                {name:setting.labelarray[3], y:setting.dataarray[3]},
                {name:setting.labelarray[4], y:setting.dataarray[4]},
                {name:setting.labelarray[5], y:setting.dataarray[5]}
              ]
          }]
      };
   if(otherrate>0.7){ //其他>70% 即前五家企业<=30%
      defaultConfig.chart.type= "column";
      defaultConfig.chart.className ="bottom-column";
      defaultConfig.series = [{
        name:setting.labelarray[0],
        data:[    
              {name:setting.labelarray[0], color:"#1EACEF", y:setting.dataarray[0]},
              {name:setting.labelarray[1], color:"#56C85B", y:setting.dataarray[1]},
              {name:setting.labelarray[2], color:"#F3CE47", y:setting.dataarray[2]},
              {name:setting.labelarray[3], color:"#EF697D", y:setting.dataarray[3]},
              {name:setting.labelarray[4], color:"#9778D7", y:setting.dataarray[4]}
            ]
      },{
        name:setting.labelarray[1],//空数据只是为了显示图例-公司名称
        data:[]  
      },{
        name:setting.labelarray[2],//空数据只是为了显示图例-公司名称
        data:[]
      },{
        name:setting.labelarray[3],//空数据只是为了显示图例-公司名称
        data:[]
      },{
        name:setting.labelarray[4],//空数据只是为了显示图例-公司名称
        data:[]
      }
      ];
      defaultConfig.tooltip.pointFormat= '<b>{point.y}</b>'; 
      defaultConfig.legend.labelFormatter =function(){//正常柱形图只有一条总的图例-公司名，为了显示多条图例而修改后，柱形图显示不出数值
         return "<div class='legendbox' style='width:200px;'><span class='name' title='"+this.name +"'>"+this.name+"</span></div>"; 
      }
   }else if(setting.layoutsel!="right"){
      defaultConfig.legend.labelFormatter =function(){//
          var p = this.percentage.toFixed(1);
          return "<div class='legendbox' style='width:200px;'><span class='name' title='"+this.name +"'>"+this.name+"</span><span class='data'>"+this.y+"("+p+"%)</span></div>";                       
      }
    }

	$(setting.targetId).eq(setting.indexsel).highcharts(defaultConfig);
}
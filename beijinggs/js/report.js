/*税务报告js*/
function getReport_pie(){
	 $('#chart_pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        //去掉版本信息
        credits:{
           enabled:false
        },
           //去掉打印
        exporting:{
           enabled:false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: ' {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                y: 5
            }, {
                y: 12,
                sliced: true,
                selected: true
            }, {
               
                y: 13
            }, {
               
                y: 20
            }, {
               
                y:10
            }, {
              
                y: 40
            }]
        }]
    });
}
//折线图
function getpage4_column(){
	 $('#page4_column').highcharts({
           title: {
            text: '',
            x: -20 //center
        },
        //去掉版本信息
        credits:{
           enabled:false
        },
           //去掉打印
        exporting:{
           enabled:false
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['1月', '2月', '3月', '4月', '5月']
        },
        yAxis: {
            title: {
                text: '税款（万）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
        {
            name: '交税',
            data: [100, 110,90,100,80,100]
        }, {
            name: '欠税',
            data: [90,100,110,114,90,110]
        }]
   
});

}
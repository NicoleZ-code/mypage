$(document).ready(function () {
    //id对应china-zh.js中省份的简称
    var dataStatus = [
        { id: 'HKG', name: '香港', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'HAI', name: '海南', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'YUN', name: '云南', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'BEJ', name: '北京', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'TAJ', name: '天津', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'XIN', name: '新疆', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'TIB', name: '西藏', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'QIH', name: '青海', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'GAN', name: '甘肃', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'NMG', name: '内蒙古', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'NXA', name: '宁夏', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'SHX', name: '山西', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'LIA', name: '辽宁', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'JIL', name: '吉林', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'HLJ', name: '黑龙江', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'HEB', name: '河北', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'SHD', name: '山东', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'HEN', name: '河南', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'SHA', name: '陕西', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'SCH', name: '四川', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'CHQ', name: '重庆', des: '<br/>重庆微软云暨移动应用孵化平台', url: 'http://chongqing.msstartup.cn/', content: '重庆微软云暨移动应用孵化平台', color: '#00B16A' },
        { id: 'HUB', name: '湖北', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'ANH', name: '安徽', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'JSU', name: '江苏', des: '<br/>盐城微软技术实践中心暨大数据产业孵化平台', url: 'http://yancheng.msstartup.cn/', content: '盐城微软技术实践中心暨大数据产业孵化平台', color: '#00B16A' },
        { id: 'SHH', name: '上海', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'ZHJ', name: '浙江', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'FUJ', name: '福建', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'TAI', name: '台湾', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'JXI', name: '江西', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'HUN', name: '湖南', des: '<br/>长沙高新区微软云暨移动应用孵化平台', url: 'http://www.msstartup.cn/', content: '长沙高新区微软云暨移动应用孵化平台', color: '#00B16A' },
        { id: 'GUI', name: '贵州', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'GXI', name: '广西', des: '<br/>暂无孵化平台', url: '', content: '', color: '' },
        { id: 'GUD', name: '广东', des: '<br/>暂无孵化平台', url: '', content: '', color: '' }
    ];

    $('#map').vectorMap({
        map: 'china_zh',
        backgroundColor: false,
        color: "#B4B4B4", //地图颜色
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 2
        },
        onLabelShow: function (event, label, code) { //动态显示内容
            $.each(dataStatus,
                function (i, items) {
                    if (code === items.id) {
                        label.html(items.name + items.des);
                    }
                });
        },
        //鼠标移入省份区域，改变鼠标状态
        onRegionOver: function (event, code) {
            $.each(dataStatus,
                function (i, items) {
                    if ((code === items.id) && (items.url !== '')) {
                        $('#map').css({ cursor: 'pointer' });
                    }
                });
        },
        //鼠标移出省份区域，改回鼠标状态
        onRegionOut: function (event, code) {
            $.each(dataStatus,
                function (i, items) {
                    if ((code === items.id) && (items.url !== '')) {
                        $('#map').css({ cursor: 'auto' });
                    }
                });
        },
        //点击有孵化平台的省份区域，跳转到对应孵化平台官网
        onRegionClick: function (event, code) {
            $.each(dataStatus,
                function (i, items) {
                    if ((code === items.id) && (items.url !== '')) {
                        window.location.href = items.url;
                    }
                });
        }
    });

    $.each(dataStatus, function (i, items) {
        if (items.url !== '') {
            var stringHtml = '<div id="' + items.id + '" class="mapColor"></div>' +
               '<div class="contentBody">' +
               '<span id="' + items.id + '_desc" class="desc"></span>' +
               '</div>';

            $('.content').append(stringHtml);
            $('#' + items.id).css('background-color', items.color);
            $('#' + items.id + '_desc').text(items.content);

            var josnStr = "{" + items.id + ":'" + items.color + "'}";
            $('#map').vectorMap('set', 'colors', eval('(' + josnStr + ')'));
        }
    });
    $('.jvectormap-zoomin').click(); //放大
});
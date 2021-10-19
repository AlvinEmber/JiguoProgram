$(function() {
    //post 方式提交只需将  get 改为 post
    $.get({
        //对url地址的json文件发起请求 
        url: 'http://192.168.1.29:3000/useing/public',
        //请求时携带参数  参数以对象形式定义
        data: {},
        // dataType : 期望的数据类型 如果为json 会将后端返回的json串自动解析
        dataType: 'json',
        //请求成功时 执行函数
        //函数的参数 存储响应体
        //自定义形参res中存储的是响应体
        success: function(res) {
            // console.log(res);
            // this.data.list=res
            var str = '';
            for (var i of res) {
                // console.log(i);
                str += '<li>';
                str += '<div>';
                str += '<img src="';
                var imgurl = i.img;
                // console.log(imgurl);
                imgurl = imgurl.replace('localhost', '192.168.1.29');
                // console.log(imgurl);
                str += imgurl;
                str += '" />';
                // str += '<img src="' + i.img + '" />';
                str += '<div class="bt_1">' + i.description + '</div>';
                str += '<div class="bt_2">' + i.text + '</div>';
                str += '<div class="bj_1">' + i.price + '</div>';
                str +='<div class="bj_1">' + i.words + '</div>';
                str +='<div class="bj_2">' + i.words + '</div>';
                str += '<>';
            }

            $('.bottom_ul_').html(str);
            // this.data.list=res
        }
    })
})

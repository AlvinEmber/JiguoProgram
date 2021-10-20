$(function () {
    //post 方式提交只需将  get 改为 post
    $.get({
        //对url地址的json文件发起请求 
        url: 'http://192.168.1.29:3000/report/new',
        //请求时携带参数  参数以对象形式定义
        data: {},
        // dataType : 期望的数据类型 如果为json 会将后端返回的json串自动解析
        dataType: 'json',
        //请求成功时 执行函数
        //函数的参数 存储响应体
        //自定义形参res中存储的是响应体
        success: function (res) {
            var str = '';
            res = res.slice(0, 5);
            for (var i of res) {
                str += '<li class="left_li">';
                str += '<img src="';
                var imgurl = i.img;
                imgurl = imgurl.replace('localhost', '192.168.1.29');
                str += imgurl;
                str += '" alt="">';
                str += '<div>';
                str += '<h4>' + i.text + '</h4>';
                str += '<br>';
                str += '<img src="../img/icon/tx.jpg" alt="">';
                str += '<p>苏苏</p>';
                str += '<p>2016-01-25</p>';
                str += '<i><img src="../img/icon/zan.png" alt="">3</i>';
                str += '<i><img src="../img/icon/reply.png" alt="">3</i>';
                str += '</div>';
                str += '<p>关于格林威特空气净化器还有4篇报告，点击查看</p>';
                str += '</li>';
            }
            $('.newest_left').html(str);
            // this.data.list=res
        }
    })
})
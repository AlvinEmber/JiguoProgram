$(function () {
    //post 方式提交只需将  get 改为 post
    $.get({
        //对url地址的json文件发起请求 
        url: 'http://192.168.1.29:3000/guid/new',
        //请求时携带参数  参数以对象形式定义
        data: {},
        // dataType : 期望的数据类型 如果为json 会将后端返回的json串自动解析
        dataType: 'json',
        //请求成功时 执行函数
        //函数的参数 存储响应体
        //自定义形参res中存储的是响应体
        success: function (res) {
            var str = '';
            // console.log(res);
            res = res.slice(0, 4);
            for (var i of res) {
                // console.log(i);
                str += '<li>';
                str += '<img src="';
                var imgurl = i.img;
                // console.log(imgurl);
                imgurl = imgurl.replace('localhost', '192.168.1.29');
                // console.log(imgurl);
                str += imgurl;
                str += '" />';
                str += '<h5>' + i.text + '</h5>';
                str += '<p></p>';
                str += '<i><img src="./img/icon/xin.png" alt="">3</i>';
                str += '<i><img src="./img/icon/reply.png" alt="">3</i>';
                str += '</li>';
            }
            $('.guider_listBox_list').html(str);
            // this.data.list=res
        }
    })
})
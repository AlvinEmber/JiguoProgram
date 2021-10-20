$(function () {
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
        success: function (res) {
            var str = '';
            for (var i of res) {
                // console.log(i);
                str += '<li class="XQ">';

                str += '<img src="';
                var imgurl = i.img;
                // console.log(imgurl);
                imgurl = imgurl.replace('localhost', '192.168.1.29');
                // console.log(imgurl);
                str += imgurl;
                str += '" />';
                str += '<dd style="white-space: nowrap;overflow:hidden;text-overflow:ellipsis;">' + i.text + '</dd>';
                str += '<i class="firstii">2032</i>';
                str += '<i class="secondii">20台</i>';
                str += '<br>';
                str += '<br>';
                str += '<p style="color:orange;font-size:16px;line-height:30px;height:30px;">1392申请</p>';
                str += '<p>剩余时间：2天</p>';
                str += '</li>';
            }
            $('.mobile').html(str);
            // this.data.list=res
        }
    })
    $('.XQ').on('click', function () {
        location.href = "./use/use_chanpinxiangqing.html"
    })
})